import express from 'express';
import statusRoutes from './statusRoutes';

const apiV1Router = express.Router();

apiV1Router.use('/status', statusRoutes);

export default apiV1Router;
