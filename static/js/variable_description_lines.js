// Get the summary element
var summaryElement = document.getElementById("projectsummary");
var imageElement = document.getElementById("projectimage");

// Get the height of the summary element
var lineHeight = parseFloat(window.getComputedStyle(summaryElement).lineHeight);

// Get the height of the summary element
var summaryHeight = summaryElement.clientHeight;

var numberOfLines = Math.max(1, Math.floor(summaryHeight / lineHeight));

// console.log(lineHeight, summaryHeight, numberOfLines);

// Set the value of -webkit-line-clamp dynamically
summaryElement.style.display = "-webkit-box";
summaryElement.style.boxOrient = "vertical";
summaryElement.style.webkitLineClamp = numberOfLines;
