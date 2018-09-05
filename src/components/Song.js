import React, { Component } from 'react';

class Song extends Component{
  render(){
    return(
      <div>
        <p>Song name: {this.props.track.name} </p>

      </div>
    )
  }
}

export default Song
