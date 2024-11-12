const express = require('express');
const { Plant } = require('../../models/plant');
const router = express.Router();

// find all plants
router.get('/', async (req, res, next) => {
  try {
    const plants = await Plant.find({});
    res.send(plants);
  } catch (err) {
    console.error(`Error while getting plants: ${err}`);
    next(err);
  }
});

// find plant by id
router.get('/:plantId', async (req, res, next) => {
  try {
    const plant = Plant.findOne({_id: req.params.plantId});
    res.send(plant);
  } catch (err) {
    console.error(`Error while getting plant: ${err}`);
    next(err);
  }
});

// create plant
router.post('/:gardenId', async (req, res, next) => {
  try {
    const payload = {
      ...req.body,
      gardenId: req.params.gardenId
    }

    const plant = new Plant(payload);
    await plant.save();

    res.send({
      message: 'Plant created successfully',
      id: plant._id
    });
  } catch (err) {
    console.error(`Error while creating plant: ${err}`);
    next(err);
  }
});

// update plant
router.patch('/:plantId', async (req, res, next) => {
  try {
    const plant = await Plant.findOne({_id: req.params.plantId});
    plant.set(req.body);

    await plant.save();

    res.send({
      message: 'Plant updated successfully',
      id: plant._id
    });
  } catch (err) {
    console.error(`Error while updating plant: ${err}`);
    next(err);
  }
});

// delete plant
router.delete('/:plantId', async (req, res, next) => {
  try {
    await Plant.deleteOne({_id: req.params.plantId});

    res.send({
      message: 'Plant deleted successfully',
      id: req.params.plantId
    });
  } catch (err) {
    console.error(`Error while deleting plant: ${err}`);
    next(err);
  }
});

module.exports = router;