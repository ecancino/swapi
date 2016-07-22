'use strict'

const API_URL = 'http://swapi.co/api'

function get(url) {
  return fetch(url).then((response) => {
    return response.json()
  })
}

export default { get, API_URL }
