import React, {
  Component
} from 'react';
import SpotifyHelper from '../helpers/SpotifyHelper';
import SongsList from './SongsList'

class PlaylistAdder extends Component {
  constructor(props){
    super(props)

    this.state={
      query: null,
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
    api.addToPlaylist()
    console.log('song added to playist');
  }

  loadSearch(event){
    const api = new SpotifyHelper()
    this.setState({
      query: event.target.value
    })
    api.getSearchResults(event.target.value).then(data => {
      if(!data.tracks){
        this.setState({
          query: null,
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
      <input type="text" className="search-bar" onInput={this.loadSearch} placeholder="Search..."></input>
      <br />
      <h1>Showing results for {this.state.query}</h1>
      <SongsList tracks={this.state.tracks} />
    </div>
    )
  }
}

export default PlaylistAdder
