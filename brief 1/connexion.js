 
const identifiantInput = document.getElementById('identifiant');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', () => {
    const identifiant = identifiantInput.value;
    const password = passwordInput.value;
    const storedIdentifiant = localStorage.getItem('identifiant');
    const storedPassword = localStorage.getItem('password');
    if (identifiant && password) {
        if (identifiant === storedIdentifiant && password === storedPassword) {
            window.location.href = 'accueil.html';
        } else {
            alert('Identifiant ou mot de passe incorrect.');
        }
    }
    else {
        alert('Veuillez remplir tous les champs.');
    }
});
function bascule(elem) {
        const button = document.getElementById(elem);
        if (button.style.display === 'none') {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
}
settingbutton.addEventListener('click', () => {
    bascule('options-menu');
});
document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        loginButton.click();
    }    
});