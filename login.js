document.addEventListener('DOMContentLoaded', function () {
    const contentSection = document.querySelector('.content');
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const formBoxLogin = document.querySelector('.form-box.login');
    
    formBoxLogin.style.transform = 'translateX(400px)';

    contentSection.style.display = 'block';
    wrapper.classList.remove('active-popup');

    function showLoginForm() {
        wrapper.classList.add('active-popup');
        formBoxLogin.style.transform = 'translateX(0)';
        contentSection.style.display = 'none';
    }

    function closeForms() {
        wrapper.classList.remove('active-popup');
        formBoxLogin.style.transform = 'translateX(400px)';
        contentSection.style.display = 'block';
    }

    loginLink.addEventListener('click', showLoginForm);
    btnPopup.addEventListener('click', showLoginForm);
});
