const express = require ("express");
const mongoose = require("mongoose");
const cors = require("cors");
const SignUp = require("./Signin");
require('dotenv').config();

let dbURI = process.env.MONGODB_URI;
console.log("Hey Server!!!!")
const app = express();
mongoose.connect(dbURI)
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () => {
      console.log(`Server is listening on Port 5000`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Enable CORS for all routes
let logged
// Define Mongoose schema for Login model
// Route to handle login
console.log("Hello go Down There")
app.post("/signup", async (req, res) => {
    try {
        console.log("Trying")
      const { username,email, password } = req.body;
      const newLogin = new SignUp({ username,email, password });
      await newLogin.save(); 
    //   res.json({ message: 'Login data saved successfully' });
    console.log("Saved")
    return res.status(200).json({ message: 'created successful' });

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  console.log("Credentials Checking !!!!!")
    app.post('/login', async (req, res) => {
      const { username, password } = req.body;
    
      try {
        // Check if the user exists
        const user = await SignUp.findOne({ username, password });
        if (!user) {
          console.log("No User Found Sorry")
          return res.status(401).json({ error: 'Invalid credentials' });
          
        }
        console.log(" User Found :-> )")
        logged=user.username;
        return res.status(200).json({ message: 'Login successful' });
      } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    });
app.get('/Create',(req,res)=>{
  console.log("hello")
  res.send({ username: logged });
})


