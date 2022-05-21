$recaptcha = $_POST['g-recaptcha-response'];
$res = reCaptcha($recaptcha);
if($res['success']){
  // Send email
}else{
  alert("Please do reCaptcha verification")
}