const Item = require("../models/Item");

const getAllItems = async (req, res) => {
  try {
    const items = await Item.find({});
    res.status(200).json({ items });
  } catch (error) {
    res.status(500).json(error.errors.name.properties.message);
  }
};

const createItem = async (req, res) => {
  try {
    const item = await Item.create(req.body);
    res.status(201).json({ item });
  } catch (error) {
    res.status(500).json(error.errors.name.properties.message);
  }
};

const getItem = async (req, res) => {
  try {
    const { id: itemID } = req.params;
    const item = await Item.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task wiht id : ${itemID}` });
    }
    res.status(200).json({ item });
  } catch (error) {
    res.status(500).json(error.errors.name.properties.message);
  }
};

const UpdateItem = async (req, res) => {
  try {
    const { id: itemID } = req.params;
    const item = await Task.findOneAndUpdate({ _id: itemID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!item) {
      return res.status(404).json({ msg: `No task wiht id : ${itemID}` });
    }
    res.status(200).json({ item });
  } catch (error) {
    res.status(500).json(error.errors.name.properties.message);
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id: itemID } = req.params;
    const task = await Task.findOneAndDelete({ _id: itemID });
    if (!item) {
      return res.status(404).json({ msg: `No task wiht id : ${itemID}` });
    }
    res.status(200).json({ item });
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
