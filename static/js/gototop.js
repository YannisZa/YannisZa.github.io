// Get the button:
let mybutton = document.getElementById("gotopbutton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Smooth scrolling to the top of the document
function topFunction() {
  scrollToTop(1000); // Adjust the duration of scrolling here (in milliseconds)
}

function scrollToTop(duration) {
  const startingY = window.pageYOffset;
  const startTime = Date.now();

  function step() {
    const timeElapsed = Date.now() - startTime;
    window.scrollTo(
      0,
      easeInOutCubic(timeElapsed, startingY, -startingY, duration)
    );
    if (timeElapsed < duration) {
      window.requestAnimationFrame(step);
    }
  }

  function easeInOutCubic(t, b, c, d) {
    // cubic easing in/out - accelerating until halfway, then decelerating
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  }

  window.requestAnimationFrame(step);
}
