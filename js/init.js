var myVar;
n =  new Date();
clientapi = "6Lcy3PQUAAAAAO7Ww09F89ZfWCexf2nkqEmFaBMX";

document.addEventListener("DOMContentLoaded", function (event) {
  setTimeout(showPage, 500);
  fetchYear();
  getBrowserTheme();
});

function fetchYear() {
  document.getElementById("date").innerHTML = n.getFullYear();
}

function switchMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  var buttonElement = document.getElementById("mode-switch");
  buttonElement.classList.toggle("dark-mode");
}

function getBrowserTheme() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.body.classList.add("dark-mode");
    var buttonElement = document.getElementById("mode-switch");
    buttonElement.classList.toggle("dark-mode");
  }
};

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


