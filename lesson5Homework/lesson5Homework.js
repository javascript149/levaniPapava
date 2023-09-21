// დავალება 1

// შექმენით ფუნქცია, რომელიც იპოვის ყველზე გრძელ სიტყვას მოცემულ სტრიქონში.


// let sentence="birds fly around  fethfethfeth world";

// let words=sentence.split(" ")


// function largestWord(words){  
//     let largestWord=words[0]
//     for(let word of words){
//         if( word.length>largestWord.length){
//             largestWord=word
//         }
        
        
//     }
//     return largestWord
// }

// console.log(largestWord(words))



// დავალება 2
// შექმენით ობიექტი სახელით "calculator" შესაბამისი ატრიბუტებით სახელად. num1, num2, 
//ანუ რაღაც ესეთი {num1: 10, num2: 5}, დაამატეთ ამ ობიექტში ახალი ატრიბუტები სახელით add, substract, multiply, divide,
// მათი მთავარი მიზანი უნდა იქნეს, რომ გამოიანგარიშოს ამ ორი რიცხვის ჯამი, სხვაობა, ნამრავლი, განაყოფი. 
//ეს ყველაფერი მოახდინეთ this საკვანძო სიტყვის მეშვეობით.


// let calculator={
//     num1:10,
//     num2:5,
//     add:function(){
//         return this.num1 +this.num2
//     },
//     substract:function(){
//         return this.num1-this.num2
//     },
//     divide:function(){
//         return this.num1 / this.num2
//     },
//     multiply:function(){
//         return this.num1 * this.num2
//     },

// }

// console.log(calculator.add())
// console.log(calculator.divide())
// console.log(calculator.multiply())
// console.log(calculator.substract())



//დავალება 3
//3. შექმენით ფუნქცია, რომელიც შეიძლება გამოყენებულ იქნეს როგორც ფუნქციის ჰოისტინგის მაგალითად. 
//შექმენით ეს ფუნქცია მისი გამოძახების შემდეგ 
//და აღწერეთ კომენტარებით თუ როგორ მუშაობს იგი ჰოისტინგის მეშვეობით.



// პირობა ვერ გავიგე