function createUser(){

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const contact = document.getElementById("contact").value;

  const message = document.getElementById("message");

  if(!validateEmail(email)){
    message.innerText = "Invalid email address";
    return;
  }

  message.innerText = "User created: " + name;
}
