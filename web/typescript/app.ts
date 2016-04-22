import {Student} from "./Playground/Students/Student";
import {Calculator} from "./Playground/IaasCalculator/Calculator";

export function start() {
    var student = new Student('Charlie Brown');
    var calculator = new Calculator('Elastic Cloud Server', 'VM');

    console.log(student.greet());
    console.log(calculator.calculate());
    console.log(calculator.getInfo());
}