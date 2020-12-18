const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const userRouter = require("./users/userRouter");
const recipeRouter = require("./recipes/recipeRouter");
const ingredientsRouter = require("./ingredients/ingredientsRouter");
const instructionsRouter = require("./instructions/instructionsRouter");

const { validateToken } = require("./middleware");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/users", userRouter);
server.use("/api/recipes", validateToken, recipeRouter);
server.use("/api/ingredients", validateToken, ingredientsRouter);
server.use("/api/instructions", validateToken, instructionsRouter);

module.exports = server;
