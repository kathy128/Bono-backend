const request = require('supertest');
const app = require('../app');

describe('GET /users', () => {
  it('Debe devolver el statusCode = 200', async () => {
    const response = await request(app).get('/users');
    expect(response.statusCode).toBe(200);
  });
});
