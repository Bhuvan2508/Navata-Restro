$(document).ready(function () {
  // Close navbar when a navigation link is clicked
  $(".navbar-nav .nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
});
