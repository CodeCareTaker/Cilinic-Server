const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  createNewsItem,
  getNewsItem,
  updateNewsItem,
  deleteNewsItem
} = require("../handlers/newsItems");

router.route("/").post(createNewsItem)
router
  .route("/:newsitem_id")
  .get(getNewsItem)
  .put(updateNewsItem)
  .delete(deleteNewsItem);

module.exports = router;