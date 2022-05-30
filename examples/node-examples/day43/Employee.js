class Employee { 
    constructor(id, name, gender, salary) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.salary = salary;
    }
    display() {
        console.log(`Id: ${this.id}, Name: ${this.name}, Salary = ${this.salary}, Gender = ${this.gender}`);
    }
}
module.exports = Employee;