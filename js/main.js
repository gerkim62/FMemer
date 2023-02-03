import postToFacebook from './utils/posting.js'
import getMemeUrl from './utils/fetch-meme.js'

(async () => {
  document.body.innerHTML+='fetching meme <br>'
  const memeUrl = await getMemeUrl()
  document.body.innerHTML+='meme fetched: '+memeUrl+'<br>'
  
  document.body.innerHTML+='posting meme<br>'
  const postId = await postToFacebook('#FMemer #daily_memes',memeUrl)
  
 document.body.innerHTML+='meme posted id:'+postId+'<br>'
})();