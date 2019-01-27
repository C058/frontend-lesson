import Parent from './parent';

class TodoList {
    constructor() {
        this.setParam();
        this.bindEvent();
    }
    setParam() {
        this.submitButton = $('#submitButton');
        this.form = $('#inputText');
        this.list = $('#todoList');
        this.doneSelector = '.doneTrigger';
        this.deleteSelector = '.deleteTrigger';
    }

    bindEvent() {
        this.submitButton.on('click',
            // function() {
            //     this.register2List();
            // }.bind(this)
            () => {
                if (this.form.val() != "") {
                    this.register2List();
                }
            }
        );
        this.list.on('click', this.doneSelector, 
            () => {
                this.doneFunc();
            }
        );
        this.list.on('click', this.deleteSelector, 
            () => {
                this.deleteFunc();
            }
        );

    }

    // onSubmit;
    register2List() {
        // 本来ならCallbackするまえに値渡しをするのが良いのでこの書き方は微妙。。。
        // bindついでに書いてしまう
        this.list.append(this.generateTodoTag(this.form.val()));
        this.form.val('');
    }

    generateTodoTag(task) {
        return '<li>'+ task +' <button class="doneTrigger">done</button><button class="deleteTrigger">delete</button></li>'
    }

    doneFunc() {
        console.log('doneFunc');
    }

    deleteFunc() {
        console.log('deleteFunc');
    }
}
export default TodoList;
