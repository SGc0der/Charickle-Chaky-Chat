function addUser(){
    username=document.getElementById("username").value;
    console.log(username);
    localStorage.setItem("User's name", username);
    window.location="kwitterRoom.html";
}