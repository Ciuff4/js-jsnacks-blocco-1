/*
 JSnack 2
 L’utente inserisce due parole in successione, con due prompt.
 Il software stampa prima la parola più corta, poi la parola più lunga.
*/

let firstWord= prompt("Insert the first word:");
let secondWord= prompt("Insert the second word:");
const longest= document.getElementById("longest-word");
const shortest=document.getElementById("shortest-word") 

if (firstWord.length===secondWord.length) {
    console.log("tie");
    longest.innerHTML= `
    <p> the word length is the same </p>
        `;
        shortest.innerHTML= `
    <p> the word length is the same </p>
        `;
}else if(firstWord.length>secondWord.length){
    console.log("first word");
    longest.innerHTML= `
    <p>The longest word is: </p> ${firstWord}
        `;
        shortest.innerHTML= `
    <p>The shortest word is: </p> ${secondWord}
        `;
}else{
    longest.innerHTML= `
    <p>The longest word is: </p> ${secondWord}
        `;
    shortest.innerHTML= `
    <p>The shortest word is: </p> ${firstWord}
        `;
    console.log("second word");
}

document.getElementById("first-word").innerHTML=`
<p>Your first word is: </p> ${firstWord}
    `;

document.getElementById("second-word").innerHTML=`
<p>Your second word is: </p> ${secondWord}
    `;