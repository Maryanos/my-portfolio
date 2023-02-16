window.onscroll = function() {
    let stickyHeader = document.querySelector(".sticky-header")
    let mainIcon = document.querySelector(".site-header__hamburger")
    let stickyIcon = document.querySelector(".sticky-header__hamburger")

    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        stickyHeader.classList.add("sticky-header--active")
    }
    else {
        stickyHeader.classList.remove("sticky-header--active")
    }
}


