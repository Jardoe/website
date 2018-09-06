import React, { Component } from 'react';

class Song extends Component{
  render(){
    return(
      <div>
        <p>{this.props.track.name}</p>
        {this.props.track.artists.map((artist,i) => {
          return <p key={i}>{artist.name}</p>
        }
        )}
        <p>{this.props.track.album.name}</p>
      </div>
    )
  }
}

export default Song




// <p>{this.props.track.popularity}</p>
