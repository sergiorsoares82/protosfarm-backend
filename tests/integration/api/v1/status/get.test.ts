describe('GET /api/v1/status', () => {
  it('should return status 200 and a valid response', async () => {
    const response = await fetch('http:localhost:3000/api/v1/status');
    expect(response.status).toBe(200);
    const data = await response.json();

    expect(data).toMatchObject({
      updated_at: expect.any(String),
      databaseVersion: '16.0',
      databaseOpenedConnections: 1,
      timestamp: expect.any(String),
    });
  });
});
