// src/models/Bono.js
const db = require("../config/db");

const Bono = {
  getAll: (callback) => {
    const query = "SELECT * FROM bonos";
    db.query(query, (err, results) => {
      callback(err, results);
    });
  },

  create: (data, callback) => {
    const query =
      "INSERT INTO bonos (name, subscription, total) VALUES (?, ?, ?)";
    db.query(
      query,
      [data.name, data.subscription, data.total],
      (err, results) => {
        callback(err, results);
      }
    );
  },
};

module.exports = Bono;
