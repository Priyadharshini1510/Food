

user=document.getElementById("bx1");
pass=document.getElementById("bx2");


function valid()
{

// user name 

v1=document.getElementById("bx1");
e1=document.getElementById("er1");
exp1=/^[a-z A-Z,.]{3,20}$/;

if(v1.value=="")
{
 e1.innerHTML="Please Enter your Correct Name";
 v1.focus();
 return false;
}
else if(exp1.test(v1.value)==false)
{
    e1.innerHTML="Please Enter your Correct Name";
    v1.focus();
    return false;
}
else
{
    e1.innerHTML=" ";
}

//Password

v2=document.getElementById("bx2");
e2=document.getElementById("er2");
exp2=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

 if (v2.value === "") 
 {
  e2.innerHTML = "Please enter a password.";
  v2.focus();
  return false;
 }
 else if (!exp2.test(v2.value)) {
  e2.innerHTML = "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one digit.";
  v2.focus();
  return false;
   } 
        
 else {
   e2.innerHTML = "";
   return true;
  }

}


// show and hide password
function showpass(){
p=document.getElementById("bx2");
c=document.getElementById("chk");
if(c.checked)
{
    p.type="text";
}
else{
    p.type="password";
}

c=document.getElementById("rem");
    if(c.checked==true)
    {
        localStorage.setItem("u",user.value);
        localStorage.setItem("p",pass.value);
        
    }
}



if(localStorage.length>0)
{
    user.value=localStorage.getItem("u");
    pass.value=localStorage.getItem("p");
}