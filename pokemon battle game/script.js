
var oppPokemonName = `charizard`;


async function fetchYourPokemon(){
            
    var pokemonName =document.querySelector('#testChoose').value;  
        try{
             
             var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
             var data = await response.json();
             console.log(data);
             document.querySelector('#yourPokemonImage').src = data.sprites.back_default;
             
         }
         catch{
             console.log("it didn't work");
         }
    }

    fetchYourPokemon();
    fetchOppPokemon();

async function fetchOppPokemon(){
    try{
        var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${oppPokemonName}`);
        var data = await response.json();
        console.log(data);
        document.querySelector(`#oppPokemonImage`).src=data.sprites.front_default;
    }
    catch{
        console.log("didnt werk");
    }
}

class activePokemonPlayer{
    name;
    nickname;
    currentHP;
    maxHP;
    type;
    atk;
    def;
    spAtk;
    spDef;
    spd;

    //just a lil logic for an active pokemons

}
