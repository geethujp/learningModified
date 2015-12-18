function validateLoginForm() {
  
     var a = document.forms["myLoginForm"]["username"].value;
      var b = document.forms["myLoginForm"]["password"].value;
     
    if (a == null || a == "") {
        alert("User name must be filled out");
        return false;
    }
    
    if (b == null || b == "") {
        alert("Password must be filled out");
        return false;
    }
   if(a==geethu&&b==123)
   {
    alert("Access Granted");
    return true;
   }
  
}
function validateName(x){
  var re = /[A-Za-z -']$/;
  if(re.test(document.getElementById(x).value)){
  document.getElementById(x).style.background ='#ccffcc';
  return true;
}else{
  document.getElementById(x).style.background ='#e35152';
  return false;
}
} 