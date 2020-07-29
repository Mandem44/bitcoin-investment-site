import React, { Component } from 'react'

class AdminSummarycards extends Component {
  render() {
    return (
        <div class="uk-card uk-card-default uk-card-small uk-card-body mb-5 ">
          <div className="row">
            <div className="col-s6 col-md-6 col-lg-6">
              <h3 class="uk-card-title">{this.props.value}</h3>
              <p>{this.props.title}</p>
            </div>
            <div className="col-s6 col-md-6 col-lg-6"></div>
          </div>
      </div>
    )
  }
}

export default AdminSummarycards

