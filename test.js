const PokemonTypes = require('./PokemonTypes.json');

// Expect output to have 1715 types
const DataLength = 1715;

const WritedDatalength = PokemonTypes.PokemonTypes.length;

if( DataLength  ===  WritedDatalength) {
  console.log('Test Pass, Data Length Match!!!');
} else {
  console.log('Test Fail, Data Length Not Match !');
}
