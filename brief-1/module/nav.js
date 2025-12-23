export const navigation = () => {
    document.getElementById('home')?.addEventListener('click',()=>{
        window.location.href = '../acceuil-window/accueil.html';
    });
    document.getElementById('help-button')?.addEventListener('click', () => {
        window.location.href ='../help-windows/help.html';
    });
    document.getElementById('profile-button')?.addEventListener('click', () =>{
        window.location.href ='../profile-windows/profile.html'
    })

};
export const redirecttologin = () => {
    window.location.href = '../register-windows/index.html';
};