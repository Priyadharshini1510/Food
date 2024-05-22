function tablefind(){
    email1=document.getElementById("bx1");
    e1=document.getElementById("table1");
    if(email1.value==""){
        e1.innerText="Please enter valid information";
        return false;
    }else{
        e1.innerText="";

    }
}