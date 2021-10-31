// imports
const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// Here endpoint is /api/products

// find all products, include corresponding category, tag names
router.get('/', async (req, res) => {
  try {
    const productData = await Product.findAll({
      include: [{ model: Category, attributes: ['category_name']},
        { model: Tag,          
          through: { model: ProductTag, attributes: [] },
          attributes: ['tag_name'] 
        }
      ]
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one product, include corresponding Category and Tag
router.get('/:id', async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [{ model: Category, attributes: ['category_name']},
        { model: Tag,          
          through: { model: ProductTag, attributes: [] },
          attributes: ['tag_name'] 
        }
      ]
    });

    if (!productData) {
      res.status(404).json({ message: 'No product found with this id.' });
      return;
    }
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new product
router.post('/', (req, res) => {
  Product.create(req.body)
    .then((product) => {
      // create entries in ProductTag table
      if (req.body.tag_ids.length > 0) {
          const productTags = req.body.tag_ids.map((tag_id) => {
            return {
                product_id: product.id,
                tag_id
            };
          });
          console.log(productTags);
          // create relationship records between product_id and tag_id in ProductTag
          return ProductTag.bulkCreate(productTags);
      }
      // if no tags, show created product
      res.status(200).json(product);
    })
    .then((productTags) => res.status(200).json(productTags))
    .catch((err) => {
      res.status(400).json(err);
    });
});


// update a product by id
router.put('/:id', (req, res) => {
  // update product data
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      // find all associated tags from ProductTag
      return ProductTag.findAll({ where: { product_id: req.params.id } });
    })
    .then((productTags) => {
      // get list of current tag_ids
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      // create filtered list of new tag_ids
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });
      // figure out which ones to remove
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      // run both actions
      return Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    })
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

// delete a product by id
router.delete('/:id', async (req, res) => {
  try {
    const productData = await Product.destroy({
      where: { id: req.params.id }
    });
    if (!productData) {
      res.status(404).json({ message: 'No product found with this id.' });
      return;
    }
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// exports
module.exports = router;