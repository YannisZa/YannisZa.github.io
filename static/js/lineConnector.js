document
  .querySelector(".readmorebutton")
  .addEventListener("click", function () {
    var bioDiv = document.querySelector(".bio");
    // Check if the display style is explicitly set
    if (bioDiv.style.display !== "" && bioDiv.style.display !== "none") {
      const sectionList = ["education", "work"];
      for (const sec of sectionList) {
        var img = document.querySelectorAll("." + sec + "-image");
        var textbox = document.querySelectorAll("." + sec + "-text");

        var horrizontal_line_connector = document.querySelectorAll(
          "." + sec + "-image-to-text-connector-horrizontal"
        );
        var timeline_vertical_line_connector = document.querySelectorAll(
          "." + sec + "-timeline-connector-vertical"
        );
        for (var i = 0; i < img.length; i++) {
          var imgRect = img[i].getBoundingClientRect();
          var textboxRect = textbox[i].getBoundingClientRect();
          var distanceX = Math.abs(imgRect.right - textboxRect.left);
          horrizontal_line_connector[i].style.width = distanceX + "px";
        }

        for (var i = 0; i < textbox.length - 1; i++) {
          var horrizontallineRect =
            horrizontal_line_connector[i].getBoundingClientRect();
          var textboxbottomRect = textbox[i].getBoundingClientRect();
          var textboxtopRect = textbox[i + 1].getBoundingClientRect();
          // Set x coordinate
          timeline_vertical_line_connector[i].style.marginLeft =
            horrizontallineRect.left + textboxtopRect.width / 2 + "px";
          // Set height
          timeline_vertical_line_connector[i].style.height =
            textboxbottomRect.height / 2 + "px";
        }
      }
    }
  });
