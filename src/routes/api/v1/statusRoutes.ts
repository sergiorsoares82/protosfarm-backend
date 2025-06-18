import express from 'express';

const statusRoutes = express.Router();

statusRoutes.get('/', (req, res) => {
  res.status(200).json({});
});

export default statusRoutes;
