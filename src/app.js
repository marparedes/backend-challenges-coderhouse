const app = require("./routes/index");
const PORT = 8080;

app.listen(8080, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})