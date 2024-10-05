const { v4: uuidv4 } = require('uuid');

exports.handler = async (event, context) => {
    const data = JSON.parse(event.body);

    const user = {
        id: uuidv4(),
        username: data.username,
        email: data.email,
        password: data.password // En un proyecto real, asegúrate de hashear la contraseña
    };

    // Aquí puedes agregar la lógica para guardar el usuario en una base de datos

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Usuario registrado con éxito', user })
    };
};
