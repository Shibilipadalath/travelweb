const validateName = () => {
    const nameInput = document.getElementById('name');
    const nameValue = nameInput.value;
    const nameRegex =  /^[A-Za-z" "]+$/; 
  
    const errorElement = document.getElementById('name-error');
  
    if (!nameRegex.test(nameValue)) {
        // errorElement.textContent = 'Invalid name';
        // errorElement.style.display = 'block';
        alert("Invalid name")}
        
    }

    const nameInput = document.getElementById('name');
    nameInput.addEventListener('input', validateName);

    // email

    function validate(){
    var mail=document.getElementById("mail").value;
  // var text = document.getElementById("name").value;
            
  
            var regx = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
            if(regx.test(mail)){
                // alert("valid mail")
                return true
            }
            else{
                alert("invalid mail")
                return false;
            }

  
          }
  function sendMail(){
    if( name==" " || mail==" "){
        alert("Enter your details")
        return false
    }else{
    alert("your response has been submitted ")
    return true;
    }
  }
    