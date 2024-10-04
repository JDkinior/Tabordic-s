document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = {
        username,
        email,
        password
    };

    try {
        const response = await fetch('/.netlify/functions/register', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            alert('Usuario registrado con éxito');
        } else {
            alert('Error al registrar usuario');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error al registrar usuario');
    }
});
