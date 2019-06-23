import { Component, ChangeDetectorRef, Inject, VERSION } from '@angular/core'
import e from '../event-bus'

@Component({
  selector: 'AngularApp',
  template: `
  <main class="w-100 bt b--black-10 bg-white">
    <section class="bg-black-0125 w-100">
      <article class="pb4">
        <div class="ph3 ph5-ns">
          <div class="cf mw9 center tc-m">
            <div class="pb3 pb4-ns pt4 pt5-ns mt4 black-70 fl-l w-50-l">
              <h1 class="f4 fw6 f1-ns lh-title measure mt0">
                Recommendation System (by {{imRunning}})
              </h1>
              <p class="f5 f4-ns fw4 b measure dib-m lh-copy">
              {{message}}
              </p>
              <p class="measure f5 f4-ns lh-copy dn">
              {{message}}
              </p>
            </div>
            <div class="fl-l w-50-l tl tc-ns pt3 pt4-m pt6-l">
              <a class="f6 f5-ns fw6 dib ba b--black-20 bg-blue white ph3 ph4-ns pv2 pv3-ns br2 grow no-underline"
                href="/#/">
                Go home! <code class="f6 fw4 di"></code>
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  </main>
	`,
})
export default class AngularApp {
  message: string = "Waiting for products..."
  imRunning: string = `Angular ${VERSION.full}`;

  constructor(@Inject(ChangeDetectorRef) private changeDetector: ChangeDetectorRef) {

  }

  ngAfterContentInit() {
    e.on('message', message => {
      this.message = message.text
      this.changeDetector.detectChanges()
      this.returnMessageToReactWhenReceived()
    })
  }

  returnMessageToReactWhenReceived() {
    e.emit('received', { text: 'Recommended: LightSaber' })
  }
}