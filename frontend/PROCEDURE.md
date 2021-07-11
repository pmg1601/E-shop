**This is an E-commerce site which allows user to shop products, add items to the cart and checkout for the purchase.**

> I have used HTML, JS, React, react-bootstrap and Bootswatch Lux Theme

---

# Remember this ...

-   Remove unnecessary code and files.
-   Initialize git in main directory.
-   Create components in `src/components` folder and import in `App.js`. (Names should be in Title Case)

---

# Building This Project

> ## Getting Started ...

1. Create a react project.
2. Remove unnecessary code and files. (Test files, logos, svgs)
3. Create components and import in "App.js"
4. Use `Bootswatch LUX Theme` and import in index.js as `import './bootstrap.min.css'`

<br>

> ## Front-End

1. Use `screens` as pages.
2. Create individual `components`.
3. `index.js` in more important than `App.js`
4. App.js has routes to the screens and base components.

    - Complete container is wrapped in `Route` component.
    - Base components are common to all pages.
    - These are 2 main imports for routing
        - import { BrowserRouter as Router, Route } from 'react-router-dom'
        - import { Container } from 'react-bootstrap'

5. In `index.js` App component is wrapped in `React.StrictMode` component.
6. Added `store` to deal with data and content
7. Added `react-redux` for loader and error message for a page. We are fetching data through `actions` defined for reducers

<br>

> ## Back-End

1. Use Express for creating API's.
2. Use `.env` file to store `ENV_Variables`.
3. Use ES6 conventions.
4. Added `middleware` to handle errors.
5. Added `routes` to get data from database.

> ## DataBase

1. Used `MongoDB Atlas` - online service.
2. Setup with `MongoDB Compass`
3. Connect application with `mongoose`
4. Create `models` for database collections.
5. `Seeder` script to insert/delete data.
6.
7.
