const toFeed = tweet => (
   {
      created: tweet.created_at,
      text: tweet.text,
      name: tweet.user.name,
      username: tweet.user.screen_name,
      description: tweet.user.description,
      avatar: tweet.user.profile_image_url_https,
      id: tweet.id 
   }
)

module.exports = {
   toFeed
}
