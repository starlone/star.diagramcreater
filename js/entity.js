function Column(name,type){
	this.name = name;
	this.type = type;
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
	this.element.attr('class','entity draggable panel panel-default ui-widget-content');
	var phead = $('<div class="panel-heading" />');
	phead.html(this.name);

	//var pbody = $('<div class="panel-body" />');
	var ptable = $('<table class="table" />');
	var ptbody = $('<tbody />');
	ptable.append(ptbody);

	this.element.attr('id','entity-' + $('.entity').length + 1);

	this.element.append(phead)
	            .append(ptable);

	this.newColumn('id','int');

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
		this.element.find('.panel-heading').html( name );
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
	txt += '\n{';
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

