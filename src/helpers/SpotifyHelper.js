import fetch from 'node-fetch';
import config from './config';

class SpotifyHelper {
  constructor(apiEndpoint){
    this.url = `${config.apiUrl}${apiEndpoint}`,
    this.token = "BQDLDmqCidveP5rKYDHQPk94jPm0CEMrZHqrEI6MEkkrWMZhUa8tbRVNOHqkUPoQQrKKks5dfhMIT0ZbLc58aOtkPN3eRMKJhzjzc9uAQK1ZyfOFcdC2zz3zyLOi69-ltQKBLTwLD46xFP7y9VQnRGkvs_TCVZHr3iCFCoPRhcGGnHQM_GVLfUXB2vUIorFv7pxuwpAdKXeh"
  }

  async get() {
    try {
      const response = await fetch(this.url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token}`
        }});
        return await response.json()

      }
      catch(error) {
        return error;
      }
    }
  }



export default SpotifyHelper
