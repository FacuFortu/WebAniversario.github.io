document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Validación usuario
            if (username === 'AniversarioMyF' && password === '040824') {
                // Guardar estado de autenticación
                sessionStorage.setItem('loggedIn', true);
                // Redirigir a la página principal
                window.location.href = 'index.html';
            } else {
                errorMessage.textContent = 'Nombre de usuario o contraseña incorrectos.';
            }
        });
    } else {
        // Verificar si el usuario está autenticado
        if (!sessionStorage.getItem('loggedIn')) {
            window.location.href = 'login.html';
        }
    }
});




