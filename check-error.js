export function checkError(result){
    try {
            if (result.includes("++")) {
                throw "ERROR";
            }             
            else if(result.includes("+-")){
                throw "ERROR";               
            }
            else if(result.includes("+*")){
                throw "ERROR";               
            }
            else if(result.includes("+/")){
                throw "ERROR";               
            }
            else if(result.includes("+%")){
                throw "ERROR";               
            }
        
            else if (result.includes("-+")) {
                throw "ERROR";
            }             
            else if(result.includes("--")){
                throw "ERROR";               
            }
            else if(result.includes("-*")){
                throw "ERROR";               
            }
            else if(result.includes("-/")){
                throw "ERROR";               
            }
            else if(result.includes("-%")){
                throw "ERROR";               
            }

            else if (result.includes("*+")) {
                throw "ERROR";
            }             
            else if(result.includes("*-")){
                throw "ERROR";               
            }
            else if(result.includes("**")){
                throw "ERROR";               
            }
            else if(result.includes("*/")){
                throw "ERROR";               
            }
            else if(result.includes("*%")){
                throw "ERROR";               
            }

            else if (result.includes("/+")) {
                throw "ERROR";
            }             
            else if(result.includes("/-")){
                throw "ERROR";               
            }
            else if(result.includes("/*")){
                throw "ERROR";               
            }
            else if(result.includes("//")){
                throw "ERROR";               
            }
            else if(result.includes("/%")){
                throw "ERROR";               
            }

            else if (result.includes("%+")) {
                throw "ERROR";
            }             
            else if(result.includes("%-")){
                throw "ERROR";               
            }
            else if(result.includes("%*")){
                throw "ERROR";               
            }
            else if(result.includes("%/")){
                throw "ERROR";               
            }
            else if(result.includes("%%")){
                throw "ERROR";               
            }
            else{
                return result ;
            }
        }
        catch (err) {
            result = err
            return result 
        }
}