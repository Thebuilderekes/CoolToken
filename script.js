const hamburgerMenu = document.getElementById("hamburger-menu");
const closeMenu = document.getElementById("close-menu");
const navItems = document.getElementById("nav-items");

// window.addEventListener("mouseup", function(event){
//  const navItems = document.getElementById("nav-items");
//   if(event.target != navItems) {

//     navItems.style.display = "none";
//     closeMenu.style.display = "none";
//     // hamburgerMenu.style.display = "block" 
//   }

// })
function openNav(){
navItems.style.display = "block" && "flex";
hamburgerMenu.style.display =  "none";
if (hamburgerMenu.style.display =  "none"){

 closeMenu.style.display = "block";
}
}


function closeNav(){
navItems.style.display = "none";
hamburgerMenu.style.display =  "block";

if (hamburgerMenu.style.display =  "block"){

 closeMenu.style.display = "none";
}
}

