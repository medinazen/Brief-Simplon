import { togglemenu, keypress } from "../module/ui.js"; 
import { navigation } from "../module/nav.js";
const users = JSON.parse(localStorage.getItem('users')) || {}
const identifiantInput = document.getElementById('identifiant');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');
navigation()
loginButton.addEventListener('click', () => {
    const identifiant = identifiantInput.value;
    const password = passwordInput.value;
    const hash = CryptoJS.SHA256(password).toString()
    if (identifiant && password) {
        if (!users[identifiant] || users[identifiant].password !== hash) {
            alert('Identifiant ou mot de passe incorrect.');
            return
        } else {
            sessionStorage.setItem('currentUser', identifiant);
           
            sessionStorage.setItem('currentusermail', users[identifiant].mail)
            window.location.href = "../acceuil-window/accueil.html"
        }
    }
    else {
        alert('Veuillez remplir tous les champs.');
    }
});

const settingButton = document.getElementById('settingbutton')
const optionsMenu = document.getElementById('options-menu')
  settingButton.addEventListener('click', () => {
    togglemenu(optionsMenu);
  });
keypress(loginButton)