import { Component, VERSION } from '@angular/core';


@Component({
  selector: 'AngularAppHeader',
  template: require('./app.component.html'),
  // styles: [require('./app.component.scss')]
})
export class AppComponent {
  protected imRunning = `Angular ${VERSION.full}`;
  protected wasClicked = false;

  onClick(evt: any) {
    console.log('I was clicked! Yes!!');
    this.wasClicked = true;
  }
}
