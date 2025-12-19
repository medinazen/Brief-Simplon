const users = JSON.parse(localStorage.getItem('users')) || {}
const currentusermail = sessionStorage.getItem('currentusermail')
const currentuser = sessionStorage.getItem('currentUser')
const deletebutton = document.getElementById('delete account')
const homebutton = document.getElementById('home')
const identifiant = localStorage.getItem('identifiant');
const mail = localStorage.getItem('mail');  
const password = localStorage.getItem('password');
identifiantDisplay = document.getElementById('identifiant-display');
mailDisplay = document.getElementById('mail-display');
identifiantDisplay.textContent += currentuser
mailDisplay.textContent += currentusermail
homebutton.addEventListener('click', () =>  {
window.location.href = 'accueil.html';
})
deletebutton.addEventListener('click', () => {
   localStorage.setItem('users', JSON.stringify(users));
    sessionStorage.clear()
    window.location.href = 'home.html'
})
