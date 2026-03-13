function createUser() {

  const username = document.getElementById("username").value;

  const message = document.getElementById("message");

  if(username === ""){
    message.innerText = "Username cannot be empty";
    return;
  }

  message.innerText = "User created: " + username;

}