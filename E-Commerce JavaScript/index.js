
function store(){

    var name = document.getElementById('name');
    var number = document.getElementById('number');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var mail = /@/g;
  
    if(name.value.length == 0)   
    {
    swal("Error","Please Enter Your Name","warning");
    }
    
    else if(number.value.length == 0)
    {
        swal("Error","Please Enter Your Number","warning");
    }
    
    else if(number.value.length != 10)
    {
        swal("Error","Please Enter Valid Number","warning");
    }
    
    else if(email.value.length == 0)
    {
        swal("Error","Please Enter Your Email","warning");
    }
    
    else if(!email.value.match(mail))
    {
        swal("Error","Please Enter Valid Mail Id","warning");
    }

    else if(password.value.length == 0)
    {
        swal("Error","Please Enter Password","warning");
    }

    else
    {    
    localStorage.setItem('name',name.value);
    localStorage.setItem('number',number.value);
    localStorage.setItem('email',email.value);
    localStorage.setItem('password',password.value);
    swal({
        title: "Good Job",
        text: "You are now a Member of Sagar Shopping",
        icon: "success",
        button: "Confirm"
    }).then(function() {
        window.location = "index.html";
    })
    }
    } 

    
    
    function check(){
        var susername = localStorage.getItem('name');
        var spassword = localStorage.getItem('password');
        
        var user = document.getElementById('username');
        var pass = document.getElementById('passn');
        
        if(user.value == susername && pass.value == spassword)
        {
            location.href = "index.html";
        }
        else
        { 
            swal("Error","Invalid username or password!","warning");
        }
        }
 
    function out(){
        localStorage.clear();
        location.href = "index.html";
    }

    function stay(){
        location.href = "index.html";
    }


    function sname(){

        var ename = document.getElementById('editname');
        if(ename.value.length == 0)   
        {
        return 1;
        }
        
        else
        {    
        localStorage.setItem('name',ename.value);
        location.href = "index.html";
        }
        }
    
    
    