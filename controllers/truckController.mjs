import Trucks from '../models/truckSchema.mjs';

async function getAllTrucks(req,res){
    const allTrucks = await Trucks.find({});
    res.json(allTrucks);
}

async function postNewTruck(req,res){
    const newTruck = await Trucks.create(req.body);
    res.json(newTruck);
}

export default {getAllTrucks,postNewTruck}

