// Close navbar on mobile
$(document).on("click", ".nav-link", function () {
  $(".navbar-collapse").collapse("hide");
});

// Auto update the year (for the footer)
document.getElementById("year").textContent = new Date().getFullYear();

// Validate the contact form
$("#submitBtn").on("click", function () {
  let isValid = true;

  const name = $("#contactName").val().trim();
  const email = $("#contactEmail").val().trim();
  const message = $("#contactMessage").val().trim();

  $("#contactName, #contactEmail, #contactMessage").removeClass("is-invalid");
  $("#nameError, #emailError, #messageError").text("");
  $("#form-success, #form-error").addClass("d-none");

  if (name === "") {
    $("#contactName").addClass("is-invalid");
    $("#nameError").text("Please enter your name.");
    isValid = false;
  }

  if (email === "") {
    $("#contactEmail").addClass("is-invalid");
    $("#emailError").text("Please enter your email.");
    isValid = false;
  } else if (!isValidEmail(email)) {
    $("#contactEmail").addClass("is-invalid");
    $("#emailError").text("Please enter a valid email address.");
    isValid = false;
  }

  if (message === "") {
    $("#contactMessage").addClass("is-invalid");
    $("#messageError").text("Please enter a message.");
    isValid = false;
  }

  if (isValid) {
    $("#form-success").removeClass("d-none");
    $("#contactName").val("");
    $("#contactEmail").val("");
    $("#contactSubject").val("");
    $("#contactMessage").val("");
  } else {
    $("#form-error").removeClass("d-none");
  }
});

// helper function to validate email
function isValidEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

// Hero background slideshow

const heroImages = ["img/IMG_5053.jpg", "img/IMG_5466.jpg", "img/IMG_7904.jpg"];

let currentIndex = 0;
const heroSection = document.getElementById("home");

function changeBackground() {
  heroSection.style.backgroundImage = `url('${heroImages[currentIndex]}')`;
  currentIndex = (currentIndex + 1) % heroImages.length;
}

// Set first image immediately
changeBackground();

// Change every 5 seconds
setInterval(changeBackground, 5000);
