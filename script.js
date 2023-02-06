const form = document.getElementById("form");
const username = document.getElementById("username");
const usercard = document.getElementById("usercard");
const expdate = document.getElementById("expirydate");
const expmonth = document.getElementById("expirymonth");
const expyear = document.getElementById("expiryyear");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const usercardValue = usercard.value.trim();
  const expdateValue = expdate.value.trim();
  const expmonthValue = expmonth.value.trim();

  const expyearValue = expyear.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else {
    setSuccessFor(username);
  }

  if (usercardValue === "") {
    setErrorFor(usercard, "wrong format ,numbers only");
  } else {
    setSuccessFor(usercard);
  }

  if (expdateValue === "") {
    setErrorFor(expdate, "");
  } else {
    setSuccessFor(expdate);
  }
  if (expmonthValue === "") {
    setErrorFor(expmonth, "");
  } else {
    setSuccessFor(expmonth);
  }
  if (expyearValue === "") {
    setErrorFor(expyear, "cannot be blank");
  } else {
    setSuccessFor(expyear);
  }
}
function setErrorFor(input, message) {
  const formcontrol = input.parentElement;
  const small = formcontrol.querySelector("small");
  formcontrol.className = "form-control error";
  small.innerText = message;
}
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
