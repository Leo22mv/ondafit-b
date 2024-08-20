const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.hashPassword = async (password) => {
    try {
        const hash = await bcrypt.hash(password, saltRounds);
        return hash;
    } catch (error) {
        throw new Error('Error en la encriptación de la contraseña');
    }
}

exports.comparePassword = async (password, hash) => {
    try {
        const match = await bcrypt.compare(password, hash);
        return match;
    } catch (error) {
        throw new Error('Error al comparar las contraseñas');
    }
}

// Ejemplo de uso
// const hashedPassword = 'contraseña_encriptada_aquí'; // Contraseña encriptada almacenada en la base de datos
// comparePassword('mi_contraseña', hashedPassword).then((isMatch) => {
//     if (isMatch) {
//         console.log('La contraseña es correcta');
//     } else {
//         console.log('La contraseña es incorrecta');
//     }
// });