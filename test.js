const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

class Person {
  firstName = "Moshe";
  lastName = "Habeinu";
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    return `{this.firstName} ${this.lastName}.`;
  }
}

const user1 = new Person("Iehoshua", "HaTsadik");

console.log(user1.fullName());

console.log(person.fullName());
