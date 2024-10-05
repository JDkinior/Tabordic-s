const sqlite3 = require('sqlite3').verbose();
const { v4: uuidv4 } = require('uuid');

const db = new sqlite3.Database('./ecommerce.db');

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Method Not Allowed' })
        };
    }

    const data = JSON.parse(event.body);

    const user = {
        id: uuidv4(),
        username: data.username,
        email: data.email,
        password: data.password // En un proyecto real, asegúrate de hashear la contraseña
    };

    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        db.run(query, [user.username, user.email, user.password], function (error) {
            if (error) {
                console.error('Error al registrar usuario:', error);
                reject({
                    statusCode: 500,
                    body: JSON.stringify({ message: 'Error al registrar usuario', error })
                });
            } else {
                resolve({
                    statusCode: 200,
                    body: JSON.stringify({ message: 'Usuario registrado con éxito', user })
                });
            }
        });
    });
};