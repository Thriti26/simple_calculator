buttons=document.querySelectorAll('button');
screenElement=document.getElementById('screen');

buttons.forEach(button => {
    button.addEventListener('click',()=>{
        const b=button.textContent;
        if(b==='c'){
            clearscreen();
        }
        else if(b==='=')
            calculate();
        else
         appendValue(b); 
});
});


function clearscreen(){
    screenElement.value="";
}

function calculate(){
    screenElement.value=eval(screenElement.value);
}

function appendValue(b){
    screenElement.value += b;
}