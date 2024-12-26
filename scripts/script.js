


function choisirPhrasesOuMots()
{
     let types=prompt("donner le type mots ou phrases")
     while(types !== "mots" && types !== "phrases")
        {
          types=prompt("donner le type mots ou phrases")
        }
    return types
}

function lancerBoucleDeJeu(liste)
{
    let scores = 0
    for (let i = 0 ; i<liste.length; i++)
        {
            let mot1=prompt("ecrit : "+ i);
            if (mot1 === liste[i])
            {scores++;}
        } 
    return scores;
   
}
function afficherResultat(scores,nb)
    {
     let message ="votre score est "+scores+ " sur "+nb;
     console.log(message)
    }

function lancerJeu (){
    let type=choisirPhrasesOuMots()
    var score =0;
    var nombreq=0;
   
            switch (type){
                case  "mots":
                    score=lancerBoucleDeJeu(listeMots)
                    nombreq=listeMots.length;
                    break;
                    
                
                case "phrases":
                   score= lancerBoucleDeJeu(listePhrases)
                    nombreq=listePhrases.length;
                    break;
                    }

                    afficherResultat(score,nombreq)
}

 


