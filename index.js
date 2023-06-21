const express = require('express')
const cors = require('cors')
const colors = require('colors')
const { run, client } = require('./dbConnect')
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())


try {

    app.get('/', (req, res) => res.send('hwl from pagination server'))

} catch (error) {
    console.log(error.name.bgRed, error.message.bold.yellow)
}




// database
try {
    run()
} catch (error) {
    console.log(error.name.bgRed, error.message.yellow)
}

client

const Products = client.db("EmaJohnMama").collection('products');
// database


//   for query
// -------------
// 1. need currentPage receive from query
// 2. need perPage receive from query
// 3. count
// 4. skip(currentPage * perPage) and limit(perPage)

app.get('/products', async(req, res) =>{
    try {
        const currentPage = parseInt(req.query.currentPage);
        const perPage = parseInt(req.query.perPage);
        const count = await Products.estimatedDocumentCount();
        const query = {};
        const cursor = Products.find(query);
        const result = await cursor.skip(currentPage * perPage).limit(perPage).toArray();
        res.send({count, result});
    } catch (error) {
        console.log(error.name.bgRed, error.message.yellow);
        res.send(error);
    }
})










try {
    app.listen(port, () => console.log(`server running on port ${port}`.bold.blue))
} catch (err) {
    console.log(err.name.bgRed, err.message.yellow)
}