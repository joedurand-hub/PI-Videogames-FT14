const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {getGenres} = require('./src/controllers/getGenres')

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    getGenres();
    console.log('Corriendo server: puerto 3001'); // eslint-disable-line no-console
  });
});
