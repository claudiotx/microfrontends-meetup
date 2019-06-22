# Microfrontend App Example using Single-SPA
Based on Mr. IvanJov work.
This code sample was used on a meetup from FrontEnd Lisbon Group.
www.claudioteixeira.com

## What is this?
This is a sample Micro-Frontends app wired by: `single-spa` Framework.
There is also a shared event bus provided by: `eev` which allows subscribing and emitting of events
There are 3 isolated apps here:
  a) Angular 7.2.12 <header>
  b) React 15 <section>
  c) Angular 4.4.7 <section>
They `import` and `listen` and `emit` on the shared singleton eventbus to communicate between them (ie, it's not via iframes postMessage() or window object)

## Files/Folder Structure
src
  /angular/**
  /angular-header/**
  /event-bus/index.js
  /react/*
  /root-app/root-app.js
webpack.config.js
babelrc
tsconfig.json
package.json

## Instructions
### Install dependencies
`npm install`
`npm run install-external`

### Run app (dev mode)
`npm start`
[Localhost](http://localhost:9090/#/)

### Bundle app (prod mode)
`npm run build`
`http-server`
[Localhost](http://localhost:9090/#/)


## Issues
- Webpack config is not supporting external CSS or HTML loaded into the Angular Componentss
- Some changes must be made on the Angular Apps before being attached to the micro-frontend mesh.
- Stuck on Webpack 3 (ts loader also)

## Production build
Go to `/dist/`
You will find there the following files:
- 0.js => Angular 7 Vendor 1.2MB (there is a second package.json, so fair enough)
- 1.js => Angular 4 Vendor 50 KB
- 2.js => React 15 Vendor 8.3 Kb
- common-dependencies.js => 1MB
- root-app.js => 60KB

## Angular Constraints


