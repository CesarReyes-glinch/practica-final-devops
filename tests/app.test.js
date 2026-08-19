const request = require('supertest');
const app = require('../index');

describe('Prueba de la aplicación Hola Mundo', () => {
    test('Debe responder ¡Hola Mundo! en la ruta principal', async () => {
        const response = await request(app).get('/');

        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('¡Hola Mundo!');
    });
});