
var score =0;

let type;
while(type !== "mots" && type !== "phrases")
{
     type=prompt("donner le type")
}
    switch (type){
        case  "mots":
            for (let i = 0 ; i<listeMots.length; i++)
                {
                    let mot1=prompt("ecrit un mot  : "+ i);
                    if (mot1 === listeMots[i])
                    {score++;}
                }
            break;
            
        
        case "phrases":
            for (let i = 0 ; i<listePhrases.length; i++)
                {
                    let mot1=prompt("ecrit un mot  : "+ i);
                    if (mot1 === listePhrases[i])
                    {score++;}
                }
            break;
            }
 function genereMessageScore(scores)
    {
     let message ="votre score est "+scores;
     return message;
    }
let message=genereMessageScore(score)

console.log(score);
