var john = {
  name: 'John',
  age: 26,
  job: 'teacher',

  presentation: function (style, timeOfDay) {
    if (style === 'formal') {
      console.log(
        `Good ${timeOfDay}, Ladies and gentlemen! I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old.`
      );
    } else if (style === 'friendly') {
      console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
    }
  }
};

var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
};

john.presentation('formal', 'morning');

// john.presentation.call(emily, 'friendly', 'afternoon');
// john.presentation.apply(emily, ['formal', 'morning']);

var johnFriendly = john.presentation.bind(emily, 'friendly', 'afternoon');
johnFriendly();
// johnFriendly('night');

// var emilyFormal = john.presentation.bind(emily, 'formal');
// emilyFormal('afternoon');
