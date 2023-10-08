let button=document.getElementById("registration")
let button2=document.getElementById("finished")
button2.style.display="none"

button.addEventListener("click", (event)=>{
let Name = document.getElementById("Name").value;
let lastname = document.getElementById("lastname").value;
let location = document.getElementById("location").value;
let Username = document.getElementById("Username").value;
let Password = document.getElementById("Password").value;

let userInfo = localStorage.getItem("userInfo")

if ( userInfo===null || userInfo.length === 0) {
  let arrayInfo = [];
  arrayInfo.push({
    Name: Name,
    lastname: lastname,
    location: location,
    Username: Username,
    Password: Password
  });
  localStorage.setItem("userInfo", JSON.stringify(arrayInfo));
}

if(userInfo.length > 0){
    userInfo=JSON.parse(userInfo);
    userInfo.push({
    Name: Name,
    lastname: lastname,
    location: location,
    Username: Username,
    Password: Password

    })
    localStorage.setItem("userinfo", JSON.stringify(userInfo))
}

// function registered(){
//     if(Name.length>=6 && lastname.length>=6 && location.length>=6 && Username.length>=6 && Password.length>=6 ){
//         alert(" registration is finished")
//     }
// }
// registered()
// //ალტერნატივა

if(Name.length>=6 && lastname.length>=6 && location.length>=6 && Username.length>=6 && Password.length>=6 ){
    button2.style.display="inline-block"
}
})