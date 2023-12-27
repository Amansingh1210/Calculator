import { changeSign } from "./chageSign.js";
import { checkError } from "./check-error.js";


let result = "";
const buttons = document.querySelectorAll(".button");
function calculate(){
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(event)=>{ 
        let input = event.target.innerHTML ;

        if(event.target.innerHTML == "=") {
            document.querySelector(".js-prev-result").innerHTML = result
             result = checkError(result);
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

// TO CHANGE THEME LIGHT TO DARK

const Darkmode = document.querySelector(".js-dark-mode");
Darkmode.addEventListener('click',()=>{
     const changeMode = document.querySelector(".js-change-mode")
     changeMode.style.background = "#1B6A9C";

     const changeModeToDark = document.querySelector(".js-light-mode")
     changeModeToDark.style.background = "none"

     const changeModeToLight = document.querySelector(".js-dark-mode")
     changeModeToLight.style.background = "#003661"

    const element = document.querySelector(".js-container");
    element.style.background = "linear-gradient(75deg, #373737, #252628, #000309)";

    const invertImage = document.querySelectorAll(".invert-image")
    invertImage.forEach((img) => img.style.filter = "invert(1)")

    const changeButtons = document.querySelectorAll(".back-to-white");
    changeButtons.forEach((button)=>{
        button.style.color = "white";
        button.style.background = "rgb(5 5 5 / 30%)";
    });

    const changeBg = document.querySelector(".js-change-bg");
    changeBg.style.background = "linear-gradient(225deg, #42749B, #2A7DA1, #224E91, #00123F)";

    const equalButton = document.querySelector(".equal-button");
    equalButton.style.color = "white";
    equalButton.style.background = "#050505"

});

// TO CHANGE THEME DARK TO LIGHT

const Lightmode = document.querySelector(".js-light-mode");
Lightmode.addEventListener('click',()=>{
     const changeMode = document.querySelector(".js-change-mode")
     changeMode.style.background = "#A9DCFD";

     const changeModeToDark = document.querySelector(".js-light-mode")
     changeModeToDark.style.background = "#D8EEFF"

     const changeModeToLight = document.querySelector(".js-dark-mode")
     changeModeToLight.style.background = "none"

    const element = document.querySelector(".js-container");
    element.style.background = "linear-gradient(90deg, #FEFEFE, #F9F9F9, #F3F3F3, #E5E5E5)";

    const invertImage = document.querySelectorAll(".invert-image")
    invertImage.forEach((img) => img.style.filter = "invert(0)")

    const changeButtons = document.querySelectorAll(".back-to-white");
    changeButtons.forEach((button)=>{
        button.style.color = "black";
        button.style.background = "#E6F6FF";
    });

    const changeBg = document.querySelector(".js-change-bg");
    changeBg.style.background = "linear-gradient(90deg , #9EE8FF,#5ACEFF, #79AFFF)";

    const equalButton = document.querySelector(".equal-button");
    equalButton.style.color = "balck";
    equalButton.style.background = "#00376A"

});