# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Installation

### `npm install`
### `npm i react-router-dom`
### `npm i react-icons`
### `npm install react-bootstrap bootstrap`
### `npm i --save @fortawesome/fontawesome-svg-core `
### `npm install --save @fortawesome/free-solid-svg-icons`
### `npm i --save npm i --save @fortawesome/free-brands-svg-icons`
### `npm install --save @fortawesome/react-fontawesome`
### `npm i react-type-animation`
### `npm i swiper`
### `npm install emailjs-com`
### `npm i gh-pages -save-dev`
### `npm install @react-three/drei`
### `npm i gh-pages -save-dev`
### `npm run build`

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Deploy 
Create new repository in Githib with the same name of this project `todo4` save like public to others people can see and follow the instructions of the github.
Open the project and terminal and run `git init`, readme create you same then jump and run `git add .`, after `git commit -m "Message commit that you would like put here"`, git branch -M main, copy and pasta the `git remove add origin url` that appear in the git with the url to dont have error and `git push -u origin main` after this upload the page and you can see the project in the github.

To work with github pages install `npm i gh-pages -save-dev` and package.json add:
<username>.github.io/<repositoryname>
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

and in vite.config.js:
base: "/repositoryname"

after this run `npm run deploy` if run without error works, then its only go to github pages and wait appear the link and you can share your project with others users.

## Referencia

Complete React Portfolio Website Project Tutorial - Create Personal Portfolio Website with React JS - https://www.youtube.com/watch?v=wFh0SJVDM9E

Portifolio3D GITHUB - https://github.com/ThayRibeiro0/portifolio3d

MyPortifolio- https://github.com/ThayRibeiro0/MyPortifolio
# thaymr1
