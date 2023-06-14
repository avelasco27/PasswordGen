// Generate a random password with specified length and character types
function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;
  
    // Define character pools
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*_-+=';
  
    // Create a pool of characters based on selected types
    let pool = '';
    if (includeUppercase) pool += uppercaseChars;
    if (includeLowercase) pool += lowercaseChars;
    if (includeNumbers) pool += numberChars;
    if (includeSymbols) pool += symbolChars;
  
    // Generate the password
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * pool.length);
      password += pool.charAt(randomIndex);
    }
  
    return password;
  }
  
  // Attach event listener to generate button inside the window.onload event
  window.onload = function() {
    document.getElementById('generate').addEventListener('click', function() {
      const passwordField = document.getElementById('password');
      passwordField.value = generatePassword();
    });
  };
  