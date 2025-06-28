import { Request, Response } from 'express';
import queries from '../../../infra/queries.js';

const getStatus = async (req: Request, res: Response) => {
  const updatedAt = new Date();

  const databaseVersionResult = await queries.safeQueryRaw<
    { server_version: string }[]
  >`SHOW server_version;`;

  const databaseOpenedConnections = await queries.safeQueryRaw<
    { count: number }[]
  >`SELECT count(*) FROM pg_stat_activity WHERE state = 'active';`;

  const databaseMaxConnections = await queries.safeQueryRaw<
    { max_connections: string }[]
  >`SHOW max_connections;`;

  console.log(databaseMaxConnections);

  res.status(200).json({
    updated_at: updatedAt.toISOString(),
    dependencies: {
      database: {
        version: databaseVersionResult[0]?.server_version || 'unknown',
        opened_connections:
          parseInt(databaseOpenedConnections[0]?.count.toString()) || 0,
        max_connections: databaseMaxConnections[0].max_connections || 0,
      },
    },
  });
};

const statusController = {
  getStatus,
};

export default statusController;
