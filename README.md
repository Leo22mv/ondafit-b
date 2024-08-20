# Ondafit Emprendimiento (Backend)

## Desarrollo

Proyecto hecho con Node.js, diseñado y desarrollado por Leo Martinez.

## Ejecución

Para ejecutar el proyecto se debe usar el comando `npm run start` desde una terminal abierta en la carpeta raíz del proyecto.

## Endpoints

### Autenticación

Registro de usuario: `POST /auth/register`; Campos requeridos: name, email; Campos opcionales: surname, password, phone
Inicio de sesión: `POST /auth/login`; Campos requeridos: email, password

### Usuarios

Obtener usuarios: `GET /user`
Eliminación de usuarios: `DELETE /user/delete/:id`