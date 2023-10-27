const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection'); // import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001; // Removed "|| 3001" to fix EADDRINUSE server port error

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
}); // sync sequelize models to the database, then turn on the server

// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });
