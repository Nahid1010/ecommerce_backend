// sample seed data for Category
const { Category } = require('../models');

const sample_categories = [
    {
        category_name: 'router'
    },
    {
        category_name: 'switch'
    },
    {
        category_name: 'firewall'
    },
    {
        category_name: 'loadbalancer'
    },
    {
        category_name: 'optic'
    }
];

// function to populate
const categorySeeds = () => Category.bulkCreate(sample_categories);

// export
module.exports = categorySeeds;