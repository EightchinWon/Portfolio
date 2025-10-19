const express = require("express");
const router = express.Router();
const contact = require('../models/Contact');




router.get('/', async (_req, res) => {
  const list = await contact.find().sort({ createdAt: -1 });
  res.json(list);
});

router.get('/:id', async (req, res) => {
  try {
    const doc = await contact.findById(req.params.id);
    if (!doc) return res.status(404).json({ error: 'Contact not found' });
    res.json(doc);
  } catch (e) { res.status(400).json({ error: e.message }); }
});


router.post('/', async (req, res) => {
  try {
    const doc = await contact.create(req.body);
    res.status(201).json(doc);
  } catch (e) { res.status(400).json({ error: e.message }); }
});

router.put('/:id', async (req, res) => {
  try {
    const doc = await contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!doc) return res.status(404).json({ error: 'Contact not found' });
    res.json(doc);
  } catch (e) { res.status(400).json({ error: e.message }); }
});


router.delete('/:id', async (req, res) => {
  try {
    const r = await contact.findByIdAndDelete(req.params.id);
    if (!r) return res.status(404).json({ error: 'Contact not found' });
    res.json({ ok: true });
  } catch (e) { res.status(400).json({ error: e.message }); }
});


router.delete('/', async (_req, res) => {
  const r = await contact.deleteMany({});
  res.json({ ok: true, deleted: r.deletedCount });
});

module.exports = router;