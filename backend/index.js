const express = require("express");
const env = require("./config/envConfig");
const connect = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const app = express();


//database connect
connect();

// add middleware
app.use(express.json());

app.get("/", (req, res)=>{
    res.json({msg: 'Welcome!'});
});

//user routes
app.use('/api',userRoutes);

const port = env.PORT || 7000;

app.listen(port, () => {
    console.log(`Your server is running at port number: ${port}`);
  });