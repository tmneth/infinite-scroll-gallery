# Infinite Scroll Gallery

Infinite scroll gallery project created using React.js

## Features

- Explore page to browse photos from Flickr home page
- Search functionality that lets users search photos by a specific tag
- Infinite scroll to load more photos as the user scrolls down the page
- Ability to save photos to favorites
- Ability to remove photos from favorites
- Favorites page to view saved photos (local browser storage is being used)
- Loading spinner that indicates when new photos are being fetched
- Proper responsive UI for all screens

## UI Demo

![_vault](client/public/assets/_vault.png)
![_generator](client/public/assets/_generator.png)

## Project Setup

Run the following command from the root directory

```console
cd infinite-scroll & npm install
```

Once all the dependencies were installed start the client

```console
npm run start
```

Although the API key is provided, you can change it in .env file in root directory

```js
REACT_APP_API_KEY=<your Flickr API key>
```
