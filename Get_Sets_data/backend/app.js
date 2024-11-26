const express = require('express');
require('express-async-errors');

const bodyParser = require('body-parser');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
// app.use(cors);


// routes are here
const userRoutes = require("./routes/userRoutes.js");

app.use("/users", userRoutes);

// routes end

app.get("/test", (req, res) => {
    res.status(200).send({'success': 'success'});
})

// globally checker for error handling, so we dont need catch for any async func in backend
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send("something is wrong...\n detected in global error handler");
})
  
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});