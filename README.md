# Secret-Family-Recipes

Api to store recipes with ingredients and instructions

## Base URL: https://family-recipes21.herokuapp.com/

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

### Token must be passed in the header under Authorization for Protected Endpoints

---

## Endpoint Details

---

### POST /api/users/register

#### Accepts JSON:

```
  {
      "username": "test3",       //required
      "password": "test",        //required
      "email": "test@test.com"
  }
```

#### Returns:

```
  {
      "message": "Registration Successful",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjA4MzQzMzI3LCJleHAiOjE2MDg0Mjk3Mjd9.5qVrQoL2gzbEBCc1ofLEbbvI99Nmv_oayKyjRantkqg",
      "user": {
          "id": 3,
          "username": "test3",
          "email": "test@test.com"
      }
  }

```

---

### POST /api/users/login

#### Accepts JSON:

```
  {
      "username": "test3",       //required
      "password": "test"        //required
  }
```

#### Returns:

```
  {
      "message": "Registration Successful",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjA4MzQzMzI3LCJleHAiOjE2MDg0Mjk3Mjd9.5qVrQoL2gzbEBCc1ofLEbbvI99Nmv_oayKyjRantkqg",
      "user": {
          "id": 3,
          "username": "test3",
          "email": "test@test.com"
      }
  }

```

---

### POST /api/recipes/user/:id

#### Valid user id is required

#### Accepts JSON:

```
  {
      "title": "test",      //required
      "category": "test",   //required
      "source": "test",
      "image": "url"
  }
```

#### Returns:

```
  [
      {
          "id": 2,
          "title": "test",
          "source": null,
          "category": "test",
          "image": null,
          "user_id": 1
      },
      {
          "id": 3,
          "title": "test",
          "source": "test",
          "category": "test",
          "image": "url",
          "user_id": 1
      }
  ]

```

---

### GET /api/recipes/:id

#### Valid recipe id required

#### Returns:

```
  {
      "message": "Registration Successful",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjA4MzQzMzI3LCJleHAiOjE2MDg0Mjk3Mjd9.5qVrQoL2gzbEBCc1ofLEbbvI99Nmv_oayKyjRantkqg",
      "user": {
          "id": 3,
          "username": "test3",
          "email": "test@test.com"
      }
  }

```

---

### PUT /api/recipes/:id

#### Valid recipe id required

#### Accepts JSON:

```
  {
      "title": "test",
      "category": "test",
      "source": "test",
      "image": "url"
  }
```

#### Returns:

```
  [
      {
          "id": 3,
          "title": "test",
          "source": "test",
          "category": "test",
          "image": "url",
          "user_id": 1
      },
      {
          "id": 2,
          "title": "testing",
          "source": null,
          "category": "test",
          "image": null,
          "user_id": 1
      }
  ]

```

---

### DELETE /api/recipes/:id

#### Valid recipe id required

#### Returns:

```
  [
      {
          "id": 3,
          "title": "test",
          "source": "test",
          "category": "test",
          "image": "url",
          "user_id": 1
      },
      {
          "id": 2,
          "title": "testing",
          "source": null,
          "category": "test",
          "image": null,
          "user_id": 1
      }
  ]

```

---

### GET /api/recipes/:id

#### Valid recipe id required

#### Returns:

```
  {
      "id": 2,
      "title": "testing",
      "source": null,
      "category": "test",
      "image": null,
      "user_id": 1,
      "ingredients": [
          {
              "id": 1,
              "name": "eggssss",
              "recipe_id": 2
          }
      ],
      "instructions": [
          {
              "id": 2,
              "step": 2,
              "details": "add to mix",
              "recipe_id": 2
          }
      ]
  }

```

---

### POST /api/recipes/:id/ingredients

#### Valid recipe id required

#### Accepts JSON:

```
  {
      "name": "eggs"               //required
  }
```

#### Returns:

```
[
    {
        "id": 1,
        "name": "eggssss",
        "recipe_id": 2
    },
    {
        "id": 6,
        "name": "eggs",
        "recipe_id": 2
    }
]

```

---

### PUT /api/ingredients/:id

#### Valid ingredient id required

#### Accepts JSON:

```
  {
      "name": "eggsssss"
  }
```

#### Returns:

```
[
    {
        "id": 1,
        "name": "eggssss",
        "recipe_id": 2
    },
    {
        "id": 6,
        "name": "eggs",
        "recipe_id": 2
    }
]

```

---

### DELETE /api/ingredients/:id

#### Valid ingredient id required

#### Returns:

```
[
    {
        "id": 1,
        "name": "eggssss",
        "recipe_id": 2
    },
    {
        "id": 6,
        "name": "eggs",
        "recipe_id": 2
    }
]

```

---

### GET /api/ingredients/:id

#### Valid ingredient id required

#### Returns:

```

  {
      "id": 1,
      "name": "eggssss",
      "recipe_id": 2
  }


```

---

### POST /api/recipes/:id/instructions

#### Valid recipe id required

#### Accepts JSON:

```
  {
      "step": 2,              //required
      "details": "add to mix" //required
  }
```

#### Returns:

```
[
    {
        "id": 2,
        "step": 2,
        "details": "add to mix",
        "recipe_id": 2
    },
    {
        "id": 3,
        "step": 1,
        "details": "add to mix",
        "recipe_id": 2
    },
]

```

---

### PUT /api/instructions/:id

#### Valid instruction id required

#### Accepts JSON:

```
  {
    "step": 2,
    "details": "add to mix"
  }
```

#### Returns:

```
[
    {
        "id": 4,
        "step": 2,
        "details": "add to mix",
        "recipe_id": 2
    },
    {
        "id": 3,
        "step": 1,
        "details": "add to mixing",
        "recipe_id": 2
    }
]

```

---

### DELETE /api/instructions/:id

#### Valid instruction id required

#### Returns:

```
[
    {
        "id": 4,
        "step": 2,
        "details": "add to mix",
        "recipe_id": 2
    },
    {
        "id": 3,
        "step": 1,
        "details": "add to mixing",
        "recipe_id": 2
    }
]

```

---

### GET /api/instructions/:id

#### Valid instruction id required

#### Accepts JSON:

#### Returns:

```
  {
      "id": 4,
      "step": 2,
      "details": "add to mix",
      "recipe_id": 2
  }

```

---
