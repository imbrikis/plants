import React, { Component } from 'react'
import axios from 'axios'

export default class SideNav extends Component {
  constructor() {
    super()
    this.state = {
      plantImg: '',
      plantName: '',
      scientificName: '',
    }
  }

  componentDidMount() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`).then((res) => {
      const data = res.data
      this.setState({
        plantImg: data.sprites.front_default,
        plantName: data.name,
        scientificName: data.order,
      })
      console.log(data)
    })
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
        <label>Search: </label>
        <input type='text' />
      </div>
    )
  }
}
