const pokemons = require('../../pokemons.json')

export default function (request, response) {
  response.status(200).json(pokemons.map((pokemon) => ({ img: pokemon.img, name: pokemon.name })))
}
