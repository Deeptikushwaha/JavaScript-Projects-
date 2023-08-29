const input = document.getElementById('inputBox');
const buttons = document.querySelectorAll("button");
const display_output = document.querySelector('.display .output');
let str="";
let arr=Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click',(e) => {
        if(e.target.innerHTML == "="){
            try{
            let result = eval(str);
            display_output.value = result;
            }
            catch(err){
                alert("Enter valid input");
            }
        }
        else if(e.target.innerHTML=="DEL"){
           str = str.toString().slice(0, -1);
            input.value = str;
        }
        else if(e.target.innerHTML=="C"){
            str = "";
            input.value = "";
            display_output.value="";
        }
       
        else if(e.target.innerHTML=="()"){
            if(
                str.indexOf("(")==-1 ||
                str.indexOf("(")!= -1 &&
                str.indexOf(")")!= -1 &&
                str.lastIndexOf("(") < str.lastIndexOf(")")
            ){
                str+="(";
                input.value = str;
                
            } else if(
                str.indexOf("(")!=-1 &&
                str.indexOf(")")== -1 ||
                str.indexOf("(")!= -1 &&
                str.lastIndexOf(")") !=-1&&
                str.lastIndexOf("(") > str.lastIndexOf(")")
            ){
                str+=")";
                input.value = str;
            } 
            else {
                 str+="";
                input.value=str; 
            }
        }
        else{
            console.log(e.target);
            if(preventrep(e.target.innerHTML)){
                str+=e.target.innerHTML;
            input.value = str;
        }
        }
    })

})

function preventrep(value) {
    let last_input = str.toString().slice(-1);
	let operators = ["+", "-", "*", "/","%"];

	if (value == "." && last_input == ".") {
		return false;
	}

	if (operators.includes(value)) {
		if (operators.includes(last_input)) {
			return false;
		} else {
			return true;
		}
	}

	return true;
}