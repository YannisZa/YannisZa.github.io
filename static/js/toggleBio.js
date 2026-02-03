var readmorebutton = document.getElementById("readmoretext");
var bioDiv = document.querySelector(".bio");

function activateBio() {
  if (bioDiv.style.display === "" || bioDiv.style.display === "none") {
    // console.log("active", winHeight);
    // Draw path when bio display is active
    activatePath();
    readmorebutton.innerHTML = "Read less";
  } else {
    // console.log("clear", winHeight);
    // Clear path when bio display is inactive
    deactivatePath();
    readmorebutton.innerHTML = "Read more";
  }
}

const winHeight = window.innerHeight;

function drawPath() {
  // Get the scroll height of the document
  var mydrawnpath = document.getElementById("mydrawnpath1");
  // var mydrawnline = document.getElementById("mydrawnline1");
  // var mydrawnline.clientHeight*0.65;
  // var lineLength = parseFloat(mydrawnline.height.baseVal.value);
  mydrawnpath.setAttribute("d", "M25 50 V" + winHeight);
  var length = mydrawnpath.getTotalLength();
  // The start position of the drawing
  mydrawnpath.style.strokeDasharray = length;
  // Hide the readmore path by offsetting dash. Remove this line to show the readmore path before scroll draw
  mydrawnpath.style.strokeDashoffset = length;
  var scrollpercent =
    (document.body.scrollTop + document.documentElement.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);
  var draw = length * scrollpercent;
  // Reverse the drawing (when scrolling upwards)
  mydrawnpath.style.strokeDashoffset = length - draw;
}

function activatePath() {
  // Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
  window.addEventListener("scroll", drawPath);
  bioDiv.style.display = "block";
  window.scrollTo({
    top: winHeight * 0.9,
    behavior: "smooth", // Optional: Smooth scrolling
    easing: "cubic-bezier(0.345, 0.245, 0.355, 2)",
  });
}

function deactivatePath(mypath) {
  // Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
  window.removeEventListener("scroll", drawPath);
  bioDiv.style.display = "none";
}

function drawPathById(pathid) {
  // Get the scroll height of the document
  var mydrawnpath = document.getElementById(pathid);
  var length = mydrawnpath.getTotalLength();
  // The start position of the drawing
  mydrawnpath.style.strokeDasharray = length;
  // Hide the readmore path by offsetting dash. Remove this line to show the readmore path before scroll draw
  mydrawnpath.style.strokeDashoffset = length;
  var scrollpercent =
    (document.body.scrollTop + document.documentElement.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);
  var draw = length * scrollpercent;
  // Reverse the drawing (when scrolling upwards)
  mydrawnpath.style.strokeDashoffset = length - draw;
}
