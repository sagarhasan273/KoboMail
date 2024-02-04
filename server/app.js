require('dotenv').config();
const express = require('express');
const app = express();
const router = require("./routes/router");
const cors = require("cors");

const port = 8844;

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
    console.log(`Server started port no: ${port}`);
})
