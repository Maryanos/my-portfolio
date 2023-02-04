import "../styles/style.css"
import 'lazysizes'
import menuOverlay from "./modules/MenuOverlay"

new menuOverlay();

if (module.hot) {
    module.hot.accept()
}

//alert("Hello, this is just a test !!!")
