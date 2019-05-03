exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("actions").insert([
    {
      description: "migrations",
      notes: "seeds",
      project_id: 2,
      completed: "false"
    },
    {
      description: "auth",
      notes: "must auth",
      project_id: 3,
      completed: "false"
    },
    {
      description: "testing 123",
      notes: "testing 321",
      project_id: 4,
      completed: "false"
    }
  ]);
};
