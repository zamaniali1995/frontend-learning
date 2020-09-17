var fname = document.forms['regform']['firstname'];
var lname = document.forms['regform']['lastname'];
var fname_error = document.getElementById('firstname_error');
var lname_error = document.getElementById('lastname_error');
var cardid = document.forms['regform']['cardid'];
var cardid_error = document.getElementById('cardid_error');
var cardidnum_error = document.getElementById('cardidnum_error');
var number = /[0-9]+$/;


lname.addEventListener('input', lname_verify);
fname.addEventListener('input', fname_verify);

// Each function should consist of at most 3 or 4 lines. So, extract small functions from the validation function to have a clean code.
function validated(){
    if (fname.value.length < 3){
     fname.style.border = "1px solid red";
     fname_error.style.display = "block";
     fname.focus();
     return false;
      }

    if (lname.value.length < 4){
     lname.style.border = "1px solid blue";
     lname_error.style.display = "block";
     lname.focus();
     return false;
         }

    if (cardid.value.length < 10){
     cardid.style.border = "1px solid blue";
     cardid_error.style.display = "block";
     cardid.focus();
     return false;
         }

    
         }          

    
function fname_verify(){
    if (fname.value.length > 2){
        fname.style.border = "1px solid silver";
        fname_error.style.display = "none";
        return true;
    }
}

function lname_verify(){
    if (lname.value.length > 3){
        lname.style.border = "1px solid silver";
        lname_error.style.display = "none";
        return true;
    }
}
function cardid_verify(){
if (cardid.value.match(number)){
    cardidnum_error.style.display = "none"
    return true;
   }
else {
     cardid.style.border = "1px solid red"
     cardidnum_error.style.display = "block"  
     return false;   
   }
}   
