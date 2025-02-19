const display = document.getElementsByClassName("display")[0]; /*There is a 0 because since its a class it has to know which display I want to access */

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){

    try {
        display.value = eval(display.value);
    } catch(error) {
        display.value = "Error";
    }
}

