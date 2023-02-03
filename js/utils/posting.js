//import fetchViaProxy from './fetch-proxy.js'

export default async function postToFacebook(text, imageUrl) {
  // Replace YOUR_APP_ACCESS_TOKEN with your Facebook App access token
  const accessToken = "EAAQxN8BLi3gBAH1RxnHfgAMUDtqYVX8IhZBPX578ywZCkcUSqvjWrZBaFi2jWTOptjaoJvNwD285QHZCtPVjzm8wI9c4j7JKSFgdoU084caa3BommowTw5nR7GwOfuUwfv5BPZCzIRCAWrFJrTWA33p07TFarW3sCZCr6wtt436f3p2g6u2Ph6cIJI1wXNpwAZD";

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