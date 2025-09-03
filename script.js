let display = document.getElementById('display');
let button =document.querySelectorAll('buttons');

function appendValue(val){
    if(display.textContent === '0'){
        display.textContent = val;
    }
    else{
        display.textContent += val;
    }
}


function appendValue(val){
    if(display.textContent === '0'){
        display.textContent = val;
    }
    else{
        display.textContent += val;
    }
}
function clearDisplay(){
    display.textContent ='0';
} 

function deleteLast(){
    if(display.textContent.length > 1){
        display.textContent = display.textContent.slice(0,-1);
    }
    else{
        display.textContent = 0;
    }
}

function calculate(){
    try{
        const result = eval(display.textContent); 
        display.textContent = result;
    }
    catch(error)
    {
        display.textContent = "ERROR";
    }
}