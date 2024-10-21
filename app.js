const person = {
    firstName: "Shandika"
};

person.lastName = "WebDev";
person.location = ['Planet', 'Earth']
delete person.firstName;

// Accessing Items from our object
console.log(person);

//-------------------------------------//

const object = {
    type: "Fait",
    model: "small",
    color: "white"
}

console.log(object.type);
console.log((object.type = "Toyota"));
object.wheels = 4

console.log(object);

// A function is a place of code that performs a specific task
// Function makes the code reusable. You can declare it once and use it multiple times.
// Function makes the program easier as each small task is divided into a function
// function increases readability
// DRY = Don't repeat Yourself
// function name(parameterifAny) {...}

// Function Declaration
function greet() {
    console.log('Hello from a function');
}

// call, run, execute
greet();
greet();
greet();

function sayHello(name) {
    console.log(`Hello ${name}`);
}

sayHello("Shandika");
sayHello("Alex");
sayHello("John");


// return -> function
function add(x, y) {
    return x + y;
}

const res1 = add(10, 20);
const res2 = add(100, 200);
const res3 = add(1000, 2000);

console.log(res1);
console.log(res2);
console.log(res3);