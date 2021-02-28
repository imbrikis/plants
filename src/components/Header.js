import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div
        style={{
          width: '100vw',
          height: '10vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1 style={{ fontSize: '48px' }}>Plants</h1>
      </div>
    )
  }
}
