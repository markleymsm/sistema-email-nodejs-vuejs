const model = require("../models/campaign");
const GenericController = require("./generic");

const CrudService = require("../services/crud");
const service = new CrudService(model);

module.exports = function() {
  const controller = new GenericController(model);

  return controller;
};
