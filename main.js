const upper = document.getElementById('upper');
const lower = document.getElementById('lower');
const symbols = document.getElementById('symbols');
const numbers = document.getElementById('numbers');
const confirm = document.getElementById('confirm');
const result = document.getElementById('result');
const pass = document.getElementById('pass');
const pwdLength = document.getElementById("length");


confirm.onclick = function() {
  let chars = "";
  let password = "";
  
  chars += upper.checked ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
  
  chars += lower.checked ? "abcdefghijklmnopqrstuvwxyz" : "";
  
  chars += symbols.checked ? "&_π/!?*¥%∆" : "";
  
  chars += numbers.checked ? "1234567890" : "";
  
  let randomInd = Math.floor(Math.random() * chars.length);
  
  if (chars.length <= 0) {
    alert('You must include atleast 1 character datatype to the password')
    pass.textContent = "";
  }
  else if (pwdLength.value <= 0) {
    result.textContent = " ";
    result.innerHTML = `
    <p style="color: red;">Password length must be atleast 1 character long.</p>
    `;
    pass.textContent = '';
  }
  else {
    for (let i = 0; i < pwdLength.value; i++) {
      password += chars[Math.floor(Math.random() * chars.length)]
    }
    
    result.textContent = `Generated password:`;
    pass.textContent = password;
    
  }
}
