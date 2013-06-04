(function() {

// Initialize the calcualtor once page is loaded
window.onload = function(){
init();
}
var result;
var lastValue;
//Attaches the events to the buttons of the calculator
function init(){
  // Clear the input
  result = document.getElementById("result-field");
  result.value = "";

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
  var target = event.target || event.srcElement;
  var value = target.value;
  if(!isNaN(value)){
    result.value += value;
  }else if(value == "C" || value == "CE"){
    result.value = "";
  }else{
    evaluateExpression(value);
  }
}
function evaluateExpression(exp){
  switch(exp){
    case "+":
      result = lastValue + int(result); 
  }
}

})(); // END SCOPING FUNCTION
