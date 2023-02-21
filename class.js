"use strict";
class App {
    constructor(name) {
        this.name = name;
    }
    getname() {
        console.log(`Hello! ${this.name}`);
    }
}
let app1 = new App("vaibhav");
app1.getname();
