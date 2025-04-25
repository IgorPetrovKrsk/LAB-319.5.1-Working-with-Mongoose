import express from 'express';
import truckCTRL from '../controllers/truckController.mjs';

const router = express.Router();

router.get('/',truckCTRL.getAllTrucks);
router.post('/',truckCTRL.postNewTruck);

export default router