document.querySelectorAll(".overlay-trigger").forEach((e) => {

    e.addEventListener("click", function() {
        let menuOverlay = document.querySelector(".menu-overlay")
        let overlayActive = menuOverlay.classList.contains("menu-overlay--active")
        let bgFade = document.querySelector(".bg-fade")
        let stickyHeaderIcon = document.querySelector(".sticky-header-icon")
        let mainHeaderIcon = document.querySelector(".main-header-icon")

        if (overlayActive) {
            closeOverlay()
        }
        else {
            openOverlay()
        }

        function openOverlay() {
            menuOverlay.classList.add("menu-overlay--active")
            bgFade.classList.add("bg-fade--active")
            stickyHeaderIcon.classList.add("menu-icon--close-x")
            mainHeaderIcon.classList.add("menu-icon--close-x")
            bgFade.addEventListener("click", function() {
                closeOverlay()
            })
            document.addEventListener("keyup", function(e) {
                if(e.key === "Escape")
                closeOverlay()
            })
        }

        function closeOverlay () {
            menuOverlay.classList.remove("menu-overlay--active")
            bgFade.classList.remove("bg-fade--active")
            stickyHeaderIcon.classList.remove("menu-icon--close-x")
            mainHeaderIcon.classList.remove("menu-icon--close-x")
            overlayIcon.classList.remove("menu-icon--close-x")
        }
    })
})




