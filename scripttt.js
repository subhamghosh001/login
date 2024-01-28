function validateForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    if (email.trim() === '' || password.trim() === '') {
      alert('Please fill in all fields');
      return false;
    }
  
    // Additional validation logic like email format check
  
    return true;
  }
  