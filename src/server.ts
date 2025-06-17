import express from 'express';
import prisma from './infra/database';

const app = express();
const PORT = process.env.PORT || 3000;

async function checkDatabaseConnection() {
  try {
    await prisma.$connect();
    const databaseVersionResult = await prisma.$queryRaw<
      { server_version: string }[]
    >`SHOW server_version;`;
    console.log(databaseVersionResult);
    console.log('Database connection established successfully.');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  }
}

checkDatabaseConnection();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
