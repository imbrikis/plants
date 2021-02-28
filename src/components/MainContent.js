import React, { Component } from 'react'

export default class MainContent extends Component {
  render() {
    const { plantName, plantImage, plantSciName } = this.props

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
          src={plantImage}
          alt={plantName}
          style={{
            width: '500px',
            height: '500px',
            backgroundColor: '#696969',
          }}
        />
        <p>Plant name: {plantName}</p>
        <p>Scientific name: {plantSciName}</p>
      </div>
    )
  }
}
