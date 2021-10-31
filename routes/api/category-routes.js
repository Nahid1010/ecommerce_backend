// imports
const router = require('express').Router();
const { Category, Product } = require('../../models');

// Here endpoint is /api/categories

// find all categories, include corresponding Products
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
        include: [{ model: Product,
            attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
        }]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one category by id, include corresponding Product
router.get('/:id', async (req, res) => { 
  try {
    const categoryData = await Category.findByPk(req.params.id, {
        include: [{ model: Product,
            attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
        }] 
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id.' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// update a category
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id
      },
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id.' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a category
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: { id: req.params.id }
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id.' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;