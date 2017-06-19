'use strict'
const ModalPokemon = (pokemonSelected, name, select) => {
  var habilidades = "", tipos ="", debilidades="";
  let abilities = pokemonSelected.abilities.forEach((e)=>{habilidades += "<p>"+e.ability.name+"</p>";});
  let types = pokemonSelected.types.forEach((e)=>{tipos += "<div class='col s3 box-green'>"+e.type.name+"</div>";});
  
