describe('GET /api/v1/notfound', () => {
  it('should return status 404 and a valid error response', async () => {
    const response = await fetch('http://localhost:3000/api/v1/notfound');
    const data = await response.json();

    expect(response.status).toBe(404);
    expect(data).toEqual({
      error: 'Route not found in application',
    });
  });
});
