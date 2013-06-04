// Initialize the calcualtor once page is loaded
window.onload = function(){
  init();
}
//Attaches the events to the buttons of the calculator
function init(){
  var inputs, index;
  inputs = document.getElementsByTagName('input');
  for(index = 0; index < inputs.length; index++){
    if(inputs[index].type == "submit"){
     if(inputs[index].addEventListener){
       inputs[index].addEventListener("click",processButton,false);
      }else if(inputs[index].attachEvent){
       inputs[index].attachEvent("click",processButton,false);
      }
   }
  }
}
function processButton(event){
  target = event.target || event.srcElement;
  value = target.value;
  if(!isNaN(value)){
    var result = document.getElementById("result-field");
    alert(result);
  }
}