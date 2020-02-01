// console.log('this:', this);

// function sayHello() {
//   console.log('sayHello() this:', this);
// }

// sayHello();

const person = {
  name: 'ram',
  age: 25,

  showDetails: function () {
    console.log('showDetails() this:', this);
    console.log('name:', this.name, ' age:', this.age);
  }
};

const person2 = {
  name: 'john',
  age: 30
}

person.showDetails();

const show = person.showDetails.bind(person2);
show();