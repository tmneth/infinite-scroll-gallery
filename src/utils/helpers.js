// Calculates the number of images to display per page based on the current window size
export const calcImgPerPage = () => {
  // Calculate the window heigh
  const windowHeight = window.innerHeight / 16;
  // Calculate the height of an image plus the gap between rows
  const elementHeight = 14.375 + 1.75;
  // Calculate the number of rows that can fit in the window, plus an extra row for scroll bar to appear
  const imgRowsPerPage = Math.floor(windowHeight / elementHeight) + 1;
  // Calculate the number of images to display per row
  return imgRowsPerPage * (window.innerWidth <= 992 ? 2 : 3);
};

export const generateEndpoint = (currentPage, tag) => {
  const queryParams = {
    api_key: process.env.REACT_APP_API_KEY,
    format: "json",
    nojsoncallback: 1,
    per_page: calcImgPerPage(),
    page: currentPage,
    extras: ["url_q", "owner_name"],
  };

  if (tag) {
    queryParams.method = "flickr.photos.search";
    queryParams.tags = `${tag},dog`;
  } else {
    queryParams.method = "flickr.interestingness.getList";
  }

  const queryString = new URLSearchParams(queryParams).toString();

  return `https://api.flickr.com/services/rest/?${queryString}`;
};
