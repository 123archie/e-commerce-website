var name=document.getElementById("name")
var button=document.getElementById("submit")
var error_name=document.getElementById('error_name')
button.addEventListener('click', function(){
    if(isNaN(name.value))
    error_name.textContent="Please enter your name"
    else
    error_name.textContent=''
})