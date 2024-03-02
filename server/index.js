const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getEmail } = require('./controller')

app.get("/api/compliment", getCompliment);
app.post("/api/sign", getEmail);

app.listen(4000, () => console.log("Server running on 4000"));
