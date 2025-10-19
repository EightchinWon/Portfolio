const express = require('express');
const user = require('../models/user');

const router = express.Router();


router.get('/', async (_req, res) => {
  const list = await user.find().sort({ created: -1 });
  res.json(list);
});


router.get('/:id', async (req, res) => {
  try {
    const doc = await user.findById(req.params.id);
    if (!doc) return res.status(404).json({ error: 'User not found' });
    res.json(doc);
  } catch (e) { res.status(400).json({ error: e.message }); }
});

router.post('/', async (req, res) => {
  try {
    const doc = await user.create(req.body);
    res.status(201).json(doc);
  } catch (e) { res.status(400).json({ error: e.message }); }
});


router.put('/:id', async (req, res) => {
  try {
    req.body.updated = new Date();
    const doc = await user.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!doc) return res.status(404).json({ error: 'User not found' });
    res.json(doc);
  } catch (e) { res.status(400).json({ error: e.message }); }
});


router.delete('/:id', async (req, res) => {
  try {
    const r = await user.findByIdAndDelete(req.params.id);
    if (!r) return res.status(404).json({ error: 'User not found' });
    res.json({ ok: true });
  } catch (e) { res.status(400).json({ error: e.message }); }
});

router.delete('/', async (_req, res) => {
  const r = await user.deleteMany({});
  res.json({ ok: true, deleted: r.deletedCount });
});

module.exports = router;