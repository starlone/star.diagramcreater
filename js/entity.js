function Column(name,type){
    this.name = name;
    this.type = type;
}

Column.prototype.getSQL = function(){
    return this.name + ' ' + this.type;
}

function Entity(options){
    this.containment = ".drag-area";
    this.name = 'Entity';
    if(options){
        if(options.containment)
            containment = options.containment;
        if(options.name)
            this.name = options.name;
    }
    this.columns = [];
    this.element = $('<div />');
    this.element.attr('class','entity draggable mdl-card mdl-shadow--2dp');

    // HEAD
    var phead = $('<div class="mdl-card__title" />');

    var etitle = $('<h2 class="entity-title mdl-card__title-text" />').html(this.name);
    phead.append(etitle);

    var pbuttons = $('<div class="pbuttons mdl-card__menu" >');
/*
    var bedit = $('<button class=""/>');
    bedit.append( $('<span class="glyphicon glyphicon-pencil" />') );
    pbuttons.append(bedit);
*/

    var bclose = $('<button class="bclose mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect" />');
    bclose.append( $('<i class="material-icons" />').text('delete') );
    pbuttons.append(bclose);

    // BODY

    var ptable = $('<table class="mdl-card__supporting-text mdl-data-table mdl-js-data-table" />');
    var ptbody = $('<tbody />');
    ptable.append(ptbody);

    this.element.attr('id','entity-' + $('.entity').length + 1);

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
Entity.prototype.getElement = function(){
    return this.element;
}
Entity.prototype.getId = function(){
    return this.element.attr('id');
}
Entity.prototype.setName = function(name){
    if (name){
        this.name = name;
        this.element.find('.entity-title').html( name );
    }
}
Entity.prototype.setPosition = function(pos){
    var pos_e = this.element.position();
    var pos_area = $(this.containment).position();
    var postop = pos_area.top - pos_e.top + pos.top;
    var posleft = pos_area.left - pos_e.left + pos.left;
    this.element.css('top',postop).css('left',posleft);
}

Entity.prototype.getSQL = function(){
    var txt = 'CREATE TABLE ';
    txt += this.name;
    txt += '\n{\n    ';
    var lista = [];
    for(var i in this.columns){
        var c = this.columns[i];
        lista.push(c.getSQL());
    }
    txt += lista.join(',\n    ');
    txt += '\n};\n';
    return txt;
}

Entity.prototype.newColumn = function(name,type){
    var c = new Column(name,type);
    this.columns.push(c);
    var tr = $('<tr />');
    var td_name = $('<td />').html(name);
    var td_type = $('<td />').html(type);
    this.element.find('tbody').append(tr);
    tr.append(td_name).append(td_type);
}

