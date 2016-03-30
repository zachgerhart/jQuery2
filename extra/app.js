$(document).ready(function() {
    //ALL CODE GOES IN HERE
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
    $('#newTaskForm').hide();


    var listo = [];
    var Task = function(task) {
        this.task = task;
        this.id = "new";
    }
    var addTask = function(task) {
        if(task) {
            task = new Task(task);
            listo.push(task);

            $('#newItemInput').val('');

            $('#newList').append(
                '<section class="todo-container"> <div class="todo-img-container"> ' +
                '<div id="completetodo" class="incomplete-todo"></div>' +
                '<img class="completed-todo-icon" src="./img/icons/done-circle.png" alt="Todo Complete Icon"> ' +
                '</div> <div class="todo-content"> ' +
                '<h2>'+ task.task + '</h2> </div> </section>'
            );

        }

    };

    $('#saveNewItem').on('click', function (e) {
        e.preventDefault();
        var task = $('#newItemInput').val().trim();
        addTask(task);
    });

    $('#completetodo').on('click', function(e) {
        e.preventDefault();
        console.log(e)
        console.log('hello')
        //this.id = 'inProgress'
    });

    $(document).on('click', '#item', function(e) {
        e.preventDefault();
        var task = this;
        advanceTask(task);
        this.id = 'inProgress';
    });

    $(document).on('click', '#item', function(e) {
        e.preventDefault();
        var task = this;
        advanceTask(task);
        this.id = 'inProgress';
        $('#currentList').append(this.outerHTML);
    });

    $(document).on('click', '#inProgress', function (e) {
        e.preventDefault();
        var task = this;
        task.id = "archived";
        var changeIcon = task.outerHTML.replace('glyphicon-arrow-right', 'glyphicon-remove');
        advanceTask(task);
        $('#archivedList').append(changeIcon);
    });
    $(document).on('click', '#archived', function (e) {
        e.preventDefault();
        var task = this;
        advanceTask(task);
    });


});/**
 * Created by Ben on 3/30/16.
 */
