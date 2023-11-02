let chars = "sdsdjkfsdkfjskdfbsdfs,ndf9t3409503kjsdfjks";

function generateId(number) {
  let result = "";
  for (let i = 0; i < chars.length; i++) {
    result = result + chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
}

function SignIn(event) {
  event.preventDefault();
  console.log("hello");
  let Firstname = document.getElementsByClassName("Firstname").value;
  let Lastname = document.getElementsByClassName("Lastname").value;
  let Username = document.getElementsByClassName("username").value;
  let Password = document.getElementsByClassName("password").value;
  let RememberMe = document.getElementById("remeberMe");

  let SignContent = localStorage.getItem("userData");
  SignContent = JSON.parse(SignContent);

  for (let userdata of SignContent) {
    if (
      userdata.Firstname === Firstname &&
      userdata.Lastname === Lastname &&
      userdata.Username === Username &&
      userdata.Password === Password
    );

    if (RememberMe.checked) {
      let timeNow = new Date();

      timeNow.setTime(timeNow.getTime() + 5 * 24 * 60 * 60 * 1000);

      let atTime = timeNow.toUTCString();

      let value = generateId(36);

      document.cookie = `sessionToken=${value};expires=${atTime};path=/`;

      SignContent.sessionToken = value;
    } else {
      let value = generateId(36);
      SignContent.sessionToken = value;
      sessionStorage.setItem("sessionToken", value);
    }
  }
 
}
