
function store(){

    var name = document.getElementById('name');
    var number = document.getElementById('number');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var mail = /@gmail.com/g;

    if(name.value.length == 0)   
    {
    return 1;
    }
    
    else if(number.value.length == 0)
    {
    return 1;
    }
    
    else if(number.value.length != 10)
    {
    return 1;
    }
    
    else if(email.value.length == 0)
    {
    return 1;
    }
    
    else if(password.value.length == 0)
    {
    return 1;
    }

    else if(!email.value.match(mail))
    {
    alert('Invalid Email');
    }
    
    else
    {    
    localStorage.setItem('name',name.value);
    localStorage.setItem('number',number.value);
    localStorage.setItem('email',email.value);
    localStorage.setItem('password',password.value);
    location.href = "index.html";
    }
    } 

    
    
    function check(){
        var susername = localStorage.getItem('name');
        var spassword = localStorage.getItem('password');
        
        var user = document.getElementById('username');
        var pass = document.getElementById('password');
        
        if(user.value == susername && pass.value == spassword)
        {
            location.href = "dashboard.html";
        }
        else
        { 
            swal("Error","Invalid username or password!","warning");
        }
        }
        
    
