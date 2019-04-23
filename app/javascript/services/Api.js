const apiHost = 'http://localhost:3000/api'

export default class Api {

  getPlayers() {
    return fetch(`${apiHost}/players`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      return response.json()
    })
  }

  getPlayerDetails(name) {
    return fetch(`${apiHost}/players/${name}`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      return response.json()
    })
  }
}
