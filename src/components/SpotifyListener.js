import React, { Component } from 'react';
import SpotifyHelper from '../helpers/SpotifyHelper';


class SpotifyListener extends Component {
  constructor(props){
    super(props);
    this.state= {
      currentSongData: null
    }
  }

  componentDidMount(){
    const api = new SpotifyHelper('/me/player/currently-playing');
    api.get().then(data => {
      this.setState({
      currentSongData: data})
    }).catch((err) => {
      console.log('spotify api error', err);
    })
  }

  render(){
    if (!this.state.currentSongData) {
      return (
        <h1>Loading</h1>
      )
    } else if(!this.state.currentSongData.is_playing){
      return (
        <div>
          <p>I&apos;m not listening to anything right now, but I was listening to: {this.state.currentSongData.item.name}</p>
          <p>by: {this.state.currentSongData.item.artists[0].name}</p>
        </div>
      )
    }
    return(
      <div className="spotify-listener">
      <p>I am currently listening to: {this.state.currentSongData.item.name}</p>
      <p>by: {this.state.currentSongData.item.artists[0].name}</p>
      </div>
    )
  }
}

export default SpotifyListener
