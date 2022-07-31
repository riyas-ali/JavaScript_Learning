let screen = document.getElementById('answer');
buttons = document.querySelectorAll('button');
let screenValue = '';

for(item of buttons) {
    item.addEventListener('click', (e) => {
        // console.log(e.target.innerText, "has been pressed"); 
        buttonText = e.target.innerText;
        // console.log(buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText == 'C') {
            screenValue = '';
            screen.value = '';
        } else if (buttonText == '=') {
            screen.value = eval(screenValue);
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

document.addEventListener("keydown", (e) => {
    // console.log(e.which);
    if (e.shiftKey == 57) {
        e.key = '(';
    } else if (e.shiftKey == 48) {
        e.key = ')';
    } else if (e.shiftKey == 53) {
        shiftKey = '%';
    } else if (e.keyCode == 46) {
        screenValue = '';
        screen.value = screenValue;
    } else if(e.keyCode==88){
        screenValue += '*';
        screen.value = screenValue;
    } else if(e.key<=9 || e.key=='+' || e.key=='-' || e.key=='*' || e.key=='.' || e.key=='/' || e.key=='%' || e.key=='(' || e.key==')'){
        screenValue += e.key;
        screen.value = screenValue;
    } else if(e.keyCode == 13 || e.keyCode == 187) {
        screen.value = eval(screenValue);
    } else if (e.keyCode == 8) {
        screenValue = screenValue.substring(0, screenValue.length - 1);
        screen.value = screenValue;
    } else if (e.keyCode == 27) {
        screenValue = '';
        screen.value = screenValue;
    } else if(event.keyCode == 82){
        location.reload();
    } else if(event.keyCode == 67){
        screenValue = "";
        screen.value = screenValue;
    }
})

window.onerror = function(){
    alert("PLEASE INPUT VALID EXPRESSION");
    screenValue = "";
    screen.value = screenValue;
}