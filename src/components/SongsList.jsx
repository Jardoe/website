import React, { Component } from 'react';
import Song from './Song'

class SongsList extends Component {
  constructor(props){
    super(props)
  }

  render(){
    console.log(this.props);
    if(this.props.tracks === null || this.props.tracks === undefined){
      return(
        <h1>Song List</h1>
      )
    } else {
      return(
        <div>
        <h1>Song List</h1>
        {this.props.tracks.map((track, index) => {
          return(<Song
            key={index}
            track={track}
            />)
          })
        }
        </div>
      )
    }
  }
}

export default SongsList;
