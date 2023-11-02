let Firstname = false;
let Lastname = false;
let Username = false;
let Password = false;

function registration() {
  let FirstnameInput = document.getElementById("Firstname").value;
  let LastnameInput = document.getElementById("Lastname").value;
  let UsernameInput = document.getElementById("Username").value;
  let PasswordInput = document.getElementById("password").value;

  let userData = localStorage.getItem("userData");

  userData = JSON.parse(userData);
  let users = userData || [];
  if (userData === null || userData.length === 0) {
    users.push({
      Firstname: FirstnameInput,
      Lastname: LastnameInput,
      Username: UsernameInput,
      Password: PasswordInput,
    });
    console.log(Firstname, "firstName");

    if (Firstname && Lastname && Username && Password) {
      localStorage.setItem("userData", JSON.stringify(users));
    }
  }

  if (userData.length > 0) {
    users.push({
      Firstname: FirstnameInput,
      Lastname: LastnameInput,
      Username: UsernameInput,
      Password: PasswordInput,
    });

    if (Firstname && Lastname && Username && Password) {
      localStorage.setItem("userData", JSON.stringify(users));
    }
  }
}

function FirstnameValidator() {
  let FirstnameInput = document.getElementById("Firstname").value;
  const FirstnameRegex = /^[A-Za-z]{3,10}$/gi;
  let FirstnameValid = document.getElementById("FirstnameValid");

  if (!FirstnameInput.match(FirstnameRegex)) {
    FirstnameValid.style.color = "red";
    FirstnameValid.innerHTML = "incorrect format";
    Firstname = false;
    return;
  } else {
    FirstnameValid.innerHTML = "";
    Firstname = true;
  }
  console.log(Firstname);
}

function LastnameValidator() {
  let LastnameInput = document.getElementById("Lastname").value;
  const LastnameRegex = /^[A-Za-z]{3,10}$/gi;
  let LastnameValid = document.getElementById("LastnameValid");

  if (!LastnameInput.match(LastnameRegex)) {
    LastnameValid.style.color = "red";
    LastnameValid.innerHTML = "incorrect format";
    Lastname = false;
  } else {
    LastnameValid.innerHTML = "";
    Lastname = true;
  }
}

function Usernamevalidator() {
  let UsernameInput = document.getElementById("Username").value;
  const UsernameRegex = /^[A-Za-z]{3,10}$/gi;
  let UsernameValid = document.getElementById("UsernameValid");

  if (!UsernameInput.match(UsernameRegex)) {
    UsernameValid.style.color = "red";
    UsernameValid.innerHTML = "incorrect fortmat";
    Username = false;
  } else {
    UsernameValid.innerHTML = "";
    Username = true;
  }
}

function passwordValidator() {
  let password = document.getElementById("password").value;
  const passwordRegex = /^[A-Z].{0,8}$/;
  let passwordValid = document.getElementById("passwordValidator");

  if (!password.match(passwordRegex)) {
    passwordValid.style.color = "red";
    passwordValid.innerHTML = "incorrect format";
    Password = false;
  } else {
    passwordValid.innerHTML = "";
    Password = true;
  }
}
