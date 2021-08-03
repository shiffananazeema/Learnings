
$(document).ready(function(){
if (localStorage.name == null) {
    $("#uname1").html("Welcome to Sagar Shopping");
    $(".editMenu").css("display","none");

}
else{
    var x = localStorage.name;
    $("#uname1").html("Welcome to Sagar Shopping, "+x);
    $(".signupLi").css("display","none");
};    
});
