//import fetchViaProxy from './fetch-proxy.js'

export default async function postToFacebook(text, imageUrl) {
  // Replace YOUR_APP_ACCESS_TOKEN with your Facebook App access token
  const accessToken ='EAAQxN8BLi3gBACpkSBJV7wdyAEZCpZAncHfDok6YBtdV8gaS1PKLLUvxdLCha46uxvhcIp5B9NNUJzbHiwiMaPi11zZAXN6w73Bh27XAOstT7Ccu7PdqSya7kjx7yIRFShaR52qDF'+'i0cvHWdoEQUEXAY0M5kneGpZAs7jxo95fQJqUNLMeDwKk1o9EDU12MZD'
  // Replace YOUR_PAGE_ID with the ID of your Facebook Page
  const pageId = "104461962564494";

  // The API endpoint for posting a message on a Facebook Page
  const endpoint = `https://graph.facebook.com/${pageId}/photos?url=imageUrl&access_token=${accessToken}`;


  // The message you want to post
  const message = text;

  // The image you want to attach to the post
  const attachImage = imageUrl;

  // Create the form data object to send with the API request
  const formData = new FormData();
  formData.append("message", message);
  formData.append("access_token", accessToken);
  formData.append("url", attachImage);

  // Make the API request to post the message
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (response.ok) {
      console.log("Post successfully sent to Facebook and accepted:", data);

      return data.post_id
    }

    if (!response.ok) {
      console.error("Facebook rejected this post request. Error:", data.error.message, 'full response:', data);
      
      document.body.innerHTML= 'Facebook rejected this post request. Error: '+data.error.message
    }
    
  } catch (error) {
    console.error("Post request unsuccessful, something went wrong:", error);
    
    document.body.innerHTML = ("Post request unsuccessful, something went wrong: "+ error.message);
  }


}