
function togglepassword(){
    let x = document.getElementById("mypassword")

    if(x.type==="password"){
        x.type = "text";
    }
    else{
        x.type = "password"
    }
    
}