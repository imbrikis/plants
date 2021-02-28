import React, { Component } from 'react'

export default class MainContent extends Component {
  constructor() {
    super()
    this.state = {
      plantImage: '',
    }
  }

  render() {
    return (
      <div
        style={{
          width: '78vw',
          height: '90vh',
          float: 'right',
          textAlign: 'center',
        }}
      >
        <img
          src={this.state.plantImage}
          alt={this.state.plantImage}
          style={{
            width: '500px',
            height: '500px',
            backgroundColor: '#696969',
          }}
        />
        <p>Plant name: way cool plant</p>
        <p>Scientific name: sciency sounding stuff</p>
      </div>
    )
  }
}
