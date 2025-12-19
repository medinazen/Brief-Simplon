const deletebutton = document.getElementById('delete account')
const homebutton = document.getElementById('home')
const identifiant = localStorage.getItem('identifiant');
const mail = localStorage.getItem('mail');  
const password = localStorage.getItem('password');
identifiantDisplay = document.getElementById('identifiant-display');
mailDisplay = document.getElementById('mail-display');
passwordDisplay = document.getElementById('password-display');
identifiantDisplay.textContent += identifiant;
mailDisplay.textContent += mail;
passwordDisplay.textContent += password;
homebutton.addEventListener('click', () =>  {
window.location.href = 'accueil.html';
})
deletebutton.addEventListener('click', () => {
    removeitem 
})
