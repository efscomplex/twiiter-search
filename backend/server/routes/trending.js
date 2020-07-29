
const fetch = require('node-fetch')
const router = require('express').Router()
const dotenv = require('dotenv')
const { toFeed } = require('../utils')

dotenv.config()
const TOKEN = process.env.TOKEN
const endpoint = process.env.ENDPOINT

const headers = {
   'Content-Type': 'application/json',
   'Authorization': `Bearer ${TOKEN}`,
}
const fetchOpts = {
   method: 'GET',
   headers
}

router.post('/:query', async (req, res ) => {
   const {
      lang = 'es', 
      count = 10, 
      max_id = '0', 
      flat = false,
      type = 'recent'
   } = req.body

   const query = flat 
      ? req.params.query 
      : ('%23' + req.params.query)

   const url = `${endpoint}q=${query}&result_type=${type}&lang=${lang}&max_id=${max_id}&count=${count}`
   
   fetch(url, fetchOpts)
      .then(res => res.json())
      .then(({statuses}) => {
         const feeds = statuses 
            ? statuses.map(feeds => {
               console.log(feeds)
               return toFeed(feeds)})
            : []
         res.send(feeds)
      })
      .catch( err => res.send([]) )
})

module.exports = router