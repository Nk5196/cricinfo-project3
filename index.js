import scorecorousel from "./component/scorecorousel.js";

 document.getElementById("midbar").innerHTML = scorecorousel()

 import footercompo from "./component/footer.js";

 document.getElementById("footer").innerHTML = footercompo()


 var classname = document.getElementsByClassName("container555");

 
 classname.addEventListener('click', newPage());

 function newPage1(){
    
  window.location.href="matchresult.html";
  }
 