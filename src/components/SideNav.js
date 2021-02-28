import React, { Component } from 'react'

export default class SideNav extends Component {
  render() {
    return (
      <div
        style={{
          width: '22vw',
          height: '90vh',
          textAlign: 'center',
          float: 'left',
        }}
      >
        <label>Search: </label>
        <input type='text' />
      </div>
    )
  }
}
