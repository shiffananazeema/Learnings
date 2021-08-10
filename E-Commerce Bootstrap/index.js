
$(document).ready(function(){
    $("#register").click(function(event){
        event.preventDefault();

    var name = $('#name').val();
    var number = $('#number').val();
    var email = $('#email').val();
    var password = $('#password').val();
  
    if(name == "")   
    {
    swal("Error","Please Enter Your Name","warning");
    }
    
    else if(number == "")
    {
        swal("Error","Please Enter Your Number","warning");
    }
    
    else if(email == "")
    {
        swal("Error","Please Enter Your Email","warning");
    }


    else if(password == "")
    {
        swal("Error","Please Enter Password","warning");
    }

    else
    {    
    localStorage.setItem('name',name);
    localStorage.setItem('number',number);
    localStorage.setItem('email',email);
    localStorage.setItem('password',password);
    swal({
        title: "Good Job",
        text: "You are now a Member of Mobile Store Shopping",
        icon: "success",
        button: "Confirm"
    }).then(function() {
        window.location = "index.html";
    })
    }
    });

}); 


$(document).ready(function(){
    $("#login").click(function(event){
        event.preventDefault();
        
        var savedname = localStorage.getItem('name');
        var savedpass = localStorage.getItem('password');

        var logname = $('#loginname').val();
        var logpass = $('#loginpass').val();

        if(logname == savedname && logpass == savedpass)
        {
            location.href = "index.html";
        }
        else{
            swal("Error","Invalid username or password!","warning");
        }
    });
});

$(document).ready(function(){
    $("#edit").click(function(){
        $('#editname').val(localStorage.getItem('name'));
    });
    $("#save").click(function(){
        var ename = $('#editname').val();
        if(ename == "")
        {
            return 1;
        }
        else{

        localStorage.setItem('name',ename);
       location.href = "index.html";
        }
    });
});



$(document).ready(function(){
  var x = localStorage.name;
  $("#helloname").html("Hello, "+x);
});    