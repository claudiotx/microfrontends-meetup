import { Component, VERSION, OnInit } from '@angular/core';
import { LoaderService } from './loader.service.ts';

@Component({
  selector: 'AngularAppHeader',
  template: require('./app.component.html'),
  // styles: [require('./app.component.scss')]
})
export class AppComponent implements OnInit {
  protected imRunning = `Angular ${VERSION.full}`;
  protected wasClicked = false;
  public webComponentElement;

  constructor(private loaderService: LoaderService) {

  }

  add(name: string): void {
    const customElement = document.createElement(name);
    customElement.setAttribute('data', '');
    this.webComponentElement = customElement;
    const content = document.getElementById('content');
    content.appendChild(customElement);
    console.log('added');
  }

  ngOnInit() {
    this.loaderService.load();
    console.log('loaded');
    this.add('my-web-component');
  }

  onClick(evt: any) {
    console.log('I was clicked! Yes!!');
    this.webComponentElement.setAttribute('data', 'message from header');
    this.wasClicked = true;
  }

}
