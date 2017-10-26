
function validateForm() {
  var submit = document.forms.formulario1.input1.value;
  console.log(submit);
  return false;
}

var changeInputColor = function( field , bol){
  field.style.outlineStyle = "solid";
  if(bol){
      field.style.outlineColor = "green";
  } else {
    field.style.outlineColor = "red";
  }
};


function validateField(field, fn) {
  //return the validated Field 
  var r = fn(field.value);
  changeInputColor(field, r);
  return r;
}

function checkFullName() {
    validateField(document.getElementById('input1'), function(value){
   		return value && value.includes(" ");
    });
}
function checkValidEmail(){

	validateField(document.getElementById('correo'),function(value){
		
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		
		return re.test(value);
	});
}
function checkVaildNumber (){
	var currentField = document.getElementById('telefono'); 
	var value =  currentField.value;

	var bol = value.length == 9;

	changeInputColor(currentField,bol);	
}