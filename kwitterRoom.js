welcome="Welcome "+localStorage.getItem("User's name");
console.log(welcome);
document.getElementById("welcome").innerHTML=welcome;
function logout(){
    window.location="confirm.html";
}