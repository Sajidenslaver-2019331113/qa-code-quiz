const request = require('supertest');
const app = require('../mockedAPI/index.js');

describe('API Endpoints', () => {
  it('should return a list of users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty('username');
    expect(res.body[0].username).toBe('Sajid_Hossain');
  });

  it('should return 404 for non-existent user', async () => {
    const res = await request(app).get('/user/nonexistent');
    expect(res.statusCode).toEqual(404);
  });
});