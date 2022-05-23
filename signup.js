function validateform(){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
    {
        return(true)
    }
    else{
        alert("Invalid Email")
        return false
    }
 }