import express from 'express';
import statusController from '../../../controllers/api/v1/status.js';

const statusRoutes = express.Router();

statusRoutes.get('/', statusController.getStatus);

export default statusRoutes;
