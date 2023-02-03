export default async function getMemeUrl(){
  //console.log('fetch meme');
  try{
    const res = await fetch("https://meme-api.com/gimme");
  console.log(res)
  const meme =await res.json()
  console.log(meme)
  return meme.url;
  }catch(error){
    console.log('error fetching meme',error)
    document.body.innerHTML+= 'Error fetching meme '+error.message+'<br>'
  }
}