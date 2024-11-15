document
  .getElementById("toggleFeatures")
  .addEventListener("click", function () {
    var featuresSection = document.getElementById("features");
    featuresSection.style.display =
      featuresSection.style.display === "none" ? "block" : "none";
  });
