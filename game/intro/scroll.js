const SCROLL_DISTANCE_X = 0;
const SCROLL_DISTANCE_Y = Math.round(window.innerHeight / 90);
const SCROLL_DELAY = 10;
let autoScrolling = false;
let autoScrollIntervalId;
let bottomReached = false;

function startAutoScroll() {
  autoScrolling = true;
  autoScrollIntervalId = setInterval(
    window.scrollBy,
    SCROLL_DELAY,
    SCROLL_DISTANCE_X,
    SCROLL_DISTANCE_Y,
  );
}

function stopAutoScroll() {
  clearInterval(autoScrollIntervalId);
  autoScrolling = false;
}

function manageAutoScroll() {
  if (!bottomReached) {
    if (!autoScrolling) {
      startAutoScroll();
    } else if (
      window.scrollY >=
      document.body.scrollHeight - window.innerHeight
    ) {
      stopAutoScroll();
      bottomReached = true;
    }
  }
}

window.addEventListener("scroll", manageAutoScroll);
