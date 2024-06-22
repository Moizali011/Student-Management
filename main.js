class student {
    static counter = 10000;
    id;
    name;
    courses;
    balance;
    constructor(name) {
        this.id = student.counter++;
        this.name = name;
        this.courses = [];
        this.balance = 200;
    }
    enroll_course(course) {
        this.courses.push(course);
    }
    view_balance() {
        console.log(`Balance for ${this.name}$${this.balance}`);
    }
    pay_fees(amount) {
        this.balance -= amount;
        console.log(`$${amount}Fees paid successfully for ${this.name}`);
        console.log(`Reamaining Balance of ${this.name}is ${this.balance}`);
    }
    all_detail() {
        console.log(`ID: ${this.id}`);
        console.log(`Name:${this.name}`);
        console.log(`Course ${this.courses}`);
        console.log(`Balance ${this.balance}`);
    }
}
export {};
