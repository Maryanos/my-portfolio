window.onscroll = function() {
    let stickyHeader = document.querySelector(".sticky-header")
    let menuOverlay = document.querySelector(".menu-overlay")
    let overlayIsActive = menuOverlay.classList.contains("menu-overlay--active")

    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        stickyHeader.classList.add("sticky-header--active")
    }
    else {
        stickyHeader.classList.remove("sticky-header--active")
        if (overlayIsActive && screen.width < 1024) {
            stickyHeader.classList.add("sticky-header--active")
        }
    }

    // Check if user is at the bottom - active link
    let contactBtn = document.querySelector(".link-contact")
    let a = window.innerHeight
    let b = window.scrollY
    let c = document.body.offsetHeight

    if ((a + b) >= c) {
        contactBtn.style.color = "#67B3FF"
    } else {
        contactBtn.style.color = "#c2e0ff"
    }
}


