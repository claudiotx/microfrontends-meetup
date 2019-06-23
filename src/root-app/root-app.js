import { start, registerApplication } from 'single-spa'
// Routing, authentication and session management should happen here

const hashPrefix = prefix => location => location.hash.startsWith(`#${prefix}`)

const pathPrefix = (prefix) => {
  return function(location) {
      return location.pathname.indexOf(`${prefix}`) === 0;
  }
}

// /#/
registerApplication('angularHeader', () => import('../angular-header/index.js'), hashPrefix('/'))
registerApplication('react', () => import('../react/index.js'), hashPrefix('/'))
registerApplication('webComponent', () => import('../web-component/index.js'), hashPrefix('/'))

// /#logged/
registerApplication('angularHeaderLogged', () => import('../angular-header/index.js'), hashPrefix('logged'))
registerApplication('angularLogged', () => import('../angular/index.js'), hashPrefix('logged'))
registerApplication('reactLogged', () => import('../react/index.js'), hashPrefix('logged'))

start();

