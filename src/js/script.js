var expand=document.getElementsByClassName("expand");

var i;

for(i=0;i<expand.length;i++){
    expand[i].addEventListener("click",function(){
        this.classList.toggle("activate");
        var content=this.nextElementSibling;
        if(content.style.display==="block"){
            content.style.display="none";
        }
        else{
            content.style.display="block";
        }
    })
}