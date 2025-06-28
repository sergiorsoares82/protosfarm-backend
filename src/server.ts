import cors from 'cors';
import type { NextFunction, Request, Response } from 'express';
import express from 'express';
import type { ApiError } from './infra/error.js';
import router from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Ensure DB connection works before continuing
console.log('✅ Connected to the database.');

app.use(cors());

app.use(router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

// Global catch-all 404 handler for all other routes
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Route not found in application' });
});

// Global error handler (optional, for unexpected errors)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log('Middleware error handler triggered');
  console.error(err.stack);

  const statusCode = (err as ApiError).status_code || 500;
  res.status(statusCode).json({ err });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
