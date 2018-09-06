import React, { Component } from 'react';
import Song from '../components/Song'

class SongsList extends Component {

  render(){
    console.log(this.props);
    if(this.props.tracks === null || this.props.tracks === undefined){
      return(
      <br />
      )
    } else {
      return(
        <div>
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
