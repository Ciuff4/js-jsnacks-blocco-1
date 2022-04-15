/*
 JSnack 3
 Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti.
 Esegui questo programma in due versioni, con il for e con il while (facoltativo)
*/

// let secondNumber= parsint(prompt("Insert a number:"));
// let thirdNumber= parsint(prompt("Insert a number:"));
// let fourthNumber= parsint(prompt("Insert a number:"));
// let fifthNumber= parsint(prompt("Insert a number:"));


const arrNumbers=[];

for(let i=0; arrNumbers.length<5; i++){
    let number= parseInt(prompt("Insert a number:"));
    arrNumbers.push(number);
    console.log(arrNumbers);
    let sum;
    sum = arrNumbers.reduce((a, b) => a + b, 0);
    console.log(sum);
}


// firstNumber

// let i=false
// while ((arrNumbers.length<5)){
//     firstNumber= parsint(prompt("Insert a number:"));
//     alert("")
//     i=true
// }