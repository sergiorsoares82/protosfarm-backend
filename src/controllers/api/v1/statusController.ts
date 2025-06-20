import { Request, Response } from 'express';
import prisma from '../../../infra/database.js';

const getStatus = async (req: Request, res: Response) => {
  const updatedAt = new Date();

  const databaseVersionResult = await prisma.$queryRaw<
    { server_version: string }[]
  >`SHOW server_version;`;

  const databaseOpenedConnections = await prisma.$queryRaw<
    { count: number }[]
  >`SELECT count(*) FROM pg_stat_activity WHERE state = 'active';`;

  res.status(200).json({
    updated_at: updatedAt.toISOString(),
    databaseVersion: databaseVersionResult[0]?.server_version || 'unknown',
    databaseOpenedConnections:
      parseInt(databaseOpenedConnections[0]?.count.toString()) || 0,
    timestamp: new Date().toISOString(),
  });
};

const statusController = {
  getStatus,
};

export default statusController;
