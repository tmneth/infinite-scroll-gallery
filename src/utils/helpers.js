export const handleResize = () => {
  const clientHeightRem = document.documentElement.clientHeight / 16;
  const numberOfRows = Math.floor(clientHeightRem / (14.375 + 1.75) + 1);
  return numberOfRows * 3;
};

export const generateEndpoint = (imgPerPage, page, tag) =>
  `https://api.flickr.com/services/rest/?method=${
    tag ? "flickr.photos.search" : "flickr.interestingness.getList"
  }&api_key=${
    process.env.REACT_APP_API_KEY
  }&format=json&nojsoncallback=1&per_page=${imgPerPage}&page=${page}${
    tag ? `&tags=${tag},dog` : ""
  }&extras=url_q&extras=owner_name`;
