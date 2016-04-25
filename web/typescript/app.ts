import Student from "./Playground/Students/Student";
import Calculator from "./Playground/IaasCalculator/Calculator";
import Baarfoo = Foobar.Baarfoo;

var student = new Student('Charlie Brown');
var calculator = new Calculator('Elastic Cloud Server', 'VM');

let itGo = 'muaha';
console.log(itGo);

let comp = Intl.Collator(["de"]).compare("ä", "z");
console.log(comp);

console.log(student.greet());
console.log(calculator.calculate());
console.log(calculator.getInfo());


var i10nEN = new Intl.NumberFormat("en-US")
var i10nDE = new Intl.NumberFormat("de-DE")
let formatEn = i10nEN.format(1234567.89);
let formatDe = i10nDE.format(1234567.89);

console.log(formatEn);
console.log(formatDe);

console.log(Calculator.getPriceSign());
console.log(Calculator.staticArg);
console.log(calculator.nonStaticArg);

var foobar = new Foobar.Baarfoo();
foobar.doSmth();

var baarfoo = new Baarfoo();
baarfoo.doSmth();