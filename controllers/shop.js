const Task = require("../models/Item");

const getAllItems = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json(error.errors.name.properties.message);
  }
};

const createItem = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json(error.errors.name.properties.message);
  }
};

const getItem = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task=await Task.findOne({_id: taskID});
    if(!task) {
      return res.status(404).json({msg: `No task wiht id : ${taskID}`})
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json(error.errors.name.properties.message);
  }
};

const UpdateItem = async (req, res) => {
    try {
    const { id: taskID } = req.params;
      const task=await Task.findOneAndUpdate({_id: taskID},req.body,{
        new: true,
        runValidators:true,
    });
    if(!task) {
      return res.status(404).json({msg: `No task wiht id : ${taskID}`})
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json(error.errors.name.properties.message);
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task=await Task.findOneAndDelete({_id: taskID});
    if(!task) {
      return res.status(404).json({msg: `No task wiht id : ${taskID}`})
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json(error.errors.name.properties.message);
  }
};

module.exports = {
  getAllItems,
  createItem,
  getItem,
  UpdateItem,
  deleteItem,
};
