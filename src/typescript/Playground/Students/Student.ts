export class Student {

    age:number = 23;

    constructor(private name:string) {
        this.age = 12;
    }

    greet():string {
        return 'Hello you! My name is ' + this.name + '. I am ' + this.age + ' years old!';
    }
}