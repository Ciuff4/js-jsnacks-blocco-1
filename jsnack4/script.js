/*
 JSnack 4
 In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
 chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

const invitati=["Marco", "Luca", "Martina", "Sofia"];

let nome= prompt("Are you invited to the party? Let's find out: Insert your name:");

let message= document.getElementById("output");

let flag=0;

for(let i=0; i<invitati.length; i++){


if(nome===invitati[i]){
    flag=0;
    message= document.innerHTML+=`
        <h1>
            Congratulations ${nome}! you are invited!
        </h1>`;
}else((!nome===invitati[i]));{
    flag=1;
    message= document.innerHTML+=`
        <h1>
            We are sorry ${nome} ! you are not invited!
        </h1>`
}
}
console.log(message);