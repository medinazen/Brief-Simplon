import { isLogged, logout, deleteAccount } from "../module/auth.js"; 
import { redirecttologin, navigation } from "../module/nav.js";
import { displayuserinfo, togglemenu } from "../module/ui.js";
const users = JSON.parse(localStorage.getItem('users')) || {};

const currentUser = sessionStorage.getItem('currentUser');
const currentUserMail = sessionStorage.getItem('currentusermail');


if (!isLogged()) {
  redirecttologin();
}
navigation();

const elements = {
  logoutBtn: document.getElementById('deconnexion-button'),
  settingsBtn: document.getElementById('settingbutton'),
  optionsMenu: document.getElementById('optionsmenu'),
};
displayuserinfo(currentUser,currentUserMail)

deleteAccount();

elements.logoutBtn.addEventListener('click', () => {
  logout();
  redirecttologin();
});

elements.settingsBtn.addEventListener('click', () => {
  togglemenu(elements.optionsMenu);
});
