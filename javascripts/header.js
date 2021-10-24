/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function activate_about() {
  console.log("about")
}
function activate_galleries() {
  console.log("galleries")
}
function activate_pricing() {
  console.log("pricing")
}
function activate_information() {
  console.log("information")
}
function activate_faqs() {
  console.log("faq")
}
function activate_contact() {
  console.log("contact")
}
