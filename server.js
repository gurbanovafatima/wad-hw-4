const express = require("express");
const path = require("path");
const db = require('./config/db_config');

app = express();

app.use(express.static(__dirname + '/frontend/public'));
app.set('views', path.join(__dirname, './frontend/views'));
app.set('view engine', 'ejs');


// GET all posts

app.get('/', async function(req,res) {
    try {
        const allPosts = await db.query("select * from posts order by posted_at desc");
        res.render("posts", { posts: allPosts.rows});
    } catch (error) {
        console.log(error.message);
    }
});

app.get('/:id', async function(req,res) {
    try {
        const onePost = await db.query(`select * from posts where id=${req.params.id} order by posted_at desc`);
        console.log(onePost.rows);
        res.render("singlepost", { onepost: onePost.rows});
    } catch (error) {
        console.log(error.message);
    }
});


const PORT = 8080;
app.listen(PORT, function(req, res) {
    console.log("Server Started! ");
    console.log(`Go to http://localhost:${PORT}`);
})