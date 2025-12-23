import { navigation, redirecttologin } from "../module/nav.js";
import { isLogged, logout } from "../module/auth.js";
import { displayuserinfo, togglemenu } from "../module/ui.js";

const currentUser = sessionStorage.getItem('currentUser');
const settingButton = document.getElementById('settingbutton');
const optionsMenu = document.getElementById('optionsmenu');
const deconnexionButton = document.getElementById('deconnexion-button');

if (!isLogged()) {
  redirecttologin();
}

navigation();
displayuserinfo(currentUser);


  deconnexionButton.addEventListener('click', () => {
    logout();
    redirecttologin();
  });


  settingButton.addEventListener('click', () => {
    togglemenu(optionsMenu);
  });