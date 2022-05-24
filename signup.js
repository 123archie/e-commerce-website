let button=document.getElementById('submit')
button.addEventListener('click', function(){
let email=document.getElementById('email');
let validation = email.value;
let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
if(regex.test(validation)){
alert("valid email address");
}
else{
alert("Invalid email address");
}

let password=document.getElementById('password');
let validation_password=password.value;
let regex_pass=/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;
if(regex_pass.test(validation_password)){
    alert("Valid password");
}else{
    alert("Invalid password");
}});

let checkBOX=document.getElementById('checkbox')
checkBOX.addEventListener('click', function(){
let x=document.getElementById("password")
if(x.type==='password'){
x.type="text"
}
else{
x.type='password'
}
});

