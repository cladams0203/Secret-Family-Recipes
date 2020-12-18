# Secret-Family-Recipes

Api to store recipes with ingredients and instructions

## Base URL:

---

## Endpoint Summary

---

| Type |           Endpoint            |                   Description                    | Protected |
| :--: | :---------------------------: | :----------------------------------------------: | :-------: |
| POST |      /api/users/register      |               Register a new user                |    No     |
| POST |       /api/users/login        |             Login for existing user              |    No     |
| POST |     /api/recipes/user/:id     |         Add a new user Recipe by User id         |    Yes    |
| GET  |     /api/recipes/user/:id     |         Get all User Recipes by User id          |    Yes    |
| PUT  |       /api/recipes/:id        |            Update Recipe by Recipe id            |    Yes    |
| DEL  |       /api/recipes/:id        |           Delete a Recipe by Recipe id           |    Yes    |
| GET  |       /api/recipes/:id        |            Get a Recipe by Recipe id             |    Yes    |
| POST | /api/recipes/:id/ingredients  |   Add and ingredient to a Recipe by Recipe id    |    Yes    |
| PUT  |     /api/ingredients/:id      |  Update an existing Ingredient by Ingredient id  |    Yes    |
| DEL  |     /api/ingredients/:id      |  Remove an existing Ingredient by Ingredient id  |    Yes    |
| GET  |     /api/ingredients/:id      |        Get an Ingredient by Ingredient id        |    Yes    |
| POST | /api/recipes/:id/instructions |   Add an Instruction to a Recipe by Recipe id    |    Yes    |
| PUT  |     /api/instructions/:id     |  Update existing Instruction by Instruction id   |    Yes    |
| DEL  |     /api/instructions/:id     | Remove an existing Instruction by Instruction id |    Yes    |
| GET  |     /api/instructions/:id     |  Get an existing INstruction by Instruction id   |    Yes    |
