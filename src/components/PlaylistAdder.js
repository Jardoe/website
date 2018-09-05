import React, {
  Component
} from 'react';
import SpotifyHelper from '../helpers/SpotifyHelper';
import SongsList from './SongsList'

class PlaylistAdder extends Component {
  constructor(props){
    super(props)

    this.state={
      tracks: null
    }

    this.handleClick = this.handleClick.bind(this)
    this.loadSearch = this.loadSearch.bind(this)
  }


  handleClick(event){
    const track = "spotify:track:79nacouDnGnzgTlBFScJNl"
    const tracks = encodeURIComponent(track)
    const playlist_id ='0EMUyPY5LOiYmXt46wUv7Z'
    const api = new SpotifyHelper(`/playlists/${playlist_id}/tracks?position=0&uris=${tracks}`)
    api.post()
    console.log('song added to playist');
  }

  loadSearch(event){
    const api = new SpotifyHelper()
    api.getSearchResults(event.target.value).then(data => {
      if(!data.tracks){
        this.setState({
          tracks: null
        })
      } else {
        this.setState({
          tracks: data.tracks.items
        })
      }
    })
  }

  render() {
    return(
      <div>
      <p>Add songs to my playlist</p>
      <p>Find song</p>
      <input type="text" onInput={this.loadSearch} placeholder="Search..."></input>
      <button>Search</button>
      <br />
      <button onClick={this.handleClick}>Add songs!</button>
      <SongsList tracks={this.state.tracks} />
    </div>
    )
  }
}

export default PlaylistAdder
