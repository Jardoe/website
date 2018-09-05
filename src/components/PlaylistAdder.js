import React, {
  Component
} from 'react';
import SpotifyHelper from '../helpers/SpotifyHelper';

class PlaylistAdder extends Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }


  handleClick(){
    const playlist_id ='0EMUyPY5LOiYmXt46wUv7Z'
    const api = new SpotifyHelper(`/playlists/${playlist_id}/tracks?position=0&uris=spotify%3Atrack%3A4iV5W9uYEdYUVa79Axb7Rh%2C`)
    api.post()
  }

  render() {
    return (
      <div>
        <p>Add songs to my playlist</p>
        <button onClick={this.handleClick}>Add songs!</button>
      </div>
    )
  }
}

export default PlaylistAdder
