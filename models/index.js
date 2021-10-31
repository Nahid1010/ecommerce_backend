// create associations
// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Product belongs to Category
Product.belongsTo(Category, {
    foreignKey: 'category_id',
});

// Category has many Product models
Category.hasMany(Product, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE'
});

// Product belongs to many Tag models through ProductTag
Product.belongsToMany(Tag, {
    through: {
        model: ProductTag,
        unique: false
    },
    foreignKey: "product_id",
});

// Tag belongs to many Product through ProductTag
Tag.belongsToMany(Product, {
    through: {
        model: ProductTag,
        unique: false
    },
    foreignKey: "tag_id",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag
};