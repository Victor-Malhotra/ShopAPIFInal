const express = require("express");
const router = express.Router();

const {
  getAllItems,
  createItem,
  getItem,
  UpdateItem,
  deleteItem,
} = require("../controllers/shop");

router.route("/").get(getAllItems).post(createItem);
router.route('/:id').get(getItem).patch(UpdateItem).delete(deleteItem);

module.exports = router;
