const router = require("express").Router();

const knex = require("knex");

const knexConfig = {
  client: "sqlite3",
  useNullAsDefault: true,
  connection: {
    filename: "./data/lambda.sqlite3"
  }
};

const db = knex(knexConfig);

router.get("/", (req, res) => {
  db("actions")
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/", async (req, res) => {
  try {
    const action = await db("actions").insert(req.body);
    res.status(201).json(action);
  } catch (error) {
    res.status(500).json({ error: "Cannot post" });
  }
});

module.exports = router;
