function a() {
    console.log('this:', this);
    this.newvariable = 'hello';
}

var b = function () {
    console.log(this.newvariable);
    this.newvariable = 'quinnox';
}

a();

b();

var xyz = 10;
// global namespace pollution
console.log('outside:', newvariable); // not good!

console.log(window);

var c = {
    name: 'The c object',

    // log: function () {
    //     var self = this;
    //     self.name = 'Updated c object';
    //     console.log('in log():', self);

    //     var setname = function (newname) {
    //         self.name = newname;
    //         console.log('setname():', self);
    //     };

    //     setname('Updated again! The c object');
    //     console.log('after change:', self);
    // }

    log: function () {
        this.name = 'Updated c object';
        console.log('in log():', this);

        // arrow function syntax
        var setname = (newname) => {
            this.name = newname;
            console.log('setname():', this);
        };

        setname('Updated again! The c object');
        console.log('after change:', this);
    }
}

// console.log(c);

c.log();







