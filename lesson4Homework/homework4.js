//დავალება 1
// შექმენით პროგრამა, რომელიც ნებისმიერი 10 ელემენტისგან შემდგარი მასივიდან გამოიტანს
// ყოველ მესამე ელემენტს ეკრანზე. შეასრულეთ ეს დავალება ციკლების მეშვეობით.

// let list = ["levani", "natia", "gvantsa", "ana", "enzo", "nola", "bacho", "qeti", "taso", "mate"];

// for (let i = 0; i < list.length; i++) {
//     if (i % 3 === 2) {
//         console.log(list[i]);
//     }
// }

// for (let num of list){
//     if(list.indexOf(num)===2 || list.indexOf(num)===5 || list.lastIndexOf(num)===8){
//         console.log(num)
//     }
// }

// დავალება 2
//შექმენით, პროგრამა, რომელიც 10-დან 1-მდე რიცხვებს გამოიტანს.
//მაგ. 10,9,8,7,6,5,4,3,2,1, შეასრულეთ ეს დავალება ციკლების მეშვეობით.

// for (let i=10; i>0; i--){
//     console.log(i)
// }

// დავალება 3
//მოცემული მასივიდან let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob']
//ამოიღეთ 'Bob' სახელი ყველგან სადაც ის შეგხვდებათ და დაბრუნეთ მასივი 'Bob'-სახელის გარეშე. შედეგი ესეთი უნდა იყოს: ['John', 'Nick', 'Mary', 'Sue', 'Ann'] შეასრულეთ ეს დავალება ციკლების მეშვეობით, ასევე კარგი იქნება თუ იგივე დავალებას ციკლური ოპერაციების გამოყენების გარეშეც შეასრულებთ

// let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob']
// let newNames=[];
// for(let i=0; i<names.length; i++){

//     if(names[i] !==="Bob"){
//         newNames.push(names[i])
//     }

// }

// console.log(newNames)

//დავალება 4

//ციკლური ოპერაციების მეშვეობით შექმენით ფუნქცია,
//რომელიც დაიანგარიშებს კონკრეტული რიცხვის ხარისხს,
//მაგ. შექმენით ფუნქცია სახელით: numberPower(number, power) და პარამეტრებით: number, power, მაგ. თუ რიცხვია 5 და ხარისხი 3, მაშინ თქვენმა ფუნქციამ უნდა დააბრუნოს 5*5*5 ანუ 125.

// function multiply(number, power=3 ){
//     let result=1;
//     for(let i=0; i<power; i++){
//         result *=number
//     }
//     return result
// }

// console.log(multiply(5))

// დავალება 5
//შექმენით ფუნქცია, რომელიც 1-დან 100-მდე რიცხვებში დაიანგარიშებს თუ რომელი რიცხვები იყოფა 3-ზე უნაშთოდ,
//და იმ რიცხვების ადგილას რომლებიც იყოფა 3-ზე უნაშთოდ გამოიტანს,
//Fizz, ასევე იგივე ფუნქციის მიხედვით გამოიანგარიშეთ თუ რიცხვი 5-ზე იყოფა უნაშთოდ და გამოიტანეთ Buzz,
// ხოლო თუ რიცხვი იყოფა 3-ზეც და 5-ზეც უნაშთოდ გამოიტანეთ FizzBuzz

// for(let i=0; i<100; i++){
//     if( i % 3===0){
//         console.log (`${i} fizz`)
//     }
//     if(i % 5===0){
//         console.log(`${i} buzz`)
//     }
//     if( i % 3===0 && i % 5===0){
//         console.log(`${i} fizzBuzz`)
//     }
// }

// დავალება 6
//შექმენით ფუნქცია,მაგ. სახელით: factorialCalculator(number),
//რომელიც დაიანგარიშებს და ეკრანზე გამოიტანს მისთვის პარამეტრის სახით მიწოდებული რიცხვის ფაქტორიალს,
//მაგ. 5! => 2*3*4*5 = 120,

// function fuctorial(n){
//     if(n<0){
//         return "n is negative number"
//     }else if( n===0){
//         return 1
//     }else{
//     let result=1
//     for(let i=1; i<=n; i++){
//         result *=i
//     }
//     return result
// }
// }

// console.log(fuctorial(5))

//დავალება 7
//შექმენით ფუნქცია, რომელიც სტრიქონის პირველ ასობგერის კაპიტალიზირებას მოახდენს მაგ. javascript => უნდა გახდეს:
//Javascript, ანუ J დიდი ასობგერით უნდა ეწეროს.

// let nam="levani"

// let newNam=""

// for(let i=0; i<nam.length; i++){
//     if(i===0){
//         newNam+=nam[i].toUpperCase()
//     }else{
//         newNam+=nam[i]
//     }
// }

// console.log(newNam)

//დავალება 8
//შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა მასზე მიწოდებული სტრიქონი ცარიელი.
//მაგ. blankStringChecker(testString) => რომელიც დააბრუნებს this string is blank-ს თუ ცარიელია/ this string is not blank-ს თუ ცარიელი არაა.

// function checker(n){
//     if (n.length===0){
//         return "this string is blank"
//     }else{
//         return "this string is not blank"
//     }
// }

// console.log(checker("levani"))
//p.s. ჩემი კოდი მთლად სრულყოფილი არ მგონია, რადგან შეიძლება n-ს არ ქონდეს "ქარაქთერები",
// იყოს ცარიელი, მაგრამ ჰქონდეს სპეისი "  ", და ეს კოდი უჩვენებს რომ ცარიელი არაა.
// მომდევნო დღეებში ვეცდები ამ კოდის სრულყოფას, რომ თუ სპეისი აქვს მხოლოდ N-ს,
// შესაბამის წინადადებას ან რამე ნარატივს აბრუნებდეს.

//დავალება 9
//შექმენით ფუნქცია, რომელიც მასზე მიწოდებულ სტრიქონს გადააქცევს მასივად.
//მაგ. stringToArray(testString) => თუ მივაწვდით სტრიქონს “Hello, World” => გამოიტანს მის ვერსიას მასივში. [“Hello”, “World”]

// function convert(n){
// let word=n.split(" ")
// return word

// }

// console.log(convert("hello, word"))

//დავალება 10
//შექმენით ერთგვარი ემაილის დამცველი ფუნქცია,
//რომლის ფუნქციონალი მდგომარეობს შემდგომში: მომხმარებელი გაწვდის ემაილს წერტილით გამოყოფილ თავისი სახელით და გვარით, beqa.beqauri@gmail.com,
//თქვენი ფუნქცია კი გამოიტანს მის დაცულ ვერსიას ამ ფორმით:  beqa……..@gmail.com.
//წერტილების ოდენობა უნდა ემთხვეოდეს გვარის სიგრძეს.

let email = "beqa.beqauri@gmail.com";

function secure(email) {
  let finalEmail = "";
  let dzagluka = "@";
  let newEmail = email.split(".");
  let latestEmail = newEmail[1].split("@");
  for (let i = 0; i < latestEmail[0].length; i++) {
    finalEmail += ".";
  }
}
