class TodoListNext {

    constructor() {
        this.setParam();
        this.bindEvent();
    }

    setParam() {
        this.tasks = this.task();
        console.log(this.tasks);
        this.submitButton = $('#submitButton');
        this.form = $('#inputText');
        this.list = $('#todoList');
        this.doneSelector = '.doneTrigger';
        this.deleteSelector = '.deleteTrigger';
    }

    bindEvent() {
        this.submitButton.on('click',
            () => {
                if (this.form.val() != "") {
                    this.addTaskList();
                }
            }
        );
        this.list.on('click', this.doneSelector, 
            (event) => {
                this.doneFunc(event.target);
            }
        );
        this.list.on('click', this.deleteSelector, 
            (event) => {
                this.deleteFunc(event.target);
            }
        );

    }

    task() {
        let tasks = new Array();
        return {
                getAllTask :function() {
                    return tasks;
                },
                addTask: function(taskName) {
                    tasks.push(taskName);
                },
                deleteTask: function(taskIndex) {
                    return tasks.splice(taskIndex,1); // indexから1要素削除
                 }
        }
    }

    addTaskList() {
        this.tasks.addTask(this.form.val());
        this.renderList();
        this.form.val("");
    }

    renderList() {
        this.list.empty();
        var tasks = this.tasks.getAllTask();
        var todoList = this.list;
        $.each(tasks, function(index, val) {
            todoList.append(generateTodoTag(index, val));
        });

        function generateTodoTag(index, task) {
            return '<li data-sort="'+index+'">'+ task +' <button class="doneTrigger">done</button><button class="deleteTrigger">delete</button></li>'
        }
    }

    doneFunc(obj) {
        $(obj).parent().addClass('done');
        $(obj).prop("disabled", true);
    }

    deleteFunc(obj) {
        var index = $(obj).parent().data('sort');
        this.tasks.deleteTask(index);
        this.renderList();
    }
}
export default TodoListNext;
