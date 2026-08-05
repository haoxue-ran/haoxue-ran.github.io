(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var toggler = document.querySelector(".navbar-toggler");
    var menu = document.getElementById("navbarNav");

    if (toggler && menu) {
      toggler.addEventListener("click", function () {
        var open = menu.classList.toggle("show");
        toggler.classList.toggle("collapsed", !open);
        toggler.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }

    var progress = document.getElementById("progress");
    if (progress) {
      var updateProgress = function () {
        var top = window.scrollY;
        var height = document.documentElement.scrollHeight - window.innerHeight;
        progress.value = height > 0 ? top / height : 0;
      };
      window.addEventListener("scroll", updateProgress, { passive: true });
      updateProgress();
    }
  });
})();
