export const generateEndpoint = (currentPage, tag) => {
  const queryParams = {
    api_key: process.env.REACT_APP_API_KEY,
    format: "json",
    nojsoncallback: 1,
    per_page: 21,
    page: currentPage,
    extras: ["url_q", "owner_name"],
  };

  if (tag === "all") {
    queryParams.method = "flickr.interestingness.getList";
  } else {
    queryParams.method = "flickr.photos.search";
    queryParams.tags = `${tag}`;
  }

  const queryString = new URLSearchParams(queryParams).toString();

  return `https://api.flickr.com/services/rest/?${queryString}`;
};
