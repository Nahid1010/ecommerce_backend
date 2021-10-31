// sample seed data for Product
const { Product } = require('../models');

const sample_products = [
    {   // id = 1 tag = 1 (core)
        product_name: 'MX960',
        price: 360000.00,
        stock: 10,
        category_id: 1
    },
    {   // id = 2 tag = 2 (edge), 3 (node)
        product_name: 'MX480',
        price: 240000.00,
        stock: 20,
        category_id: 1
    },
    {   // id = 3 tag = 2 (edge), 3 (node)
        product_name: 'EX4200',
        price: 12000.00,
        stock: 25,
        category_id: 2
    },
    {   // id = 4 tag = 2 (edge)
        product_name: 'EX3200',
        price: 6000.00,
        stock: 18,
        category_id: 2
    },
    {   // id = 5 tag = 1 (core), 3 (node)
        product_name: 'PA3200',
        price: 50000.00,
        stock: 5,
        category_id: 3
    },
    {   // id = 6 tag = 2 (edge), 3 (node)
        product_name: 'PA2200',
        price: 20000.00,
        stock: 7,
        category_id: 3
    },
    {   // id = 7 tag = 1 (core)
        product_name: 'F5 BIG-IP',
        price: 12000.00,
        stock: 12,
        category_id: 4
    },
    {   // id = 8 tag = 1 (core), 2 (edge), 3 (node)
        product_name: 'SFP-10G-LR',
        price: 340.00,
        stock: 120,
        category_id: 5
    },
    {   // id = 9 tag = 1 (core), 2 (edge), 3 (node)
        product_name: 'SFP-10G-SR',
        price: 240.00,
        stock: 100,
        category_id: 5
    },
    {   // id = 10 tag = 1 (core), 2 (edge), 3 (node)
        product_name: 'GLC-T',
        price: 40.00,
        stock: 60,
        category_id: 5
    }
];

// function to populate
const productSeeds = () => Product.bulkCreate(sample_products);

// export
module.exports = productSeeds;