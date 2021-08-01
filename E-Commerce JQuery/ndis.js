

console.clear()
console.log('test...')

if (localStorage.getItem("name") == null) {
    document.getElementById("uname1").innerHTML = "Welcome to Sagar Shopping";
    document.getElementsByClassName('editMenu')[0].style.display = 'none';
    document.getElementsByClassName('editMenu')[1].style.display = 'none';
}
else{
    var x = localStorage.getItem("name");
document.getElementById("uname1").innerHTML = "Welcome to Sagar Shopping, "+x;
document.getElementsByClassName('signupLi')[0].style.display = 'none';
document.getElementsByClassName('signupLi')[1].style.display = 'none';
}    

