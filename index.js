import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db= new pg.Client(
    {
      user:"postgres",
      host:"localhost",
      database:"permalist",
      password:"AadhyaRaj@0!",
      port:"5432"
    }
  )

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

db.connect();
// Route
app.get("/", (req, res) => {
    res.render("index.ejs"); // Send a response to the client
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  