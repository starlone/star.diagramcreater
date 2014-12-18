
function DragArea(options){
	this.selector = ".drag-area";
	if(options){
		if(options.selector){
			this.selector = options.selector;
		}
	}
	this.element = $(this.selector);
	this.children = {};
}

DragArea.prototype.addChild = function(child){
	this.children[child.getId()] = child;
	this.element.append(child.getElement());
}


DragArea.prototype.newEntity = function(options){
	var pos = null;
	if(options){
		if(options.m_pos){
			pos = options.m_pos;
		}
	}
	var entity = new Entity({containment : this.selector});
	this.addChild(entity);
	if (pos)
		entity.setPosition(this.calcMousePosition(pos));
	return entity;
}

DragArea.prototype.calcMousePosition = function(m_pos){
	var pos = this.element.position();
	return {
		left : m_pos.x - pos.left,
		top : m_pos.y - pos.top,
	}
}


DragArea.prototype.getChild = function(id){
	return this.children[id];
}
