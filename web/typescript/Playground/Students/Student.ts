import {Courses} from "../Enum/Courses";

export class Student {

    age:number = 23;

    constructor(private name:string) {
        this.age = 12;

        let tuple:[number, string] = [66, 'Sixty-Six'];

        console.log(Courses);
        console.log(Courses.English);
        console.log(Courses[Courses.English]);
    }

    greet():string {
        return 'Hello you! My name is ' + this.name + '. I am ' + this.age + ' years old!';
    }
}