import { redirecttologin } from "./nav.js";

export const getcurrentUser = () => ({
 user: sessionStorage.getItem('currentUser'),
 mail: sessionStorage.getItem('currentusermail')
});
export const isLogged = () =>
    sessionStorage.getItem('currentUser');
export const logout = () => { 
sessionStorage.clear();}
export const deleteAccount = () =>{
    document.getElementById('delete-button')?.addEventListener('click',() => {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    const {user} = getcurrentUser();
    delete users[user];
    localStorage.setItem('users', JSON.stringify(users));
    logout();
    redirecttologin();
})};
