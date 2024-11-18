import request from 'supertest';
import { app, server } from '../src/index'; // Adjust the import based on your actual app export

afterAll((done) => {
  server.close(done); // Ensure the server is closed after tests
});

describe('GET /', () => {
  it('should respond with Hello, Node.js with TypeScript!', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, Node.js with TypeScript!');
  });
}); 