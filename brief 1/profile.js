const users = JSON.parse(localStorage.getItem('users')) || {}
const currentusermail = sessionStorage.getItem('currentusermail')
const currentuser = sessionStorage.getItem('currentUser')
const deletebutton = document.getElementById('delete account')
const homebutton = document.getElementById('home')
const identifiant = localStorage.getItem('identifiant');
const mail = localStorage.getItem('mail');  
const password = localStorage.getItem('password');
const helpButton = document.getElementById('help-button');
const deconexionButton = document.getElementById('deconnexion-button');
if (!currentuser){
    window.location.href = "index.html"
};
helpButton.addEventListener('click', () => {
    window.location.href = "help.html"
})
identifiantDisplay = document.getElementById('identifiant-display');
mailDisplay = document.getElementById('mail-display');
identifiantDisplay.textContent += currentuser
mailDisplay.textContent += currentusermail
homebutton.addEventListener('click', () =>  {
window.location.href = 'accueil.html';
})
deletebutton.addEventListener('click', () => {
    delete users[currentuser]; 
    localStorage.setItem('users', JSON.stringify(users));
    sessionStorage.clear()
    window.location.href = 'index.html'
})
function bascule(elem) {
        const button = document.getElementById(elem);
        const isHidden = getComputedStyle(button).display === 'none';
        button.style.display = isHidden ? 'block' : 'none'; 
}
const settingbutton = document.getElementById('settingbutton');
settingbutton.addEventListener('click', () => {
    bascule('optionsmenu');
});
deconexionButton.addEventListener('click', () => {
    sessionStorage.clear();
    window.location.href = 'index.html';
});