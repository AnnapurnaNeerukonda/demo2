let button = document.getElementById('btn')
let uname = document.querySelector('#un')
let upass = document.querySelector('#up')
let upho = document.querySelector('#uph')
let uemail = document.querySelector('#ue')
document.getElementById('unam').style.visibility = 'hidden'
document.getElementById('upss').style.visibility = 'hidden'
document.getElementById('upno').style.visibility = 'hidden'
document.getElementById('une').style.visibility = 'hidden'
function validate()
{
    if((uname.value.trim() != "" && upass.value.trim() != "") && (upho.value.trim() != "" && uemail.value.trim() !=""))
    {
        console.log("please fill out this field!")
    }
    else
    {
        document.getElementById('unam').style.visibility='visible'
        document.getElementById('upss').style.visibility='visible'
        document.getElementById('upno').style.visibility='visible'
        document.getElementById('une').style.visibility='visible'
        return false;
    }
}