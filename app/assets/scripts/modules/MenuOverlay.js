class menuOverlay {

    constructor() {
        this.overlayButton = document.querySelector(".site-header__menu-icon");
        this.events();
    }

    events() {
        this.overlayButton.addEventListener("click", () => this.overlayHandler());

    }


    overlayHandler() {

        if (this.overlayButton.classList.contains("site-header__menu-icon--close-x")) {
            this.overlayClose();
        } else {
            this.overlayOpen();
        }
    }


    overlayOpen() {
        this.overlayButton.classList.add("site-header__menu-icon--close-x");
        alert("Hey slow down a bit this functionality is not ready yet :(")
    }
    overlayClose() {
        this.overlayButton.classList.remove("site-header__menu-icon--close-x");
    }
}

export default menuOverlay
