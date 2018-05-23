const express = require("express")
const router = express.Router({ mergeParams: true });

const {
  createRecipe,
  getRecipe,
  updateRecipe,
  deleteRecipe
} = require("../handlers/recipes");

router.route("/").post(createRecipe);
router
  .route("/:recipe_id")
  .get(getRecipe)
  .put(updateRecipe)
  .delete(deleteRecipe);

module.exports = router;