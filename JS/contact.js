var form = document.getElementById('form')
var username = document.getElementById('username')
var email = document.getElementById('email')
var number = document.getElementById('number')
var dry = document.getElementById('dry')
var ramen = document.getElementById('ramen')
var agreement = document.getElementById('agreement')

function checkInput(){

    if(username.value == ""){
        username.style.border = "2px solid red";
        username.value == ""
        username.placeholder = "Please Input Username"
        
       
    }

    else if( username.value.length < 5){
        username.style.border = "2px solid red";
        username.value = ""
        username.placeholder = "Username length must be more than 5 character"
        
       
    }

    else if(email.value == ""){
        username.style.border = "2px solid green";
        email.style.border = "2px solid red";
        email.value = ""
        email.placeholder = "Please Input Email"
        
    }

    else if(!email.value.endsWith('@gmail.com')){
        username.style.border = "2px solid green";
        email.style.border = "2px solid red";
        email.value = ""
        email.placeholder = "email must end with @gmail.com"
        
    }

    else if(number.value == ""){
        username.style.border = "2px solid green";
        email.style.border = "2px solid green";
        number.style.border = "2px solid red";
        number.value = ""
        number.placeholder = "Please Input Phone Number"
        
    }

   
    else if(!checkNum(number.value)){
        username.style.border = "2px solid green";
        email.style.border = "2px solid green";
        number.style.border = "2px solid red";
        number.value = ""
        number.placeholder = "Phone Number must only use number"
        
    }

    else if(number.value.length > 13 || number.value.length < 11){
        username.style.border = "2px solid green";
        email.style.border = "2px solid green";
        number.style.border = "2px solid red";
        number.value = ""
        number.placeholder = "Phone Number length must be 11-13"
        
    }
    else if(!dry.checked && !ramen.checked){
        username.style.border = "2px solid green";
        email.style.border = "2px solid green";
        number.style.border = "2px solid green";
        alert('must select atleast one preferences')
    }
    else if(!agreement.checked){
        username.style.border = "2px solid green";
        email.style.border = "2px solid green";
        number.style.border = "2px solid green";
        alert('Agreement must be checked')
    }



    else{
        confirm('Registration Succesfull')
        
    }
}

function checkNum(number){

    var isNum = true
    

    for(let i = 0 ; i < number.length ; i++){
        if(isNaN(number[i])){
            isNum = false
        }else{
            isNum = true
        }

        if(isNum){
            return true;
        }
    }

    return false;
}