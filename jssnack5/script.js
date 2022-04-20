/*
 JSnack 5
 Crea un array vuoto.
 Chiedi per 6 volte all’utente di inserire un numero,
 se è dispari inseriscilo nell’array
*/

const array=[];
let number;

const limit=6;

for(let i=0; i < limit; i++){
    number= parseInt(prompt("insert a number:"));

    if(number % 2){
        array.push(number)
        console.log(array);
    }
}

