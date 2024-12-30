
//lancerJeu()

let bouton =document.querySelector(".b")
bouton.addEventListener("click" , ()=>{
    let body = document.querySelector("body")
    if (!body.style.backgroundColor) {
        body.style.backgroundColor = "white";
    }
    switch (body.style.backgroundColor){
        case "white":
            body.style.backgroundColor="red";
            break;
        case "black":
            body.style.backgroundColor="white";
            break; 
        case "white":
            body.style.backgroundColor="red";
            break;
        case "red":
            body.style.backgroundColor="black";
            break;
        default:
            
           
break;




    }
       

})





