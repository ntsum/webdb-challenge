const router = require('express').Router();

const knex = require('knex');

const knexConfig = {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
        filename: './data/lambda.sqlite3'
    }
}

const db = knex(knexConfig);

router.get('/', (req, res) => {
    db('projects')
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json(err)
    })
}); 


router.post('/', async (req, res) => {
    try {
        const project = await db('projects').insert(req.body)
        res.status(201).json(project)
    } catch (error) {
        res.status(500).json({ error: 'Cannot post' })
    }
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
        db('projects')
           .where({ id: id })
           .first()
           .then(projects => {
               db('actions')
                 .where({ project_id: id }).then(actions => {
                (projects.actions = actions);
                  return res.status(200).json(projects);
                });
           })
            .catch(err => {
                res.status(500).json({ Error: "Cannot get" })
            });
});

module.exports = router;