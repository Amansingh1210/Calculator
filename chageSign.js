export function changeSign(sign){
    let imageSign = ""
    if(sign == "+"){
        imageSign = "plus"
    }
    else if(sign == "-"){
        imageSign = "minus"
    }
    else if(sign == "/"){
        imageSign = "divide"
    }
    else if(sign == "*"){
        imageSign = "multiply"
    }
    return `./icons/${imageSign}-sign.png`
}

