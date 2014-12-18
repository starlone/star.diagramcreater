
function Entity(options){
	this.containment = ".drag-area";
	this.name = 'Entity';
	if(options){
		if(options.containment)
			containment = options.containment;
		if(options.name)
			this.name = options.name;
	}
	this.element = $('<div />');
	this.element.attr('class','entity draggable panel panel-default ui-widget-content');
	var phead = $('<div class="panel-heading" />');
	phead.html(this.name);
	var pbody = $('<div class="panel-body" />');

	this.element.attr('id','entity-' + $('.entity').length + 1);

	this.element.append(phead).append(pbody);

	this.element.draggable({
		containment: this.containment,
		cursor: "move",
		cursorAt: { top: 56, left: 56 },
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
	this.name = name;
	this.element.find('.panel-heading').html( name );
}
Entity.prototype.setPosition = function(pos){
	var pos_e = this.element.position();
	var pos_area = $(this.containment).position();
	var postop = pos_area.top - pos_e.top + pos.top;
	var posleft = pos_area.left - pos_e.left + pos.left;
	this.element.css('top',postop).css('left',posleft);
}

