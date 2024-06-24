const express = require("express");
const app = express();
app.use(express.static(`${__dirname}/../frontend-next/dist`));

app.listen(80);
