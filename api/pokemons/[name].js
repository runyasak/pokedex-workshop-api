const pokemons = require('../../pokemons.json')

export default function (request, response) {
  const { name } = request.query;

  response.status(200).json(pokemons.find((pokemon) => pokemon.name === name))
}
