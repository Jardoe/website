import fetch from 'node-fetch';
import config from './config';

class SpotifyHelper {
  constructor(apiEndpoint) {
      this.url = `${config.apiUrl}`
      this.token = "BQAd2r_AAULxvjldWq4IHLMcbuK3RVdmjAsPMHLubsf7dULVK2r9KAsP5dqpMfDdM_CQZCi3syFyv9wlIttdTA_zIrIR1mkociV92GR9X69IlhHBQLNJ_gZFeLIshRO46lnoohBmkMUzA_LbILWq2jBgZ3htnMV8Ih7UxpaPVKyDNUTzVLG7YM_glJxOo5uLGC8WQtT3MGaH"
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

  async post(payload){
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
