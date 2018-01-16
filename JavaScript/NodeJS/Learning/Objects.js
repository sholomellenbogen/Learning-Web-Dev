var sholom = {
    favFood: "bacon",
    favMovie: "Billy"
};

//Person is just a reference to sholom's data
var Person = sholom;
Person.favFood = "Salad";
console.log(sholom.favFood);


//== vs ===
console.log(10=="10");
console.log(10==="10");


//this
var sholom = {
    printFirstName: function(){
        console.log("My name is Sholom");
        console.log(this === sholom);
    }
};
sholom.printFirstName();

//the default calling context is global
function doSomethingWorthless(){
    console.log("worthless called");
    console.log(this === global);
}
doSomethingWorthless();


//prototypes
function User(){
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer){
        targetPlayer.life += 1;
        this.life -=1;
        console.log(this.name + " gave 1 life to " + targetPlayer.name);
    }
}

var Bucky = new User();
var Sholom = new User();
Bucky.name = "Bucky";
Sholom.name = "Sholom";

Sholom.giveLife(Bucky);
console.log("Sholom: " + Sholom.life);
console.log("Bucky: " + Bucky.life);

//can add functions to all objects
User.prototype.uppercut = function uppercut(targetPlayer){
    targetPlayer.life -= 3;
    console.log(this.name + " uppercut " + targetPlayer.name);
}

Bucky.uppercut(Sholom);
console.log("Sholom: " + Sholom.life);
console.log("Bucky: " + Bucky.life);

//can add properties to all objects
User.prototype.magic = 60;
console.log(Sholom.magic);
console.log(Bucky.magic);