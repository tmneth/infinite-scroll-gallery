# Infinite Scroll Gallery

Infinite scroll gallery project, created using React.js and Flickr API

## Features

- Explore page, to browse images from Flickr's "interesting" page
- Search of the images by a specific tag
- Infinite scroll, to load more images as the user scrolls down the page
- Ability to add/remove images to/from favourites
- Favourites page, to view saved images (local browser storage is used to store/retrieve those)

## UI Demo

![desktop](img/desktop.png)

## Project Setup

Install dependencies

```console
npm install
```

Once all the dependencies were installed, start the app

```console
npm start
```

Although the API key is provided, you can change it in .env file, in root directory

```console
REACT_APP_API_KEY=<your Flickr API key>
```
