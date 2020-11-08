const fetch = require('node-fetch')
const router = require('express').Router()
const dotenv = require('dotenv')
const getUrlFromParams = require('./twitterApi')

dotenv.config()

const TOKEN = process.env.TOKEN
const headers = {
	'Content-Type': 'application/json',
	Authorization: `Bearer ${TOKEN}`
}

const fetchOpts = { method: 'GET', headers }

router.post('/:query', async (req, res) => {
	const query = req.params.query //flat ? req.params.query : '%23' + req.params.query
	const url = getUrlFromParams({ query, ...req.body })

	fetch(url, fetchOpts)
		.then((resp) => resp.json())
		.then((data) => {
			res.send(data)
		})
		.catch((err) => res.send({ data: [], meta: {} }))
})

module.exports = router
