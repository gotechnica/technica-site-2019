$("#menu-btn").click(function(e) {
  e.preventDefault();
  if ($("#mobile-top").hasClass("hidden")) {
    $("#mobile-top").removeClass("hidden")
  } else {
    $("#mobile-top").addClass("hidden");
  }
});
