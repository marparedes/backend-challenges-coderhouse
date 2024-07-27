const express = require("express")
const app = express()

const ProductsRoutes = require("./products.router")
const CartsRoutes = require("./carts.router")

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/api/products", ProductsRoutes)
app.use("/api/carts", CartsRoutes)

module.exports = app