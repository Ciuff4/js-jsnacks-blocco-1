/*
 JSnack 3
 Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti.
 Esegui questo programma in due versioni, con il for e con il while (facoltativo)
*/


const arrNumbers=[];

for(let i=0; arrNumbers.length<5; i++){
    let number= parseInt(prompt("Insert a number:"));
    arrNumbers.push(number);
    console.log(arrNumbers);
    let sum;
    sum = arrNumbers.reduce((a, b) => a + b, 0);
    console.log(sum);
}

let message =document.getElementById(output).innerHTML+= `${sum}`;