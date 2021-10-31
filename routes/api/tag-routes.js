// imports
const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// Here endpoint is /api/tags

// find all tags, include corresponding products 
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
        include: [{ model: Product,
            through: { model: ProductTag, attributes: [] }
        }]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one tag, include corresponding products
router.get('/:id', async (req, res) => { 
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product,
        through: { model: ProductTag, attributes: [] }
    }]
    });

    if (!tagData) {
      res.status(404).json({ message: 'No Tag found with this id.' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// update a tag
router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id
      },
    });
    if (!tagData) {
      res.status(404).json({ message: 'No Tag found with this id.' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a Tag
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: { id: req.params.id }
    });
    if (!tagData) {
      res.status(404).json({ message: 'No Tag found with this id.' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;