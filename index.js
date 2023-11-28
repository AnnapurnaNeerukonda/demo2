let na = document.getElementById('uname')
let pass= document.getElementById('upwd')
let mail = document.getElementById('uemail')
let button = document.getElementById('btn')
document.getElementById('un').style.visibility='hidden'
document.getElementById('up').style.visibility='hidden'
document.getElementById('ue').style.visibility='hidden'
function validate()
{
    if(na.value !=" " && pass.value !=" " && mail.value != " ")
    {
        console.log("doone")
    }
    else
    {
        document.getElementById('un').style.visibility='visible'
document.getElementById('up').style.visibility='visible'
document.getElementById('ue').style.visibility='visible'
return false;
    }
}