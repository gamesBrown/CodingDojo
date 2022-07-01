var pokemonName =document.querySelector('#testChoose');  

async function fetchPokemon(){
            
    
        try{
             
             var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.value}`);
             var data = await response.json();
             console.log(data);
             document.querySelector('#yourPokemonImage').src = data.sprites.back_default
             
         }
         catch{
             console.log("it didn't work");
         }
    }

    fetchPokemon();
