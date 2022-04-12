/*
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/
let numbOne;
let numbTwo;
const limit=10;

let firstCorrectNumber=false

while (!(firstCorrectNumber)) {
    numbOne= parseInt(prompt("First player: Insert a number from 1 to 10"));
    if (numbOne>limit) {
        alert("please insert a number from 1 to 10");
    }else{
        firstCorrectNumber=true;
    }
    console.log(numbOne);
}

let secondCorrectNumber=false

while (!(secondCorrectNumber)) {
    numbTwo= parseInt(prompt("Second player: Insert a number from 1 to 10"));
    if (numbTwo>limit) {
        alert("please insert a number from 1 to 10");
    }else{
        secondCorrectNumber=true;
    }
    console.log(numbTwo);
}

if(numbTwo===numbOne){
    document.getElementById("winner").innerHTML="it's a Tie!!";
    console.log("it's a Tie!!");
}else if(numbOne<numbTwo){
    document.getElementById("winner").innerHTML="second wins";
    console.log("Second Player wins");
}else{
    document.getElementById("winner").innerHTML="first wins";
    console.log("First Player wins");
}

