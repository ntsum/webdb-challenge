exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("projects").insert([
    {
      name: "Sprint 12",
      description: "seeding and migrations!",
      completed: "false"
    },
    {
      name: "Sprint 13",
      description: "authentication!",
      completed: "false"
    },
    {
      name: "Sprint 14",
      description: "Testing!",
      completed: "false"
    }
  ]);
};
