# My journey doing the challenge

In this document, you'll find all details about my journey building the project.

## Machine setup to start building the project

1. [NVM](https://github.com/nvm-sh/nvm) configured to choose the appropriate node.js version
2. Install [Yarn](https://yarnpkg.com/) globally using npm. `yarn init -y` to start a basic package.json
3. [Git](https://git-scm.com/) to code versioning
4. [VS Code](https://code.visualstudio.com/) to write all poems with excellence

## List of things that is good to have

- SPA (Single Page Application)
- To handle all things manually as possible like:
  - Styles,
  - UI controls,
  - Predefined guidelines _(I believe this point is about code quality)_
- Project setup
- Dependencies configuration
- Build process
- Build resources
- To do everything from scratch

## Planning the front-end software

### Project structure

```
.
├── src/
    ├── components/
    ├── features/
    ├── screens/
    └── index.js (entry point)
├── public/
    └── index.html
├── build/
├── .editorconfig
└── webpack.config.js

```

### Project structure explanation

- `src`: represents the project code to be maintained
    - `components`: represents the stateless and shared components
    - `features`: represents the stateful components
    - `screens`: represents the page screens
    - `index.js`: is the application entry point, the project initialization and render should happen here
- `public`: represents static files that would be accessed via HTTP
    - `index.html`: is the document to be loaded by the browser to start the SPA and load the necessary resources
- `build`: represents the code generated after the building process and the code to be used in a production environment
- `.editorconfig`: config to a VS Code extension to set some files pattern
- `webpack.config.js`: all the build processes and optimization will be in this file

## Webpack

### Dependencies

The dependencies below are important to make the Webpack configuration works.

> `babel-loader` is the dependency that integrate webpack with babel

```
"babel-loader": "^8.2.5",
"html-webpack-plugin": "^5.5.0",
"webpack": "^5.74.0",
"webpack-cli": "^4.10.0",
"webpack-dev-server": "^4.10.0"
```

### Mode

The mode should be `production` or `development`. Webpack and its plugins will work in a different way between these two modes.

### Output

About the `filename` property, note that its value has `[name]`, it occurs to make the chunks happen. Chunks are an important config to take advantage of code splitting and lazy loading.

### HtmlWebpackPlugin

This plugin was installed and configured to get the entry point script and its corresponding resources to put it automatically to index.html.

### Modules - Rules

This part of the Webpack configuration is very important to make the application work with JSX and all presets necessary to run React.

> This configuration is applied just on `.js` files

### Code Splitting

Code splitting was configured in this app looking to optimize the first bundle loaded by the page. To use this resource you can write `import()` to call some module asynchronous.

### Webpack Dev Server

Was configured the `webpack-dev-server` to get easily some abilities like updating the browser on changes.

Some configurations were applied in the client config that are:
  - `overlay`, to show on the screen when an error occurs,
  - `logging` to log info on the browser

And the `port` also was configured to receive a custom port from the `PORT` environment variable or set the default which is `3000`.

## Babel

### Dependencies

The dependencies below are important to make Babel work.

```
"@babel/core": "^7.18.13",
"@babel/preset-react": "^7.18.6",
```

### Presets

`@babel/preset-react` was defined to enable the use of JSX and other configs to make the React work. As config options were put the `"runtime": "automatic"` to not be necessary always import the react on each file.
