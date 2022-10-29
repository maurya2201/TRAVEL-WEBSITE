const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

const newLocal = $('form').submit(function () {

  var fname = $.trim($('#fname').val());
  var lname = $.trim($('#lname').val());
  var email = $.trim($('#email').val());

  if (fname === '') {
    alert('First name is empty.');
    return false;
  }
  else if (lname === '') {
    alert('Last Name is empty.');
    return false;
  }
  else if (email === '') {
    alert('email is empty.');
    return false;
  }
});