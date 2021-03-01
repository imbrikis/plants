import React, { Component } from 'react'

export default class SideNav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      term: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      term: e.target.value,
    })
  }

  handleSubmit = (e) => {
    this.props.search(this.state.term)
    e.preventDefault()
  }

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
        <form onSubmit={this.handleSubmit}>
          <label>Search: </label>
          <input
            placeholder='search for a plant'
            value={this.state.term}
            type='text'
            onChange={this.handleChange}
          />
          <button type='submit' style={{ padding: '3px 6px' }}>
            Submit
          </button>
        </form>
        <ul>
          {this.props.results.map((item) => {
            return (
              <li style={{ listStyleType: 'none' }}>
                <a
                  href='#'
                  onClick={() => this.props.updateSelectedPlant(item)}
                >
                  {item.common_name}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
