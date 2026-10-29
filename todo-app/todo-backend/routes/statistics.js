const express = require('express');
const redis = require('../redis')
const router = express.Router();

/* GET statistics. */
router.get('/', async (_, res) => {
  const added = await redis.get('added_todos')

  res.send({
    added_todos: Number(added) || 0
  });
});

module.exports = router;