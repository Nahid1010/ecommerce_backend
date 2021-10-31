// use sequelize to populate DB
const seedCategory = require('./categorySeeds');
const seedProduct = require('./productSeeds');
const seedTag = require('./tagSeeds');
const seedProductTag = require('./productTagSeeds');

// DB connection
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n+ DB Sync\'d...\n');
  
  await seedCategory();
  console.log('+ Category table populated...\n');

  await seedProduct();
  console.log('+ Product table populated...\n');

  await seedTag();
  console.log('+ Tags table populated...\n');

  await seedProductTag();
  console.log('+ ProductTag table populated ...\n');

  process.exit(0);
};

seedAll();