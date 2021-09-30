const request = require('supertest');
const app = require('../app');

describe('GET /users', () => {
  it('Should response hello world', async () => {
    const response = await request(app).get('/users');
    expect(response.statusCode).toBe(500);
  });
});
