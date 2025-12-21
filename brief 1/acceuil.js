const currentusers =sessionStorage.getItem('currentUser')
const identifiantDisplay = document.getElementById('identifiant-display');
const settingButton = document.getElementById('settingbutton');
const profileButton = document.getElementById('user-icon');
const deconexionButton = document.getElementById('deconnexion-button');
const helpButton = document.getElementById('help-button');
if (!currentusers){
    window.location.href = "index.html"
};
identifiantDisplay.textContent += currentusers;
deconexionButton.addEventListener('click', () => {
    sessionStorage.clear();
    window.location.href = 'index.html';
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