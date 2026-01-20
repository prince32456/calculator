import { formatnumber } from "./fromat.js";
let string ="";
document.querySelectorAll('.key-button').forEach((button) =>{
    button.addEventListener('click',() =>{
    if(button.innerHTML === "="){
       string=  formatnumber(string);
        document.querySelector('.js-input-show').value = string;
    }
    else if(button.innerHTML === "+/-"){
        string = `-${string}`;
          document.querySelector('.js-input-show').value = string;
    }
    else if(button.innerHTML === "C"){
        string = "";
          document.querySelector('.js-input-show').value = string;
    }
    else if(button.innerHTML === "X"){
        string = string.slice(0,-1);
          document.querySelector('.js-input-show').value = string;
    }
    else{
    string += button.innerHTML;
    document.querySelector('.js-input-show').value = string;
    }
    });
});