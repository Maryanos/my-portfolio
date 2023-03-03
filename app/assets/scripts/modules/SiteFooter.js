let siteFooter = document.querySelectorAll(".site-footer")
siteFooter.forEach((e) => {
    e.innerHTML = `
        <div class="back-to-top" data-aos="zoom-in">
            <a href="#"><i class="fa-light fa-arrow-up-from-bracket"></i></a>
        </div>
        <div class="icons-wrapper">
            <div class="contact-icons" data-aos="fade-up">
                <a href="mailto:studio@webcraff.com" target="_blank"><i class="fa-light fa-envelope"></i></a>
                <a href="https://m.me/webcraff" target="_blank"><i class="fa-brands fa-facebook-messenger"></i></a>
                <div class="right-line"></div>
            </div>
            <div class="social-icons" data-aos="fade-up">
                <a href="https://github.com/Maryanos" target="_blank"><i class="fa-brands fa-github"></i></a>
                <a href="https://www.facebook.com/webcraff" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/webcraff/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/mariusz-raszewski/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="https://webcraff.com/"><i class="fa-light fa-globe" target="_blank"></i></a>
                <div class="left-line"></div>
            </div>
        </div>
        <div class="copyrights center-v">
            <!-- <p data-aos="fade-in">Clean code always looks like it was written by someone who cares</p> -->
            <p>Handcrafted by me © 2023 all rights reserved.</p>
        </div>
    `
})
