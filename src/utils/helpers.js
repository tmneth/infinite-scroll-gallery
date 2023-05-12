export const generateEndpoint = (currentPage, tag) => {
  // Set up the query parameters for the Flickr API request
  const queryParams = {
    api_key: process.env.REACT_APP_API_KEY,
    format: "json",
    nojsoncallback: 1,
    per_page: 21,
    page: currentPage,
    extras: ["url_q", "owner_name"],
  };

  // If the tag is "all", get the most interesting photos from Flickr
  if (tag === "all") {
    queryParams.method = "flickr.interestingness.getList";
  } else {
    // Otherwise, search for photos with the given tag
    queryParams.method = "flickr.photos.search";
    queryParams.tags = `${tag}`;
  }

  // Convert the query parameters into a URL-encoded string
  const queryString = new URLSearchParams(queryParams).toString();

  return `https://api.flickr.com/services/rest/?${queryString}`;
};
