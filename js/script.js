$(function(){
	var m_pos = { x : 0, y : 0 };
	var area = new DragArea({selector : '.drag-area'});
	$('.drag-area').click(function(e){
		var self = $(this);
		var radio = $('.buttons-box :radio:checked');
		if(radio.length){
			if(radio.val() == 'entity'){
				var entity = area.newEntity({
					m_pos : m_pos
				});
				$('#modal-entity').modal();
				$('input[type=hidden][name=id_entity]').val(entity.getId());
				$('.form-entity input#entity-name').val('')
				$('.buttons-box :radio[value=move]').click();
			}
		}
	}).mousemove(function(e){
		m_pos.x = e.pageX;
		m_pos.y = e.pageY;
	});
	$('.buttons-box :radio').change(function(){
		var val = $(this).val();
		if(val == 'move'){
			$('.drag-area').css('cursor','');
		} else if(val == 'entity'){
			$('.drag-area').css('cursor','crosshair');
		}
	});
	$('form.form-entity').submit(function(e){
		e.preventDefault();
		var form = $(this);
		var id_entity = form.find('input[name=id_entity]').val();
		var entity = area.getChild(id_entity);
		var name = form.find('input#entity-name').val();
		entity.setName(name);
		$('#modal-entity').modal('hide');
	});
	$('.build_sql').click(function(e){
		e.preventDefault();
		var sql = '';
		var list = area.getChildren();
		for(var i in list ){
			var child = list[i];
			sql += child.getSQL();
		}
		var modal = $('#modal-sql');
		modal.find('.modal-body code').html(sql);
		modal.modal();
	});
});

