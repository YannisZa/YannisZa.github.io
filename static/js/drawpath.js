// Get the id of the <path> element and the length of <path>
var myline = document.getElementById("myline");
var length = myline.getTotalLength();
circle = document.getElementById("circle");
// The start position of the drawing
myline.style.strokeDasharray = length;

// Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
myline.style.strokeDashoffset = length;

// Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
window.addEventListener("scroll", myFunction);

function myFunction() {
  // What % down is it?
  var scrollpercent =
    (document.body.scrollTop + document.documentElement.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);
  // Length to offset the dashes
  var draw = length * scrollpercent;

  // Reverse the drawing (when scrolling upwards)
  myline.style.strokeDashoffset = length - draw;

  //get point at length
  endPoint = myline.getPointAtLength(draw);
  circle.setAttribute("cx", endPoint.x);
  circle.setAttribute("cy", endPoint.y);
}
