// express server
const express = require('express');

// connection to DB using sequelize
const sequelize = require('./config/connection');

// routes
const routes = require('./routes');

// define application 
const app = express();
const PORT = process.env.PORT || 3001;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Sync Sequelize models to the MySQL database and then start server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App started at http://localhost:${PORT}!`));
});