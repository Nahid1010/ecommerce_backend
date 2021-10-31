// sample seed data for Tag
const { Tag } = require('../models');

const sample_tags = [
    {
        tag_name: 'core'
    },
    {
        tag_name: 'edge'
    },
    {
        tag_name: 'node'
    }
];

// function to populate
const tagSeeds = () => Tag.bulkCreate(sample_tags);

// export
module.exports = tagSeeds;