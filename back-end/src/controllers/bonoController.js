// src/controllers/bonoController.js
const Bono = require("../models/Bono");

exports.getAllBonos = (req, res) => {
  Bono.getAll((err, bonos) => {
    if (err) {
      res.status(500).json({ message: "Error fetching data" });
    } else {
      res.status(200).json(bonos);
    }
  });
};

exports.createBono = (req, res) => {
  const newBono = {
    name: req.body.name,
    subscription: req.body.subscription,
    total: req.body.total,
  };
  Bono.create(newBono, (err, result) => {
    if (err) {
      res.status(500).json({ message: "Error creating bono" });
    } else {
      res.status(201).json({ id: result.insertId, ...newBono });
    }
  });
};
