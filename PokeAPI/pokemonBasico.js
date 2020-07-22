const user = require('readline-sync');
const axios = require('axios');
const fs = require('fs')

var id = user.question('Qual pokemon você deseja? ').toLowerCase()
var pokemon = new Object()
var pokedexlocal = []

//OBS necessário corrigir sobreposição da pokedex ao adicionar um novo pokemon

function getPokemonData () {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => {
        var pokemonName = res.data.name
        var pokemonTypes = res.data.types.map(item => ' ' + item.type.name).toString()
        var pokemonAbilities = res.data.abilities.map(item => ' ' + item.ability.name).toString()

        console.log(` Nome: ${pokemonName}\n Tipos: ${pokemonTypes}\n Habilidades: ${pokemonAbilities}`)

        addToPokedex()
    })
    .catch(erro => {
        console.log("Oops, não rolou")
    })
}

function addToPokedex () {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => {
        var pokemonName = res.data.name;
        var pokemonTypes = res.data.types.map(item => ' ' + item.type.name).toString();
        var pokemonAbilities = res.data.abilities.map(item => ' ' + item.ability.name).toString();

        var addPokedex = user.question('Gostaria de adicionar o pokemon a sua pokedex local?').toLowerCase()
        if(addPokedex == 's' || addPokedex == 'sim'){
            pokemon.name = pokemonName,
            pokemon.type = pokemonTypes,
            pokemon.ability = pokemonAbilities,
            pokedexlocal.push(pokemon)
            writeJson()
            console.log(pokedexlocal)
        } else {
            console.log('Ok, até a próxima!')
        }
    })
}

function writeJson () {
    const pokemonToString = JSON.stringify(pokedexlocal)
    var filePath = './data/localPokedex.json'
    fs.writeFileSync(filePath, pokemonToString)
}

getPokemonData()
