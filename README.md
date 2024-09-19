# React Shopping Cart
## _Powered by React + Vite_

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" width="50" height="50">

[![Vite](./public/vite.svg)](https://vitejs.dev)
[![React](./src/assets/react.svg)](https://react.dev)

Shopping Cart React is a front-end storefront built using Vite and ReactJS. This is a single page app using React-Router to manage user routes and actions.

- Load products by selecting the navbar
- Select a product to add to shopping cart
- Select quantity of product to be added
- ✨Magic ✨

## Features

- Displays the products, current shopping cart items, and current quantity of shopping cart items added
- Selectively increment or decrement quantity of item to add to shopping cart
- Manipulation of added items within the shopping cart (Update, Delete)
- SPA, Serverless rendering

React Shopping Cart is a simple, single page app based on ubiquitous digital storefronts observed across the web where users can freely manipulate and purchase items on a digital shopping cart responsively on different devices.

As part of the [scope of requirements ](https://www.theodinproject.com/lessons/react-new-shopping-cart) for a front-end storefront:

> A home page and a shop page, which includes your shopping cart). 
> Let the user navigate between the pages with a navigation bar, which will be shown on both pages
> On the shopping cart page, you should have the same navigation bar that displays the number of items currently in the cart
> And, also have a button next to it where you can go to the cart to checkout 

## Tech

React-Shopping-Cart uses a number of open source frameworks and libraries to work properly:

- [MaterialUI](https://next.mui.com/material-ui/all-components/) - Ubiquitous CSS framework
- [React](https://react.dev/) - The face of the web and UI
- [React-Router DOM](https://reactrouter.com/en/main/start/overview) - The Client Side Routing framework
- [Vite](https://vitejs.dev/) - Web frontend tools
- [Vitest](https://vitest.dev/) - To complement with Vite for unit testing components and UI

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

## Installation

React Shopping Cart requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd react-shopping-cart
npm i
npm run dev
```

To run unit tests...

```sh
npm i
npm run test
```

## License

MIT

**Free Software, As It should be.**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
