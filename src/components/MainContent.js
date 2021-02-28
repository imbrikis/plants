import React, { Component } from 'react'

export default class MainContent extends Component {
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
        <h1>Plant image will go here</h1>
        <p>Plant name: way cool plant</p>
        <p>Scientific name: sciency sounding stuff</p>
      </div>
    )
  }
}
