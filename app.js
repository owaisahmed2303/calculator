var display=document.getElementById("display");

display.value=0;

var display2=document.getElementById('display2');

function addToDisplay(input){
  if(display.value=='0'){
    display.value=input;
  }
  else{
    display.value += input;
  
}

}
var count=0;
function Clear(){
  
 if(count==0){
  display.value='0';
  count=1;
 }
else{
  display2.value='0';
  count=0;
}
        
}
function calculate(){
  
  
  display2.value=display.value;
   display.value=eval(display.value);
  
   
}
function deleteValue(){
  display.value = display.value.slice(0, -1);
  if(display.value==''){
     display.value=0;
  }
}

