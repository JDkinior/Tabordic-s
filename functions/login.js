exports.handler = async (event, context) => {
    const data = JSON.parse(event.body);

    // Aquí se haría la validación de usuario en base de datos, pero por ahora solo se simula
    const mockUser = {
        email: 'user@example.com',
        password: 'password123'
    };

    if (data.email === mockUser.email && data.password === mockUser.password) {
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Inicio de sesión exitoso' })
        };
    } else {
        return {
            statusCode: 401,
            body: JSON.stringify({ message: 'Credenciales incorrectas' })
        };
    }
};
