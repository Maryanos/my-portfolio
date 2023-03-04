let emojiAstonished = document.querySelectorAll(".lottie-astonished")
emojiAstonished.forEach((e) => {
  const animation = bodymovin.loadAnimation({
    container: e,
    path: "./assets/images/astonished.json",
    renderer: "svg",
    loop: true,
    autoplay: true,
    name: "astonished"
  })
})

let lines = document.querySelectorAll(".lottie-lines")
lines.forEach((e) => {
  const animation = bodymovin.loadAnimation({
    container: e,
    path: "./assets/images/lines.json",
    renderer: "svg",
    loop: true,
    autoplay: true,
    name: "lines"
  })
})

