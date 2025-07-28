const whiteKeys = document.querySelectorAll(".white");
for (let i = 0; i < whiteKeys.length; i++) {
  whiteKeys[i].addEventListener("click", function () {
    const buttonInnerHTML = this.getAttribute("data-key");
    playSound(buttonInnerHTML);
    animateKey(buttonInnerHTML);
  });
}
document.addEventListener("keydown", function (event) {
  const pressedKey = event.key.toUpperCase();
  if (pressedKey >= "A" && pressedKey <= "Z") {
    playSound(pressedKey);
    animateKey(pressedKey);
  }
});
function playSound(key) {
  const audio = new Audio(`sounds/${key}.ogg`);
  audio.play().catch((err) => console.log("Sound error:", err));
}
function animateKey(currentKey) {
  const activeKey = document.querySelector(`.white[data-key="${currentKey}"]`);
  if (activeKey) {
    activeKey.classList.add("active");
    setTimeout(() => {
      activeKey.classList.remove("active");
    }, 150);
  }
}