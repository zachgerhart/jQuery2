
$(document).ready(function() {
	$('#newTaskForm').hide();
	var listo = [];
	var Task = function(task) {
		this.task = task;
		this.id = 'new';
	};

	var advanceTask = function(task) {
	    var modified = task.innerText.trim()
	    for (var i = 0; i < listo.length; i++) {
	        if (listo[i].task === modified) {
	            if (listo[i].id === 'new') {
	                listo[i].id = 'inProgress';
	            } else if (listo[i].id === 'inProgress') {
	                listo[i].id = 'archived';
	            } else {
	                listo.splice(i, 1);
	            }
	            break;
	        }
	    }
	    task.remove();
	};

	var addTask = function(task) {
		if(task) {
			task = new Task(task)
			listo.push(task);
			$('#newItemInput').val('');
			$('#newList').append('<a href="#" class="" id="item"><li class="list-group-item">' + task.task + '<span class="arrow pull-right"><i class="glyphicon glyphicon-arrow-right"></span></li></a>');
 			localStorage.setItem("task", JSON.stringify(task));
		}
		$('#newTaskForm, #newListItem').fadeToggle('fast', 'linear');

		if(localStorage.getItem('task')) {
		$('#task').html(localStorage.getItem('task'));
		}

	};
	$('#saveNewItem').on('click', function(e) {
		e.preventDefault();
		var task = $('#newItemInput').val().trim();
		addTask(task);
	})

	$('#newListItem').on('click', function() {
		$('#newTaskForm, #newListItem').fadeToggle('fast', 'linear');
	})

	$('#cancel').on("click", function(e) {
		e.preventDefault();
		$('#newTaskForm, #newListItem').fadeToggle('fast', 'linear');
	})

	$(document).on('click', '#item', function (e) {
		e.preventDefault();
		var task = this;
		advanceTask(task);
		this.id = 'inProgress';
		$('#currentList').append(this.outerHTML);
		localStorage.setItem("task", JSON.stringify(task));
	})

	$(document).on('click', '#inProgress', function (e) {
		e.preventDefault();
		var task = this;
		task.id = 'archived';
		var changeIcon = task.outerHTML.replace('glyphicon-arrow-right', 'glyphicon-remove');
		advanceTask(task);
		$('#archivedList').append(changeIcon);
		localStorage.setItem("task", JSON.stringify(task));
	})

	$(document).on('click', '#archived', function(e) {
		e.preventDefault();
		var task = this;
		advanceTask(task);
	 	localStorage.setItem("task", JSON.stringify(task));	
	})



});