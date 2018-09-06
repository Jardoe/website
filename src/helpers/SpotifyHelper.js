import fetch from 'node-fetch';
import config from './config';

class SpotifyHelper {
  constructor(apiEndpoint) {
      this.url = `${config.apiUrl}`
      this.refreshUrl='https://accounts.spotify.com/api/token'
      this.token = "BQC-Y46RSLHFhQVatFQNoLF54G41oj3weIjvc4CQOg4Hd1eEsb31SXL-s1dIeihFCfw0JPidP_VbRVkczJ2-90wOkgEnDnadzEFwdDGVJCJp5cz8WK57RdUCX_BJLoj386qfdrfYA2mU5IosccJsFwTtjchySVmciXbUMZytE_r8xVzOrSLNcULKO38gP7Nbqy61ofPpXsmT"
  }

  async getSearchResults(query) {
    try{
      const response = await fetch(this.url + '/search?type=track&q=' + encodeURIComponent(query), {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.token}`
        }
      })
      return await response.json()
    } catch (error){
      return error;
    }
  }

  async getCurrentSong() {
    try {
      const response = await fetch(this.url + '/me/player/currently-playing', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.token}`
        }
      });
      return await response.json()

    } catch (error) {
      return error;
    }
  }

  async authorize(){
    try{
      const redirect_uri=encodeURIComponent('http://localhost:3000/callback.html');
      const client_id="d244d73cb12c4b9e8448d972f90788b9"
      const url = 'https://accounts.spotify.com/authorize/?client_id=' +
      client_id + '&response_type=code' + '&redirect_uri=' + redirect_uri
      const response = await fetch(url, {
        method: 'GET',
        // redirect: true,
          headers: {
            'Access-Control-Allow-Origin' : '*',

        }
      })
      console.log(response);
      return await response
    } catch(error){
      return error;
    }
  }


  // async requestTokens(){
  //   try{
  //     const response = await fetch(this.refreshUrl, {
  //
  //     })
  //   }
  // }

  async addToPlaylist(payload){
    try {
      const response = await fetch(this.url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.token}`
        }
      });
      return await response.json();
    }
    catch(error){
      return error;
    }
  }
}

export default SpotifyHelper
