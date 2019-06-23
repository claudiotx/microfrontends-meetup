
import React from 'react'
import e from '../event-bus'

export default class Root extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'Waiting for recommendation system...'
    }

    this.messageHandler = this.messageHandler.bind(this)
  }

  componentDidMount() {
    e.on('received', this.messageHandler)
  }

  componentWillUnmount() {
    e.off('received', this.messageHandler)
  }

  messageHandler(message) {
    console.log('received message on react', message);
    this.setState({
      message: message.text
    })
  }

  sendMessage(msg) {
    // evt.preventDefault();
    e.emit('message', { text: msg })
  }

  render() {
    return (
      <main className="w-100 bt b--black-10 bg-white">
      <section className="bg-black-0125 w-100">
        <article className="pb4">
          <div className="ph3 ph5-ns">
            <div className="cf mw9 center tc-m">
              <div className="pb3 pb4-ns mt4 black-70 fl-l w-50-l">
                <h1 className="f4 fw6 f1-ns lh-title measure mt0">
                  Product Explorer (by React 15)
                </h1>
                <main className="mw6 center">
                  <article>
                    <a className="link dt w-100 bb b--black-10 pb2 mt2 dim blue" href="javascript:;" onClick={() => this.sendMessage('Grid Systems')}>
                      <div className="dtc w3">
                        <img src="http://mrmrs.github.io/images/0010.jpg" className="db w-100" />
                      </div>
                      <div className="dtc v-top pl2">
                        <h1 className="f6 f5-ns fw6 lh-title black mv0">Grid Systems</h1>
                        <h2 className="f6 fw4 mt2 mb0 black-60">Josef Müller-Brockmann</h2>
                        <dl className="mt2 f6">
                          <dt className="clip">Price</dt>
                          <dd className="ml0">$75.00</dd>
                        </dl>
                      </div>
                    </a>
                  </article>
                  <article>
                  <a className="link dt w-100 bb b--black-10 pb2 mt2 dim blue" href="javascript:;" onClick={() => this.sendMessage('History of the Poster')}>
                      <div className="dtc w3">
                        <img src="http://mrmrs.github.io/images/0002.jpg" className="db w-100" />
                      </div>
                      <div className="dtc v-top pl2">
                        <h1 className="f6 f5-ns fw6 lh-title black mv0">History of the Poster</h1>
                        <h2 className="f6 fw4 mt2 mb0 black-60">Josef Müller-Brockmann</h2>
                        <dl className="mt2 f6">
                          <dt className="clip">Price</dt>
                          <dd className="ml0">$15.00</dd>
                        </dl>
                      </div>
                    </a>
                  </article>
                  <article>
                  <a className="link dt w-100 bb b--black-10 pb2 mt2 dim blue" href="javascript:;" onClick={() => this.sendMessage('Graphic Design in IBM')}>
                      <div className="dtc w3">
                        <img src="http://mrmrs.github.io/images/0004.jpg" className="db w-100" />
                      </div>
                      <div className="dtc v-top pl2">
                        <h1 className="f6 f5-ns fw6 lh-title black mv0">Graphic Design in IBM: Typography, Photography, and Illustration</h1>
                        <h2 className="f6 fw4 mt2 mb0 black-60">Josef Müller-Brockmann</h2>
                        <dl className="mt2 f6">
                          <dt className="clip">Price</dt>
                          <dd className="ml0">$15.00</dd>
                        </dl>
                      </div>
                    </a>
                  </article>
                </main>

                <p className="measure f5 f4-ns lh-copy">
                  {this.state.message}
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>
      </main>
    )
  }
}