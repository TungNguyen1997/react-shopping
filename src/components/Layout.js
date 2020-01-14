import React, { Component } from 'react'

export default class Layout extends Component {
    render() {
        return (
            <main>
  {/* shop-area start */}
  <section className="shop-area pt-150 pb-100">
    <div className="container">
     <div className="row">
         {this.props.children}
     </div>
    </div>
  </section>
  {/* shop-area end */}
</main>

        )
    }
}
