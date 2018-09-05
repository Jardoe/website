import fetch from 'node-fetch';
import config from './config';

class SpotifyHelper {
  constructor(apiEndpoint) {
    this.url = `${config.apiUrl}${apiEndpoint}`,
      this.token = "BQC5PmEyKoA-dGiS8QsO4LQNDu9k4Bby4VVhEUyfdJXFqg_MjaSge3XK5NFdyiJ0thq7UAQXHfhRCwQxaoPu0zbkRUQpe4xH7srtHOaFrm1-qHLDQFh0WbIoIYS5ODDl1PiTqM7_V3ror_wdoUxw-zRuFfUVendyqYTEn7JpcwPijFizbKLf7dLvTRHRlfDUv29gcNOjlIpO"
  }

  async get() {
    try {
      const response = await fetch(this.url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
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
          'Accept': 'application/json',
          'Content-Type': 'application/json',
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
