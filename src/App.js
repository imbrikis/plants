import React, { Component } from 'react'
import axios from 'axios'
import Header from './components/Header'
import SideNav from './components/SideNav'
import MainContent from './components/MainContent'

class App extends Component {
  constructor() {
    super()
    this.state = {
      plantImg: '',
      plantName: '',
      scientificName: '',
      results: [],
    }
  }

  componentDidMount() {
    axios
      .get(`/api/v1/plants`, {
        params: {
          token: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => {
        const { data } = res.data
        this.setState({
          plantImg: data[2].image_url,
          plantName: data[2].common_name,
          scientificName: data[2].scientific_name,
          results: data,
        })
      })
  }

  search = (query) => {
    axios
      .get('/api/v1/plants/search', {
        params: {
          token: process.env.REACT_APP_API_KEY,
          q: query,
        },
      })
      .then((res) => {
        const { data } = res.data
        this.setState({
          plantImg: data[0].image_url,
          plantName: data[0].common_name,
          scientificName: data[0].scientific_name,
          results: data,
        })
      })
  }

  updateSelectedPlant = (plant) => {
    this.setState({
      plantImg: plant.image_url,
      plantName: plant.common_name,
      scientificName: plant.scientific_name,
    })
  }

  render() {
    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <Header />
        <SideNav
          search={this.search}
          results={this.state.results}
          updateSelectedPlant={this.updateSelectedPlant}
        />
        <MainContent
          plantImage={this.state.plantImg}
          plantName={this.state.plantName}
          plantSciName={this.state.scientificName}
        />
      </div>
    )
  }
}

export default App
