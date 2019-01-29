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
            // 書き方1
            // function() {
            //     this.register2List();
            // }.bind(this)
            // 書き方2
            () => {
                if (this.form.val() != "") {
                    this.register2List();
                }
            }
        );
        this.list.on('click', this.doneSelector, 
            // 答え１
            function(event) {
                this.doneFunc(event.target);
            }.bind(this)

            // 答え２
            // (event) => {
            //     this.doneFunc(event.target);
            // }
        );

        this.list.on('click', this.deleteSelector, 
            (event) => {
                this.deleteFunc(event.target);
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

    doneFunc(obj) {
        $(obj).parent().addClass('done');
        $(obj).prop("disabled", true);
    }

    deleteFunc(obj) {
        $(obj).parent().remove();
    }
}
export default TodoList;
