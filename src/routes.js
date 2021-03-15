
const express = require("express");
const routes = express.Router();
const controllers = require("./controllers");

/**
 * From here all routes need a token
 */

 routes.get("/tasks", controllers.TaskController.index);
 routes.post("/tasks", controllers.TaskController.store);
 routes.put("/tasks/:task_id/toggle-status", controllers.TaskController.done);
 routes.put("/tasks/:task_id", controllers.TaskController.update);
 routes.delete("/tasks/:task_id", controllers.TaskController.destroy);

module.exports = routes;