// validation.js
function checkInput(id, idErr, checkValidation) {
  let dataInput = document.getElementById(id).value;

  if (dataInput && checkValidation) {
    document.getElementById(id).classList.remove("is-invalid");
    document.getElementById(idErr).style.display = "none";
    return true;
  } else {
    document.getElementById(id).classList.add("is-invalid");
    document.getElementById(idErr).style.display = "block";
    return false;
  }
}

document.getElementById("type").onchange = function () {
  let checkSelect = document.getElementById("type").value;
  if (checkSelect == "") {
    document.getElementById("errObj").style.display = "block";
    document.getElementById("type").classList.add("is-invalid");
    return false;
  } else {
    document.getElementById("errObj").style.display = "none";
    document.getElementById("type").classList.remove("is-invalid");
    return true;
  }
};

function checkSelect(dataInput) {
  if (dataInput == "") {
    document.getElementById("errObj").style.display = "block";
    document.getElementById("type").classList.add("is-invalid");
    return false;
  } else {
    document.getElementById("errObj").style.display = "none";
    document.getElementById("type").classList.remove("is-invalid");
    return true;
  }
}

function check(id) {
  let dataInput = document.getElementById(id).value;
  if (dataInput) {
    document.getElementById(id).classList.remove("is-invalid");
    return true;
  } else {
    document.getElementById(id).classList.add("is-invalid");
    return false;
  }
}

function checkName(id) {
  let dataInput = document.getElementById(id).value;
  let validName = /^[a-zA-Z\s]+$/; // Regular expression to allow only letters and spaces

  if (validName.test(dataInput)) {
    document.getElementById(id).classList.remove("is-invalid");
    return true;
  } else {
    document.getElementById(id).classList.add("is-invalid");
    return false;
  }
}

// check email
function checkEmail(id) {
  let dataInput = document.getElementById(id).value;
  let regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let tempEmail = regexEmail.test(dataInput);
  return tempEmail;
}

let checkMa = (id) => {
  let dataInput = document.getElementById(id).value;
  let listPerson = new ListPerson();
  let testMa = listPerson.arrListPerson.filter((item) => item.ma == dataInput);
  if (testMa) {
    return true;
  } else {
    return false;
  }
};
