// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var Human = (function () {
    function Human ( firstName, lastName ) {
        this.firstName = firstName || 'John';
        this.lastName = lastName || 'Doe';
    }

    // Human.prototype.__defineGetter__('age', function () {
    //     return this._age
    // })

    // Human.prototype.__defineSetter__('age', function ( value ) {
    //     this._age = typeof value == 'number' ? value : 0
    // })

    Human.prototype.greet = function () {
        return ( 'Hi, my name is ' + this.firstName + ' ' + this.lastName )
    }

    // Human.prototype.getFullname = function () {
    //     return this.firstName + ' ' + this.lastName
    // }

    // static method
    Human.type = function () { return 'human' }

    return Human;
})();

var joe = new Human( 'Joe', 'Doe' );
console.log( joe.greet() + ' and I am a ' + Human.type() + ' being.' );

Object.defineProperty(joe, 'fullName', {
    get: function () {
        return ( this.lastName + ', ' + this.firstName );
    }
});

Object.defineProperty(joe, 'occupation', {
    get: function () {
        return this._occupation;
    },
    set: function ( occupation ) {
        return this._occupation = occupation;
    }
});

console.log( 'Fullname: ' + joe.fullName );
joe.occupation = 'Front-end Developer';
console.log( 'Occupation: ' + joe.occupation );


var getRandom = function ( min, max ) {
    return Math.floor(Math.random() * ( max - min + 1 )) + min;
}

var SuperHuman = (function( parent ) {
    function SuperHuman ( firstName, lastName, alias, superpowers ) {
        parent.call(this, firstName, lastName );
        this.alias = 'Spider-man' || 'unknown';
        this.superpowers = superpowers || [];
    }

    SuperHuman.prototype = Object.create( parent.prototype );
    SuperHuman.prototype.constructor = SuperHuman;

    SuperHuman.prototype.greet = function () {
        return  ( 'Hi, I am ' + this.alias + '!' );
    }

    SuperHuman.prototype.revealIdentity = function () {
        var id = ( parent.prototype.greet.call(this) + ' a.k.a. ' + this.alias );
        return ( id + ' and I am a ' + SuperHuman.type() + '.' );
    }

    SuperHuman.prototype.useSuperpower = function () {
        var randomNum = getRandom( 0, this.superpowers.length - 1 );
        return this.alias + ' uses the ' + this.superpowers[randomNum] + '!';
    }

    SuperHuman.type = function () { return 'superhuman' }

    return SuperHuman;
})( Human );

var spiderman = new SuperHuman( 'Peter', 'Parker', 'male', 'Spider-man', ['sixth sense', 'super jump', 'web attack']);
console.log( spiderman.revealIdentity() );
