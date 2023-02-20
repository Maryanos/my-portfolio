let contactForm = document.querySelectorAll(".contact-form")
contactForm.forEach((e) => {
    e.innerHTML = `
        <div class="ctf center-v" id="contact">
            <div class="ctf__content center-v">
                <h2 data-aos="fade-in" data-aos-delay="100">Get In Touch!</h2>
                <p data-aos="fade-in" data-aos-delay="200">I'm always open for any new opportunities, and my inbox is also always open :)<br>If you have any question or just want to say hello, I will always get back to you!</p>
            </div>
            <div class="ctf__form" data-aos="flip-up">
                <input class="ctf__form__name" type="text" name="firstName" id="first-name" placeholder="Your Name">
                <input class="ctf__form__email" type="email" name="email" id="email" placeholder="Your Email">
                <textarea class="ctf__form__msg" name="message" id="message" rows="10" placeholder="Your Message"></textarea>
                <div class="send-btn-wrapper" data-aos="fade-up">
                    <a class="cta-btn-send" href="#">Send<i class="fa-regular fa-paper-plane"></i></a>
                </div>
            </div>
        </div>
    `
})
