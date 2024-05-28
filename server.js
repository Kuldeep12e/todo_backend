const express = require('express');
const app = express();
const router = require('./router/router');

const PORT = 4000;

app.use(express.json());

// Use the router for the v1 API
app.use('/v1', router);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
