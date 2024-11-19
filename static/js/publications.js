document.addEventListener("DOMContentLoaded", function () {
  const citeButtons = document.querySelectorAll(".citebutton");
  console.log(citeButtons);
  // Function to download .bib file
  citeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filePath = button.getAttribute("data-filename");

      // Create a download link dynamically
      fetch(filePath)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error fetching file: ${response.statusText}`);
          }
          return response.blob();
        })
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = filePath.split("/").pop(); // Use the filename from the path
          a.click();
          URL.revokeObjectURL(url);
        })
        .catch((error) => {
          console.error("Error downloading .bib file:", error);
        });
    });
  });
});
