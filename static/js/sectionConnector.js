window.addEventListener("scroll", function () {
    const sectionList = ["2", "3"];
    for (const secid of sectionList) {
      let windowHeight = window.innerHeight;
      // Get the scroll height of the document
      var mydrawnline = document.getElementById("mydrawnline" + secid);
      var mydrawnpath = document.getElementById("mydrawnpath" + secid);
      mydrawnline.setAttribute("height", windowHeight * 0.8);
      mydrawnpath.setAttribute("d", "M25 0 V" + windowHeight * 2);

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
      // console.log(length, scrollpercent, draw);
      // Reverse the drawing (when scrolling upwards)
      mydrawnpath.style.strokeDashoffset = length - draw;
    }
});