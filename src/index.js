import React from "react";
import { render } from "react-dom";

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  calllMyProfile() {
    console.log(`Iam ${this.name} and ${this.age} years`);
  }
}

const Nakanishi = new Human("Nakanish", 16);
console.log(Nakanishi);

const Tanaka = new Human("Tanaka", 20);
Tanaka.calllMyProfile();
console.log(Tanaka);
