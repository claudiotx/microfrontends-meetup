import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  loaded = false;

  load(): void {
    if (this.loaded) {
      return;
    }
    const script = document.createElement('script');
    script.src = 'assets/web-component/scripts.js';
    document.body.appendChild(script);

    const script1 = document.createElement('script');
    script1.src = 'assets/web-component/main.js';
    document.body.appendChild(script1);
    this.loaded = true;
  }
}
