/*
 JSnack 2
 L’utente inserisce due parole in successione, con due prompt.
 Il software stampa prima la parola più corta, poi la parola più lunga.
*/

let firstWord= prompt("Insert the first word:");
let secondWord= prompt("Insert the second word:");

if (firstWord.length===secondWord.length) {
    console.log("tie");
}else if(firstWord.length>secondWord.length){
    console.log("first word");
}else{
    console.log("second word");
}

document.getElementById("first-word").innerHTML=`
<p>Your first word is: </p> ${firstWord}
    `;

document.getElementById("second-word").innerHTML=`
<p>Your second word is: </p> ${secondWord}
    `;