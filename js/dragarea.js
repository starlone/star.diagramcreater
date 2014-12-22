
function DragArea(options){
	this.selector = ".drag-area";
	var self = this;
	if(options){
		if(options.selector){
			this.selector = options.selector;
		}
	}
	this.element = $(this.selector);
	this.children = {};

	this.m_pos = { x : 0, y : 0 };

	this.element.mousemove(function(e){
		self.m_pos.x = e.pageX;
		self.m_pos.y = e.pageY;
	});


}

DragArea.prototype.addChild = function(child){
	this.children[child.getId()] = child;
	this.element.append(child.getElement());
}


DragArea.prototype.newEntity = function(options){
	var self = this;
	var pos = null;
	if(options){
	}
	var entity = new Entity({containment : this.selector});
	this.addChild(entity);
	entity.setPosition(this.calcMousePosition());

	entity.getElement().find('button.bclose').click(function(e){
	    e.preventDefault();
		var eid = $(this).parents('.entity').attr('id');
		self.rmChild(eid);
	});
	return entity;
}

DragArea.prototype.calcMousePosition = function(){
	var pos = this.element.position();
	return {
		left : this.m_pos.x - pos.left,
		top : this.m_pos.y - pos.top,
	}
}


DragArea.prototype.getChild = function(id){
	return this.children[id];
}

DragArea.prototype.getChildren = function(){
	return this.children;
}

DragArea.prototype.rmChild = function(cid){
	var child = this.getChild(cid);
	child.element.remove();
	delete this.children[cid];
}
