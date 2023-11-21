let boxToggle = document.getElementById("boxToggle");
let toggle = document.getElementById ("toggle");

boxToggle.addEventListener("click", Function(){
    if (toggle.classList.contains("toggle-off")){
        toggle.classList.add("toggle-on");
        toggle.classList.remove("toggle-of");
        boxToggle.classList.add("box-toggle-on");
        boxToggle.classList.remove("box-toggle-off");
    }
    else{
        toggle.classList.remove("toggle-on");
        toggle.classList.add("toggle-off");
        boxToggle.classList.remove("box-toggle-on");
        boxToggle.classList.add("box-toggle-off");
    }
});