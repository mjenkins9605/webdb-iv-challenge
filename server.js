const express = require("express");
const server = express();
const db = require("./data/dbconfig");

server.use(express.json());

server.get("/", (req, res) => {
  res.send(
    "There are three kinds of people in this world, those who can count and those who can not!"
  );
});

server.get("/api/dishes", (req, res) => {
  db.getDishes()
    .then(dishes => {
        res.status(200).json(dishes);
     })
    .catch(err => {
      res.status(500).json({ 
          error: err,
          message: "The dishes information could not be retrieved." 
        });
    });
});

server.post("/api/dishes", (req, res) => {
    db.addDish()
      .insert(req.body)
      .then(dishes => {
        res.status(201).json({ message: "Successfully created dish." });
      })
      .catch(err => {
        res.status(500).json({
          error: err,
          message: "There was an error while saving the dish to the database."
        });
      });
  });

server.get('/api/dishes/:id', (req, res) => {
    db.getDish(req.params.id)
        .then(dish => {
            res.status(200).json(dish);
        })
        .catch(err => {
            res.status(500).json({
              error: err,
              message: "The dish information could not be retrieved."
            });
          });
})


server.get('/api/recipes', (req, res) => {
    db.getRecipes()
    .then(recipes => {
        res.status(200).json(recipes);
     })
    .catch(err => {
      res.status(500).json({ 
          error: err,
          message: "The recipes information could not be retrieved." 
        });
    });
});

module.exports = server;
