function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function() {
  return this.dob.getFullYear();
};

Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

const Person1 = new Person("John", "Doe", "4-3-1980");
const Person2 = new Person("Mary", "Smith", "3-6-1970");

console.log(Person1);
console.log(Person2);
