function validateEmail(){
    var y=document.getElementById("email").value;
    var len=y.length;
    if(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(y) || len == 0){
        document.getElementById("emailwarning").innerHTML=""
        document.getElementById("submission").style.visibility="visible"
    }else{
        document.getElementById("emailWarning").innerHTML="enter valied email "
        document.getElementById("submission").style.visibility="hidden"
    }
}
function isname(){
    var y = document.getElementById("fName").value;
    var z = 0;
    z = /\d/.test(y);
    if (z == 0 )
    {
        document.getElementById("nameOneWarning").innerHTML= ""
        document.getElementById("submission").style.visibility="visible"
    }
    else{
        document.getElementById("nameOneWarning").innerHTML= "invalid name"
        document.getElementById("submission").style.visibility="hidden"
       
    }
    
}

function issname(){
    var letters = /^[A-Za-z]+$/;
    var y = document.getElementById("fName").value;
    z=y.length
    if(z == 0)
    {
        document.getElementById("nameOneWarning").innerHTML= "name cannot be empty"
    } 
    else if(/^[A-Za-z ]+$/.test(y))
    {
        document.getElementById("nameOneWarning").innerHTML= ""
        document.getElementById("submission").style.visibility="visible"
    }
    else{
        document.getElementById("nameOneWarning").innerHTML= "invalid name"
        document.getElementById("submission").style.visibility="hidden"
    }   
}
