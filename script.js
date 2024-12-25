const listeMots=["Cachalot","Pétunia","Serviette"];
var score =0;

let mot1=prompt("ecrit un mot 1 :")
if(mot1 === listeMots[0])
{
    score++;
}

let mot2=prompt("ecrit un mot 2 :")
if(mot2 === listeMots[1])
{
    score++;
}

let mot3=prompt("ecrit un mot 3 :")
if(mot3 === listeMots[2])
{
    score++;
}
console.log(score);


