// sample seed data for ProductTag
const { ProductTag } = require('../models');

const sample_productTag = [
    {   // id = 1 tag = 1 (core)
        product_id: 1,
        tag_id: 1
    },
    {   // id = 2 tag = 2 (edge), 3 (node)
        product_id: 2,
        tag_id: 2
    },
    {
        product_id: 2,
        tag_id: 3
    },
    {   // id = 3 tag = 2 (edge), 3 (node)
        product_id: 3,
        tag_id: 2
    },
    {
        product_id: 3,
        tag_id: 3
    },
    {   // id = 4 tag = 2 (edge)
        product_id: 4,
        tag_id: 2
    },
    {   // id = 5 tag = 1 (core), 3 (node)
        product_id: 5,
        tag_id: 1
    },
    {
        product_id: 5,
        tag_id: 3
    },
    {   // id = 6 tag = 2 (edge), 3 (node)
        product_id: 6,
        tag_id: 2
    },
    {
        product_id: 6,
        tag_id: 3
    },
    {   // id = 7 tag = 1 (core)
        product_id: 7,
        tag_id: 1
    },
    {   // id = 8 tag = 1 (core), 2 (edge), 3 (node)
        product_id: 8,
        tag_id: 1
    },
    {
        product_id: 8,
        tag_id: 2
    },
    {
        product_id: 8,
        tag_id: 3
    },
    {   // id = 9 tag = 1 (core), 2 (edge), 3 (node)
        product_id: 9,
        tag_id: 1
    },
    {
        product_id: 9,
        tag_id: 2
    },
    {
        product_id: 9,
        tag_id: 3
    },
    {   // id = 10 tag = 1 (core), 2 (edge), 3 (node)
        product_id: 10,
        tag_id: 1
    },
    {
        product_id: 10,
        tag_id: 2
    },
    {
        product_id: 10,
        tag_id: 3
    }
];

// function to populate
const productTagSeeds = () => ProductTag.bulkCreate(sample_productTag);

// exports
module.exports = productTagSeeds;