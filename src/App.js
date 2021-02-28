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
        })
        console.log(data)
      })
  }

  render() {
    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <Header />
        <SideNav />
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
