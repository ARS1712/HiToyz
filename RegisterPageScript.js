let notice = document.getElementById("Validate");

function validate(){
    let name = document.getElementById("Input-Name").value;
    let dob = document.getElementById("Input-DoB").value;
    let email = document.getElementById("Input-Email").value;
    let password = document.getElementById("Input-Password").value;
    let password2 = document.getElementById("Confirm-Password").value;
    let agreement = document.getElementById("Agree");
    let registrationForm = document.getElementById("RegistrationForm")

    if(!checkName(name)){
        return;
    }
    else if(!checkDoB(dob)){
        return;
    }
    else if(!checkEmailLength(email)){
        return;
    }
    else if(!checkEmailAt(email)){
        return;
    }
    else if(!checkPasswordLength(password)){
        return;
    }
    else if(!checkPasswordNumber(password)){
        return;
    }
    else if(!checkPasswordCapital(password)){
        return;
    }
    else if(!checkPasswordSymbol(password)){
        return;
    }
    else if(!checkConfirmationPassword(password2, password)){
        return;
    }
    else if(!checkAgreement(agreement)){
        return;
    }
    else{
        notice.innerHTML = "";
        registrationForm.reset();
        window.alert("Your account has been created! Welcome to HI-Toyz!");
    }
}
function checkName(name){
    if(name.length < 1){
        notice.innerHTML = "Name should contain at least 1 character or more";
        return false;
    }
    return true;
}
function checkDoB(dob){
    if(dob == ""){
        notice.innerHTML = "Date of Birth should be filled"
        return false;
    }
    return true;
}
function checkEmailLength(email){
    if(email.length <  10){
        notice.innerHTML = "Email should be 10-25 characters long";
        return false;
    }
    return true;
}
function checkEmailAt(email){
    let counter = 0;
    for(let i = 0; i < email.length; i++){
        if(email[i] == "@"){
            counter++;
        }
    }
    if(counter == 0){
        notice.innerHTML = "Email should contain 1 '@'";
        return false;
    }
    else if(counter > 1){
        notice.innerHTML = "Email can only contain 1 '@'";
        return false;
    }
    return true;
}
function checkPasswordLength(password){
    if(password.length < 8){
        notice.innerHTML = "Password should be 8 characters or longer";
        return false;
    }
    return true;
}
function checkPasswordCapital(password){
    let counter = 0;
    for(let i = 0; i < password.length; i++){
        if(password[i] >= 'A' && password[i] <= 'Z'){
            counter++;
        }
    }
    if(counter == 0){
        notice.innerHTML = "Password should contain at least 1 capital letter"
        return false;
    }
    return true;
}
function checkPasswordNumber(password){
    let counter = 0;
    for(let i = 0; i < password.length; i++){
        if(password[i] >= '0' && password[i] <= '9'){
            counter++;
        }
    }
    if(counter == 0){
        notice.innerHTML = "Password should contain at least 1 number"
        return false;
    }
    return true;
}
function checkPasswordSymbol(password){
    let counter = 0;
    for(let i = 0; i < password.length; i++){
        if((password[i] >= '!' && password[i] <= '/') || (password[i] >= ':' && password[i] <= '@') || (password[i] >= '[' && password[i] <= '`') || (password[i] >= '{' && password[i] <= '~')){
            counter++;
        }
    }
    if(counter == 0){
        notice.innerHTML = "Password should contain at least 1 symbol (!&quot#$%&'()*+,-./:;<=>?@)"
        return false;
    }
    return true;
}
function checkConfirmationPassword(password2, password){
    let same = 1;
    for(let i = 0; i < password.length; i++){
        if(password2[i] != password[i]){
            same = 0;
            break;
        }
    }
    if(!same){
        notice.innerHTML = "The password confirmation does not match."
        return false;
    }
    return true;
}
function checkAgreement(agreement){
    if(!agreement.checked){
        notice.innerHTML = "Please agree to our terms and conditions!";
        return false;
    }
    return true;
}