 
const users = JSON.parse(localStorage.getItem('users')) || {}
const identifiantInput = document.getElementById('identifiant');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', () => {
    const identifiant = identifiantInput.value;
    const password = passwordInput.value;
    if (identifiant && password) {
        if (!users[identifiant] || users[identifiant].password !== password) {
            alert('Identifiant ou mot de passe incorrect.');
            return
        } else {
            sessionStorage.setItem('currentUser', identifiant);
           
            sessionStorage.setItem('currentusermail', users[identifiant].mail)
            window.location.href = "accueil.html"
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