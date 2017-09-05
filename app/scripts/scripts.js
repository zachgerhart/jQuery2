$(document).ready(function() {
  var listo = []
  console.log(localStorage);
  localStorage.setItem('list', JSON.stringify(listo))
  $(document).on('click', '#inProgress', function (e) {
    e.preventDefault();
    var task = this;
    advanceTask(task);
    task.id = "archived";
    var changeIcon = task.outerHTML.replace('glyphicon-arrow-right', 'glyphicon-remove');
    advanceTask(task);
    $('#archivedList').append(changeIcon);
  });
  var advanceTask = function(task) {
    var myList = localStorage.getItem(JSON.parse(listo));
    var modified = task.innerText.trim()
    for (var i = 0; i < myList.length; i++) {
      if (myList[i].task === modified) {
        if (myList[i].id === 'new') {
          myList[i].id = 'inProgress';
        } else if (myList[i].id === 'inProgress') {
          myList[i].id = 'archived';
        } else {
          myList.splice(i, 1);
        }
        break;
      }
    }
    task.remove();
  };

$('#newTaskForm').hide();
var Task = function(task) {
	this.task = task;
	this.id = 'new';
}
var addTask = function(task) {
  if(task) {
    task = new Task(task);
    listo.push(task);
		// JSON.parse(localStorage.getItem('list')).push(task);
    localStorage.setItem('list', JSON.stringify(listo));
    $('#newItemInput').val('');

    $('#newList').append(
                            '<a href="#finish" class="" id="item">' +
                            '<li class="list-group-item">' +
                            '<h3>' + task.task + '</h3>'+
                            '<span class="arrow pull-right">' +
                            '<i class="glyphicon glyphicon-arrow-right">' +
                            '</span>' +
                            '</li>' +
                            '</a>'
                        );
  }

    $('#newTaskForm').slideToggle('fast', 'linear');

};

$('#saveNewItem').on('click', function (e) {
    e.preventDefault();
    var task = $('#newItemInput').val().trim();
    addTask(task);
  });

    $('#add-todo').on('click', function () {
        $('#newTaskForm').fadeToggle('fast', 'linear');
    });
    //closes form
    $('#cancel').on('click', function (e) {
        e.preventDefault();
        $('#newTaskForm').fadeToggle('fast', 'linear');

      });







    });
