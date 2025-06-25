import type { Request, Response } from 'express';
import express from 'express';
import router from './routes/index.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

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
app.use((err: Error, req: Request, res: Response) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
