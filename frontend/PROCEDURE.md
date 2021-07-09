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

> ## Back-End

1. Use Express for creating API's.
