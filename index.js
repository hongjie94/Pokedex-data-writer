const writeJson = require('write-json'); 
const axios = require('axios');

let PokemonTypes = []

const getTypeDatas = ((url)=> {
   axios.get(url)
  .then((res) =>{
    const TypesDatas = res.data.pokemon;
    
    TypesDatas.forEach((pokemon)=> {
      let Types =
        {
          type: res.data.name,
          name: pokemon.pokemon.name
        };
        PokemonTypes.push(Types);  
    });

    writeJson('PokemonTypes.json', {PokemonTypes}, (err) => {
      if(err) {
        console.log(err);
      } else {
        console.log(`Json File For ${res.data.name} Complete!`);
      }
    });
  }).catch((error)=> {
    // handle error
    console.log(error);
  });
}); 

// Number of different type of pokemons
const NumberTypeDatas = 18;

for (let i = 0; i < NumberTypeDatas; i++) {
 getTypeDatas(`https://pokeapi.co/api/v2/type/${i + 1}/`)
}





