
$(document).ready(function(){
    $("#store").click(function(event){
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
        text: "You are now a Member of Sagar Shopping",
        icon: "success",
        button: "Confirm"
    }).then(function() {
        window.location = "index.html";
    })
    }
    });
}); 

    
    $(document).ready(function(){
        $("#check").click(function(){
            var susername = localStorage.getItem('name');
            var spassword = localStorage.getItem('password');

            var user = $('#username').val();
            var pass = $('#passn').val();

            if(user == susername && pass == spassword)
            {
                location.href = "index.html";
            }
            else{
                swal("Error","Invalid username or password!","warning");
            }
        });
    });


        $(document).ready(function(){
            $("#out").click(function(){
                localStorage.clear();
                location.href = "index.html";
            });
        });
    
    $(document).ready(function(){
        $("#stay").click(function(){
            location.href = "index.html";
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

    