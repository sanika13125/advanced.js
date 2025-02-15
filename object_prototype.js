//Creating an object add adding to it
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello ,I am ${this.name} and my age is ${this.age}`);
    }
} 
const person1 = new person("sanika",20);
const person2 = new person("saki",21);
person1.greet();
person2.greet();


