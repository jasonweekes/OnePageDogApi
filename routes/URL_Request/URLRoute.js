/*
    Import express and create a router variable
*/
const express = require("express")
const router = express.Router()
const app = express()
const axios = require("axios")

/*
    Teacher Data
*/


/*
    Set up a response to localhost:3000/
*/
router.get("/", (req, res) => {
    
    res.render("dogsearch", { data: [], searchQuery: "" }) //,{name: "Jason Weekes",
       
});

router.get("/search-dog", async (req, res) => {
    let query = req.query.search;

    let imgid = ""
    
        
    let searchResult2 = ""
    let concatWord = " for your search" 
    let weight = "No weight Found" + concatWord
    let height = "No Height Found" + concatWord
    
    let dogName = "No Dog Name Found" + concatWord
    let bredfor = "No Breed Information Found" + concatWord
    let breed_group = "No Breed Group Found" + concatWord
    let life_span= "No Life_Span Information Found" + concatWord
    let temperament= "No Temperament Found" + concatWord
    let imgid2 = req.query.search  
try{
    let payload = await axios(`https://api.thedogapi.com/v1/breeds/search?q=${query}&attach_image=1`)
  
    let searchResult = payload.data[(Math.floor(Math.random() * payload.data.length))]
    let pic = `https://http.dog/${res.statusCode}.jpg`
    // console.log('pic',pic);

    if(payload.data.length == 0){
        res.render("dogsearch", {data: [], DogName: dogName, bred: bredfor, breedGroup: breed_group, LifeSpan: life_span, temp: temperament, Pic: pic, height: height, weight: weight, searchQuery: "No Dogs Found"})
      } else {
   
    imgid = searchResult.reference_image_id
    let payload2 =await axios(`https://api.thedogapi.com/v1/images/${imgid}`)
    
    searchResult2 = payload2.data.url
    Object.assign (searchResult,{url: payload2.data.url})
    weight = payload2.data.breeds[0].weight.imperial +' pounds';
    height = payload2.data.breeds[0].height.imperial + ' inches';
    pic = payload2.data.url
    dogName = searchResult.name
    bredfor = searchResult.bred_for
    breed_group = searchResult.breed_group
    life_span= searchResult.life_span
    temperament= searchResult.temperament
    imgid2 = req.query.search
  
    res.render("dogsearch", { data: searchResult, DogName: dogName, bred: bredfor, breedGroup: breed_group, LifeSpan: life_span, temp: temperament, Pic: pic, height: height, weight: weight, searchQuery: query})
       
    }  
}catch (error) {
        console.log(error)
    }
})
/*
    Set up a response to localhost:3000/teachers
*/

/*
    Export this router
*/
module.exports = router;