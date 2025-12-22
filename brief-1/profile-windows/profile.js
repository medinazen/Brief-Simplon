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
const changeButton = document.getElementById('change-profil');
const editProfile = document.getElementById('edit-profile');
const mailInput = document.getElementById('new-mail');
const identifiantumput = document.getElementById('new-id');
let editMode = false;
if (!currentuser){
    window.location.href = "../register-windows/index.html"
};
helpButton.addEventListener('click', () => {
    window.location.href = "../help-windows/help.html"
})
identifiantDisplay = document.getElementById('identifiant-display');
mailDisplay = document.getElementById('mail-display');
identifiantDisplay.textContent += currentuser
mailDisplay.textContent += currentusermail
homebutton.addEventListener('click', () =>  {
window.location.href = '../acceuil-window/accueil.html';
})
deletebutton.addEventListener('click', () => {
    delete users[currentuser]; 
    localStorage.setItem('users', JSON.stringify(users));
    sessionStorage.clear()
    window.location.href = '../register-windows/index.html'
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
    window.location.href = '../register-windows/index.html';
});
/*
changeButton.addEventListener('click',() => {
if (!editMode){
 editProfile.style.display = 'block';
    changeButton.textContent = 'Enregistrer';
    mailInput.value = users[currentuser].mail;
    editMode = true;
    return;
}
 const newMail = mailInput.value;
  const newid = identifiantInput.value;

  if (newMail) users[currentUser].mail = newMail;
  if (newid) users[currentUser].password = identifiantInput;

  localStorage.setItem('users', JSON.stringify(users));
  
  editProfile.style.display = 'none';
  changeButton.textContent = 'Changer votre profil ?';
  editMode = false;
location.reload()
});

*/