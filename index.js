import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db= new pg.Client(
    {
      user:"postgres",
      host:"localhost",
      database:"ponderverse",
      password:"AadhyaRaj@0!",
      port:"5432"
    }
  )

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let books=[];

const api="https://covers.openlibrary.org/b/isbn/0014345539-M.jpg"

db.connect();
// Route
app.get("/", async(req, res) => {
    try{const result = await db.query("select * from books order by id asc;");

    books=result.rows;
    console.log(books);
    res.render("index.ejs",{
        bookTitles:books,

    });
    // res.render("index.ejs", {
    //   listTitle: "Today's tasks",    //   listItems: items,
    // });
}
    catch(err){
      console.log(err);
    }
  });

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  