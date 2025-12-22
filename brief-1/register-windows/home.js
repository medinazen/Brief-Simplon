let users = JSON.parse(localStorage.getItem('users')) || {}
const login = document.getElementById('login-button');
const passwordInput = document.getElementById('password');
const mailInput = document.getElementById('mail');
const identifiantInput = document.getElementById('identifiant');
const helpButton = document.getElementById('help-button')
login.addEventListener('click', () => {
    const password = passwordInput.value;
    const hash = CryptoJS.SHA256(password).toString()
    const mail = mailInput.value;
    const identifiant = identifiantInput.value;
if (!password || !mail || !identifiant ){
    alert('veuillez remplir tout les champs,');
    return;
}
if (!mail.includes('@') ||!mail.includes('.')){
    alert('veuillez remplir une adresse mail valide.');
    return;
}
if (password.length < 12){
    alert('le mot de passe doit contenir au moin 12 caractères.');
    return;
}
if (users[identifiant]){
    alert('Identifiant déja utilisé.');
    return;
}
if (users[mail]){
    alert('Mail déja utilisait')
    return
}
users[identifiant] = {
    mail: mail,
    password: hash
};
localStorage.setItem('users', JSON.stringify(users));
sessionStorage.setItem('currentUser', identifiant,)
sessionStorage.setItem('currentusermail', mail)
window.location.href = '../acceuil-window/accueil.html';
});
function bascule(elem) {
    const button = document.getElementById(elem);
    if (button.style.display === 'none') {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
}

const settingbutton = document.getElementById('settingbutton');
settingbutton.addEventListener('click', () => {
    bascule('optionsmenu');
});

document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        login.click();
    }
});
helpButton.addEventListener("click", () =>{
    window.location.href = '../help-windows/help.html'
});