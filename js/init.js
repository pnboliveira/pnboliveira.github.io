var myVar;
n =  new Date();
clientapi = "6Lcy3PQUAAAAAO7Ww09F89ZfWCexf2nkqEmFaBMX";

function myFunction() {
  myVar = setTimeout(showPage, 500);
  document.getElementById("date").innerHTML = n.getFullYear();

}

function openNav() {
    document.getElementById("sidenav").style.width = "100vw";
  }
  
  function closeNav() {
    document.getElementById("sidenav").style.width = "0";
  }

function showPage() {
  document.getElementById("loader").classList.add("hidden");
  document.getElementById("main-content").style.display = "block";
  document.getElementById("bg").style.visibility = "visible";
  document.getElementById("bg").style.opacity = "0.2";
  document.getElementById("bg").style.transition = "all 2s";
}


