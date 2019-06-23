import e from '../event-bus';

function addElementAndScripts(elementId) {
  const constructorExists = customElements.get('my-web-component');
  if (!constructorExists) {
    const webComponentScript = document.createElement('script');
    webComponentScript.setAttribute('src', './assets/web-component/scripts.js');
    const webComponentMain = document.createElement('script');
    webComponentMain.setAttribute('src', './assets/web-component/main.js');
    document.head.appendChild(webComponentScript);
    document.head.appendChild(webComponentMain);
  }
  const el = document.createElement('my-web-component');
  el.id = elementId;
  el.setAttribute('data', 'Web Component Started');
  document.body.appendChild(el);
  e.on('message', messageHandler)
}

function messageHandler(message) {
  console.log('received message on web component', message);
  const el = document.getElementById('my-web-component');
  el.setAttribute('data', message.text);
}

function removeElement(elementId) {
  // Removes an element from the document
  const element = document.getElementById(elementId);
  if (element){
    element.parentNode.removeChild(element);
    e.off('message', messageHandler);
  }
}


const bootstrapFn = () => {
  return new Promise((resolve, reject) => {
    // addElementAndScripts('my-web-component');
    resolve(true);
  })
}

const mountFn = () => {
  return new Promise((resolve, reject) => {
    addElementAndScripts('my-web-component');
    resolve(true);
  });
}

const unmountFn = () => {
  return new Promise((resolve, reject) => {
    removeElement('my-web-component');
    resolve(true);
  });
}



export const bootstrap = props => bootstrapFn();

export const mount = props => mountFn();

export const unmount = props => unmountFn();