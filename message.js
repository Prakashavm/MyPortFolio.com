let a=localStorage.getItem('userdetails') ? JSON.parse(localStorage.getItem('userdetails')) : [];
let usertext=document.getElementById("text");
let usernum=document.getElementById("num");
let usermail=document.getElementById("email");
let usersub=document.getElementById("subject");
let usertextarea=document.getElementById("text-area");
let val=true;
document.getElementById("sub").addEventListener("submit",(e)=>{
    e.preventDefault();
    let usertextin=usertext.value;
    let usernumin=usernum.value;
    let usermailin=usermail.value;
    let usersubin=usersub.value;
    let usertextareain=usertextarea.value;
    
    let user={
        "username":usertextin,
        "mobilenumber":usernumin,
        "email":usermailin,
        "subject":usersubin,
        "text":usertextareain
    }
    validPhone(user.mobilenumber);
    if(val)
    {
        a.push(user);
    localStorage.setItem("userdetails",JSON.stringify(a));
    alert("Thank you for response")
    }
    else{
        alert("please Enter valid  mobile number ")
    }

    usertext.value="";
    usernum.value="";
    usermail.value="";
    usersub.value="";
    usertextarea.value="";
})


function validPhone(number)
{
   if(number.length==10) val=true;
   else val=false;
}