document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const formSelection = document.getElementById('formSelection');
    const btnRegister = document.getElementById('btnRegister');
    const btnLogin = document.getElementById('btnLogin');
    const switchToRegister = document.getElementById('switchToRegister');
    const switchToLogin = document.getElementById('switchToLogin');

    // Mostrar formulario de registro y ocultar el de inicio de sesión y la selección de botones
    btnRegister.addEventListener('click', () => {
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
        formSelection.style.display = 'none'; // Ocultar los botones
    });

    // Mostrar formulario de inicio de sesión y ocultar el de registro y la selección de botones
    btnLogin.addEventListener('click', () => {
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
        formSelection.style.display = 'none'; // Ocultar los botones
    });

    // Cambiar de registro a inicio de sesión usando el hipervínculo
    switchToLogin.addEventListener('click', (event) => {
        event.preventDefault();
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    });

    // Cambiar de inicio de sesión a registro usando el hipervínculo
    switchToRegister.addEventListener('click', (event) => {
        event.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });
});
