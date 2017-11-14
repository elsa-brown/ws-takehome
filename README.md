## West Elm: Markup Challenge coding assignment
Thank you for taking the time to review this submission.

## Instructions
1. Install dependencies: `npm install`
2. Run `npm run build` to compile
3. Run `npm start` to start server
4. Open `http://localhost:8080` to view

#### Technologies used:
React, JavaScript/ES6, webpack, SCSS, babel, Express, HTML5/CSS3

#### Features
* Product hero image and name/color update based on user selection of thumbnail images.
* Modal window opens on "Add to Cart", reflecting the product, quantity and subtotal being purchased by the user.
* "Expanded" and "Collapsed" sections are responsive with fluid animation.
* Hero and Thumbnail images optimized for clean UI design. 

#### TODO
 * Make qty input field auto-reset to 1 when product selection is updated. Currently the user has to manually reset to 1.
 * Fix `file-loader` asset pre-processing flow. Currently some assets are compiled to a `dist > assets` folder, while others are not compiled. (This is due to different requirements for url interpolation in React components with dynamically generated elements.)
 * Test across browsers and devices. Current iteration has been tested on Chrome version 62.x on a 13" Macbook.
 * Install `postcss` / `autoprefixer` for improved cross-browser compatibility. 
 * Adapt UI for a mobile-friendly site. 
 
 #### File structure overview:
```
├── browser
│   ├── components
│   ├── styles
│   ├── utils
│   └── index.jsx
│
├── public
│   ├── assets
│   ├── dist 
│   └── index.html
│
├── server
│   └── index.js
│
├── package.json
├── README.md
└── webpack.config.js   
```
