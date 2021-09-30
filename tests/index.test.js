const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('Deberia decir que este es el main', async () => {
    const response = await request(app).get('/');
    expect(response.body.data).toBe('Este es mi main (index)');
  });
});