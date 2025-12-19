let users = JSON.parse(localStorage.getItem('users')) || []
const login = document.getElementById('login-button');
const passwordInput = document.getElementById('password');
const mailInput = document.getElementById('mail');
const identifiantInput = document.getElementById('identifiant');
login.addEventListener('click', () => {
    const password = passwordInput.value;
    const mail = mailInput.value;
    const identifiant = identifiantInput.value;
const newUser = {
                identifiant : identifiant,
                mail : mail,
                password: password
};
    if (password && mail && identifiant) {
        if (mail === '' || !mail.includes('@') && !mail.includes('.')) {
            alert('Veuillez entrer une adresse email valide.');
        } else if (password.length < 12) {
            alert('Le mot de passe doit contenir au moins 12 caractères.');
        } else {
            users.push(newUser);
             localStorage.setItem('users', JSON.stringify(users))
            window.location.href = 'accueil.html';
        }
    } else {
            
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
    bascule('optionsmenu');
});

document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        login.click();
    }
});