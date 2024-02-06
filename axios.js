/*
    9. Import `express` and `axios` == is a promise based module 
*/
const express = require("express")
const router = express.Router()
const app = express()
const axios = require("axios")


/*
    11. Write an asynchronous function to respond to requests at `localhost:3000/:query`
*/
app.get("/", async (req, res) => {
    let r = req.query.q
    let b = req.body
    let q = req.params.query

    try{
        let findDog = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${r}&attach_image=1`)
        let testing = findDog.weight.imperial
        console.log("Searching for your Dog");
        res.json({
            message: "success",
            payload: findDog.data
            
        })


    } catch(error){
        res.json({
            message: "error",
            payload: error
        })


    }
})


/*
    10. Set up the server's ability to listen to requests
*/
const PORT = 3000

app.listen(PORT, () => console.log(`server is listening on ${PORT}`))

module.exports = router;