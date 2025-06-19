import express from 'express';
import statusController from '../../../controllers/api/v1/status';

const statusRoutes = express.Router();

statusRoutes.get('/', statusController.getStatus);

export default statusRoutes;
