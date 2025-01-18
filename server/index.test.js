const request = require('supertest');
const express = require('express');
const app = require('./index'); // We'll need to modify index.js to export the app

describe('Express App', () => {
  it('GET /api/hello should return hello message', async () => {
    const response = await request(app)
      .get('/api/hello')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toEqual({
      message: 'Hello from server!'
    });
  });

  it('GET /nonexistent should return 404', async () => {
    await request(app)
      .get('/nonexistent')
      .expect(404);
  });
}); 