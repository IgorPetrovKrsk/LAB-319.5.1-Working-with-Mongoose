import express from 'express';
import truckCTRL from '../controllers/truckController.mjs'

const router = express.Router();

router.get('/',truckCTRL.getAllTrucks);

export default router