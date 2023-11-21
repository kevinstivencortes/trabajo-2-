let logoHamburguer = document.getElementById("logoHamburguer");
let mainMenu= document.getElementById("mainMenu");

logoHamburguer.addEventListener("click", function(){
    if (mainMenu.classList.contains("main-menu")){
        mainMenu.classList.add("main-menu-blok");
        mainMenu.classList.remove("main-menu");
    }
    else{
        mainMenu.classList.remove("main-menu-blok");
        mainMenu.classList.add("main-menu");
    }
})