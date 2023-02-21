document.querySelectorAll(".overlay-trigger").forEach((e) => {

    e.addEventListener("click", function() {
        let menuOverlay = document.querySelector(".menu-overlay")
        let overlayIsActive = menuOverlay.classList.contains("menu-overlay--active")
        let bgFade = document.querySelector(".bg-fade")
        let stickyHeaderIcon = document.querySelector(".sticky-x")
        let mainHeaderIcon = document.querySelector(".main-x")
        let contactBtn = document.querySelector(".link-contact")
        let portfolioBtn = document.querySelector(".link-active")
        let homeBtn = document.querySelector(".link-active")
        let stickyHeader = document.querySelector(".sticky-header")
        let helloBtn = document.querySelector(".site-header__btn")
        let siteHeaderXbtn = document.querySelector(".site-header__hamburger")

        if (overlayIsActive) {
            closeOverlay()
        }
        else {
            openOverlay()
        }

        function openOverlay() {
            menuOverlay.classList.add("menu-overlay--active")
            bgFade.classList.add("bg-fade--active")
            stickyHeaderIcon.classList.add("icon-x--active")
            mainHeaderIcon.classList.add("icon-x--active")
            bgFade.addEventListener("click", function() {
                closeOverlay()
            })
            document.addEventListener("keyup", function(e) {
                if(e.key === "Escape")
                closeOverlay()
            })
            contactBtn.addEventListener("click", closeOverlay)
            homeBtn.addEventListener("click", closeOverlay)
            portfolioBtn.addEventListener("click", closeOverlay)

            if (screen.width < 1024) {
                //document.documentElement.style.overflow = "hidden"
                document.body.style.height = "100%"
                document.documentElement.style.height = "100%"
                stickyHeader.classList.add("sticky-header--active")
                helloBtn.style.opacity = "0"
                siteHeaderXbtn.style.opacity = "0"
            }
            if (screen.width < 768) {
                stickyHeader.style.left = "calc((95% - 285px)/2)"
            }
        }

        function closeOverlay () {
            menuOverlay.classList.remove("menu-overlay--active")
            bgFade.classList.remove("bg-fade--active")
            stickyHeaderIcon.classList.remove("icon-x--active")
            mainHeaderIcon.classList.remove("icon-x--active")
            if (screen.width < 1024) {
                //document.documentElement.style.overflow = "auto"
                document.body.style.height = "unset"
                document.documentElement.style.height = "unset"
                helloBtn.style.opacity = "1"
                siteHeaderXbtn.style.opacity = "1"
                if (window.scrollY < 80) {
                    stickyHeader.classList.remove("sticky-header--active")
                }
            }
            if (screen.width < 768) {
                stickyHeader.style.left = "calc((100% - 285px)/2)"
            }
        }
    })
})



