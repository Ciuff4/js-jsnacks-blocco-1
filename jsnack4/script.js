/*
 JSnack 4
 In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
 chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

const invitati=["Marco", "Luca", "Martina", "Sofia"];

let nome= prompt("Are you invited to the party? Let's find out: Insert your name:");

let message;

for(let i=0; i<invitati.length; i++){

if(invitati.includes(nome)){
    message=`Congratulations ${nome}! you are invited!`;
}else{
    message=`We are sorry ${nome} ! you are not invited!`
}
}

document.getElementById("output").innerHTML=message
console.log(message);