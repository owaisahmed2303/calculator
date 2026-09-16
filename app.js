var display=document.getElementById("display");
var display2=document.getElementById('display2');
function addToDisplay(input){
 display.value += input;
}
function Clear(){
  if(display !=''){
          display.value='';
  }
}
function calculate(){
  display2.value=display.value;
   display.value=eval(display.value);
   
}
function deleteValue(){
   display.value = display.value.slice(0, -1);
}

