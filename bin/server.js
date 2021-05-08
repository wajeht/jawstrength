// express
const app = require('../app.js');

// config
const config = require('../config/config.js');
const PORT = config.server.port;

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
