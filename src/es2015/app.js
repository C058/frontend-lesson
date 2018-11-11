import Person from './module/person';

class Friend extends Person{
    constructor(name) {
      super(name);
    }
    callName() {
      // alert(this.name);
      console.log(this.name);
    }
}

var friend = new Friend('Ryo');

friend.callName();