let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (j) =>{
        if(j.target.innerText == '='){
            string = eval(string);
            input.value = string;
        }

        else if(j.target.innerText == 'AC'){
            string = "";
            input.value = string;
        }
        else if(j.target.innerText == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else if(j.target.id=='plusMinus'){
            string=String(-eval(string))
            inputBox.value=string
        }
        else if(j.target.id=='x2'){
            string=String(eval(string*string))
            inputBox.value=string
        }
        else if(j.target.id=='x3'){
            string=String(eval(string*string))
            inputBox.value=string
        }
        else{
            string += j.target.innerText;
            input.value= string;
        }
        
    })
})