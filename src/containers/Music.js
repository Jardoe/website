import React, { Component } from 'react';
import SpotifyListener from '../components/SpotifyListener';
import PlaylistAdder from './PlaylistAdder';

class Music extends Component{
  render(){
    return(
      <div>
        <SpotifyListener />
        <PlaylistAdder />
      </div>
    )
  }
}

export default Music;
