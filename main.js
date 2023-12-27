import { changeSign } from "./chageSign.js";

let result = "";
const buttons = document.querySelectorAll(".button");
function calculate(){
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(event)=>{ 
        let input = event.target.innerHTML ;

        if(event.target.innerHTML == "=") {
            document.querySelector(".js-prev-result").innerHTML = result
            try {
                if (result.includes("++")) {
                    throw "ERROR";
                }             
                else if(result.includes("+-")){
                    throw "ERROR";               
                }
            } catch (err) {
                result = err
            }
            // console.log(result);
            if(result != "" && result != "ERROR"){
            result = eval(result);
            }
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


const mode = document.querySelector(".js-dark-mode");
mode.addEventListener('click',()=>{
    const element = document.querySelector(".js-container");
    element.style.background = "linear-gradient(75deg, rgb(119 119 119), rgb(5, 5, 5))";

    const invertImage = document.querySelectorAll(".invert-image")
    invertImage.forEach((img) => img.style.filter = "invert(1)")

    const changeButtons = document.querySelectorAll(".back-to-white");
    changeButtons.forEach((button)=>{
        button.style.color = "white";
        button.style.background = "rgb(5 5 5 / 30%)";
    });

    const changeBg = document.querySelector(".js-change-bg");
    changeBg.style.background = "linear-gradient(75deg, #42749B, #2A44A1, #224E91, #00123F)";

    const equalButton = document.querySelector(".equal-button");
    equalButton.style.color = "white";
    equalButton.style.background = "#050505"

});