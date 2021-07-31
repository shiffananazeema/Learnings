function store(){

    var name = document.getElementById('name');
    var number = document.getElementById('number');
    var email = document.getElementById('email');
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

    else if(!email.value.match(mail))
    {
    alert('Invalid Email');
    }
    
    else
    {    
    localStorage.setItem('name',name.value);
    localStorage.setItem('number',number.value);
    localStorage.setItem('email',email.value);
    location.href = "dashboard.html";
    }
    } 
