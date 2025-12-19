const identifiant = localStorage.getItem('identifiant');
const identifiantDisplay = document.getElementById('identifiant-display');
const settingButton = document.getElementById('settingbutton');
const profileButton = document.getElementById('user-icon');
const deconexionButton = document.getElementById('deconnexion-button');
const helpButton = document.getElementById('help-button');
identifiantDisplay.textContent += identifiant;
deconexionButton.addEventListener('click', () => {
    window.location.href = 'home.html';
});

function bascule(elem) {
        const button = document.getElementById(elem);
        if (button.style.display === 'none') {
            button.style.display = 'block';
        }
    else {
            button.style.display = 'none';
        }
}
    settingButton.addEventListener('click', () => {
    bascule('optionsmenu');
  
    });
  profileButton.addEventListener('click', () => {
        window.location.href = 'profile.html';
}
);
 helpButton.addEventListener('click', () => {
        window.location.href = 'help.html';
} 
);