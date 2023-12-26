import { changeSign } from "./chageSign.js";

let result = "";
const buttons = document.querySelectorAll(".button");
function calculate(){
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(event)=>{ 
        let input = event.target.innerHTML ;

        console.log( typeof event.target.innerHTML);
        if(event.target.innerHTML == "=") {
            document.querySelector(".js-prev-result").innerHTML = result
            try {
                if (result.includes = "++") {
                    throw new Error("ERROR");   
                }             
                else if(result.includes = "+-"){
                    throw new Error("ERROR");                
                }
            } catch (error) {
                result = "ERROR"
                console.log(error);
            }
            if(result != "" && result != "ERROR"){
            result = eval(result);
            }
            console.log(result)
            document.querySelector(".js-result").value = result ; 
            document.querySelector(".js-operator-sign").src = "./icons/equal-sign.png"; 
            result = "";
        }
        else if(input == "AC"){
            let prevResult = result ;
            result = "" ; 
            document.querySelector(".js-result").value = result ; 
            document.querySelector(".js-prev-result").innerHTML = prevResult ;
        }
        else if(input == "C"){
             result = result.slice(0,result.length-1) ; 
            document.querySelector(".js-result").value = result ; 
            document.querySelector(".js-operator-sign").src = "./icons/equal-sign.png"; 
        }
        else{
        result = result +  event.target.innerHTML ;
        document.querySelector(".js-result").value = result ; 
        }

        // FUNCTION TO SHOW SIGN OF OPERATOR 
        if(input == "*" || input == "+" || input == "-" || input == "/" || input == "&" ){
            document.querySelector(".js-operator-sign").src = changeSign(input); 
        }
        else{
            document.querySelector(".js-operator-sign").src = "./icons/equal-sign.png";   
        }
    })
});
}
calculate();