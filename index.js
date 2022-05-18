const myGiff = document.querySelector(".giff");
const sbmbtn = document.getElementById("sbm");

sbmbtn.addEventListener("click",(e) =>{
   e.preventDefault()
   myGiff.style.visibility= "visible";
   setTimeout(function(){
      myGiff.style.visibility= "hidden";
   }, 3000
   
   );
}
)

