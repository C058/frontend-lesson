class TodoListNext {
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
                    this.register2List();
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

    register2List() {
        this.tasks.addTask(this.form.val());
        var tasks = this.tasks.getAllTask();
        this.list.empty();
        var todoList = this.list;
        $.each(tasks, function(index, val) {
            todoList.append(generateTodoTag(val));
        });

        function generateTodoTag(task) {
            return '<li>'+ task +' <button class="doneTrigger">done</button><button class="deleteTrigger">delete</button></li>'
        }
    }

    doneFunc() {
        
    }


    deleteFunc() {
    }
}
export default TodoListNext;
