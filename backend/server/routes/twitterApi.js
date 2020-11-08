const endpoint = 'https://api.twitter.com/2/tweets/search/recent?'

const getUrlFromParams = ({ query, nextToken, maxResults }) => {
	const feedFields = `expansions=author_id&user.fields=username,description,name,profile_image_url&tweet.fields=created_at`
	let optParams =
		nextToken !== 'undefined' || 'null'
			? `max_results=${maxResults}`
			: `max_results=${maxResults}&next_token=${nextToken}`

	const url = `${endpoint}query=${query}&${feedFields}&${optParams}`

	return url
}

module.exports = getUrlFromParams
