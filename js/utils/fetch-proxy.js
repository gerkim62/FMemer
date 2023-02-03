export default async function fetchViaProxy(url, options) {
  try {
    const proxyUrl = 'https://corsproxy.io/?';
    const targetUrl = url;
    const proxiedUrl = proxyUrl + encodeURIComponent(targetUrl);

    const response = await fetch(proxiedUrl, options);
    return response;
  } catch (error) {
    console.warn('an error occured while trying to fetch via proxy.',error,' using native fetch as fallback');
    
    return await fetch(url, options)
  }
}
