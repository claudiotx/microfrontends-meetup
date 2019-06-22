import 'zone.js'
import 'reflect-metadata'
import singleSpaAngular from 'single-spa-angular2'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import mainModule from './src/app/app.module.ts';
import { Router } from '@angular/router'

const domElementGetter = () => {
  let el = document.getElementById('angularHeader')
  if (!el) {
    el = document.createElement('div')
    el.id = 'angularHeader'
    document.body.appendChild(el)
  }

  return el
}

console.log('got main module', mainModule)

const ngLifecycles = singleSpaAngular({
  domElementGetter,
  mainModule,
  angularPlatform: platformBrowserDynamic(),
  template: `<AngularAppHeader />`,
  Router,
})

export const bootstrap = props => ngLifecycles.bootstrap(props)

export const mount = props => ngLifecycles.mount(props)

export const unmount = props => ngLifecycles.unmount(props)
