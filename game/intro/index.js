const scrollHeight = document.getElementById("sky").scrollHeight;
const narrationDiv = document.getElementById("narration");

window.addEventListener("scroll", () => {
  if (window.scrollY < scrollHeight * 0.05) {
    narrationDiv.textContent = "";
  } else if (window.scrollY < scrollHeight * 0.32) {
    narrationDiv.textContent = "Another beautiful sunrise!";
  } else if (window.scrollY < scrollHeight * 0.4) {
    narrationDiv.textContent = "It may be our last.";
  } else if (window.scrollY < scrollHeight * 0.5) {
    narrationDiv.textContent =
      "An advanced extraterrestrial entity has targeted our little star.";
  } else if (window.scrollY < scrollHeight * 0.63) {
    narrationDiv.textContent =
      "Feverish preparations have been made to protect mother earth, but...";
  } else if (window.scrollY < scrollHeight * 0.92) {
    narrationDiv.textContent = "the future is uncertain.";
  } else {
    narrationDiv.textContent = "Help!!";
  }
});
