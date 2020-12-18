const router = require("express").Router();
const Ingredients = require("../ingredients/ingredientsModel");
const Recipes = require("./recipeModel");

router.get("/", (req, res) => {
  Recipes.find()
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});
router.get("/:id", (req, res) => {
  Recipes.findById(req.params.id)
    .then((recipe) => {
      Ingredients.findByRecipeId(recipe.id)
        .then((ingred) => {
          res.status(200).json({ ...recipe, ingredients: ingred });
        })
        .catch((err) => res.status(500).json({ message: err.message }));
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});

router.post("/user/:id", (req, res) => {
  const newRecipe = { ...req.body, user_id: req.params.id };
  Recipes.insert(newRecipe)
    .then((recipes) => {
      res.status(201).json(recipes);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});
router.put("/:id", (req, res) => {
  Recipes.update(req.params.id, req.body)
    .then((recipes) => {
      res.status(201).json(recipes);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});
router.delete("/:id", (req, res) => {
  Recipes.remove(req.params.id)
    .then(() => {
      Recipes.findByUserId(req.user.id)
        .then((recipes) => {
          res.status(200).json(recipes);
        })
        .catch((err) => {
          res.status(500).json({ message: err.message });
        });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});
router.post("/:id/ingredients", (req, res) => {
  const newIngredient = { ...req.body, recipe_id: req.params.id };
  Ingredients.insert(newIngredient)
    .then((ingred) => {
      res.status(201).json(ingred);
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});

module.exports = router;
