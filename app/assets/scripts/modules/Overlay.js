document.getElementById("hamburger").addEventListener("click", function(){
    let overlayState = document.querySelector(".menu-overlay")

    if (overlayState.classList.contains("menu-overlay--active")) {
        overlayState.classList.remove("menu-overlay--active")
    }
    else {
        overlayState.classList.add("menu-overlay--active")
    }
})


