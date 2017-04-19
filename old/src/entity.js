
function Entity(options){
    this.name = options.name || 'Entity';
    this.columns = [];
}

Entity.prototype.newColumn = function(name, type){
    var c = new Column(name,type);
    this.columns.push(c);
};

function EntityMDL(options){
    this.containment = options.containment || ".drag-area";
    var name = options.name || 'Entity';

    this.entity = new Entity({name: name});

    this.element = $('<div />');
    this.element.attr('class','entity draggable mdl-card mdl-shadow--2dp');

    var id = $('.entity').length + 1;

    // HEAD
    var phead = $('<div class="mdl-card__title" />');

    var etitle = $('<h2 class="entity-title mdl-card__title-text" />').html(this.entity.name);
    phead.append(etitle);

    var pbuttons = $('<div class="pbuttons mdl-card__menu" >');
/*
    var bedit = $('<button class=""/>');
    bedit.append( $('<span class="glyphicon glyphicon-pencil" />') );
    pbuttons.append(bedit);
*/

/*
    var button = $('<button class="mdl-button mdl-js-button mdl-button--icon"> <i class="material-icons">more_vert</i></button>');
    button.attr('id','bentity-' + id);
    this.element.append(button);

    var menu = $('<ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" />');
    menu.attr('for', button.attr('id'));
    menu.append($('<li class="mdl-menu__item"> Excluir</li>'));
    this.element.append(menu);
*/
    var bdelete = $('<button class="bclose mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect" />');
    bdelete.append( $('<i class="material-icons" />').text('delete') );
    pbuttons.append(bdelete);

    // BODY

    var ptable = $('<table class="mdl-card__supporting-text mdl-data-table mdl-js-data-table" />');
    var ptbody = $('<tbody />');
    ptable.append(ptbody);

    this.element.attr('id','entity-' + id);

    this.element.append(phead)
                .append(ptable)
                .append(pbuttons);

    this.newColumn('id','SERIAL');
    this.newColumn('name','CHAR');

    this.element.draggable({
        containment: this.containment,
        cursor: "move",
        scroll: true,
        stack: ".draggable",
    });
}

EntityMDL.prototype.getElement = function(){
    return this.element;
};

EntityMDL.prototype.getId = function(){
    return this.element.attr('id');
};

EntityMDL.prototype.setName = function(name){
    if (name){
        this.entity.name = name;
        this.element.find('.entity-title').html( name );
    }
};

EntityMDL.prototype.setPosition = function(pos){
    var pos_e = this.element.position();
    var pos_area = $(this.containment).position();
    var postop = pos_area.top - pos_e.top + pos.top;
    var posleft = pos_area.left - pos_e.left + pos.left;
    this.element.css('top',postop).css('left',posleft);
};

EntityMDL.prototype.getSQL = function(){
    var txt = 'CREATE TABLE ';
    txt += this.entity.name;
    txt += '\n{\n    ';
    var lista = [];
    for(var i in this.entity.columns){
        var c = this.entity.columns[i];
        lista.push(c.getSQL());
    }
    txt += lista.join(',\n    ');
    txt += '\n};\n';
    return txt;
};

EntityMDL.prototype.newColumn = function(name,type){
    this.entity.newColumn(name, type);
    var tr = $('<tr />');
    var td_name = $('<td />').html(name);
    var td_type = $('<td />').html(type);
    this.element.find('tbody').append(tr);
    tr.append(td_name).append(td_type);
};

function Column(name,type){
    this.name = name;
    this.type = type;
}

Column.prototype.getSQL = function(){
    return this.name + ' ' + this.type;
};
