'use strict';
const Galley = (update) => {
  const section = $('<section class="container"></section>');
  const containerInput = $('<div class="row container-input"></div>');
  const icon = $('<i class="material-icons search">search</i>');
  const divInput = $('<div class ="col s6"></div>');
  const divInput = $('<div class ="col s6"></div>');
  const input = $('<input type="text" class="serch">');
  const divSpan = $('<div class ="col s6 right"></div>');
  const span = $('<span class="az">A - Z</span>');
  const containerImage = $('<div class="row img"></div>');

  containerInput.append(icon);
  divSpan.append(span);
  divInput.append(input);
  containerInput.append(divInput);
  containerInput.append(divSpan);
  section.append(containerInput);
  section.append(containerImage);

  $.each(state.pokemon.pokemon_entries, function (index, value) {
    containerImage.append(PokemonItem(value,update));
    if (index == 15) {
      return false;
    }
  });

  input.keyup(function () {
     const pokemonSelect  = filterByName(state.pokemon.pokemon_entries, $(this).val(),update);
       reRender(containerImage,pokemonSelect,update);
   });
   return section;
 }

 const PokemonItem = (pokemon, update) => {
  const containerImg = $('<div class="col s3 box"></div>');
  const divGray = $('<div class = box-gray></div>');
  const divImg = $('<div class="box-img"></div>');
  const img = $(`<img src='http://serebii.net/art/th/${pokemon.entry_number}.png' class="responsive-img"/>`);
  const divIcons = $('<div class="div-absolute responsive-img"></div>');
  const icon1 = $('<a href="#modal"><img src="icon/pokeball_gray.png" class="icon"/></a>');
  const icon2 = $('<img src="icon/valentines-heart.png" class="icon"/>');
  const icon3 = $('<img src="icon/data.png" class="icon"/>');
  const name = $(`<p class="pokemon-name">${pokemon.pokemon_species.name}</p>`);

  divImg.append(img);
  divIcons.append(icon1);
  divIcons.append(icon2);
  divIcons.append(icon3);
  divIcons.append(name);
  divGray.append(divImg);
  divGray.append(divIcons);
  containerImg.append(divGray);

  icon1.on('click', (e) =>{
  e.preventDefault();
  $('.modal').empty();
  state.selectedImg = div[0].outerHTML;
  const name = pokemon.pokemon_species.name;
  const descriptionURL = pokemon.pokemon_species.url;
  //descripcion
  $.getJSON(descriptionURL,function(response){
    state.selectedPokemon = response;
   });
  $.getJSON("http://pokeapi.co/api/v2/pokemon/"+pokemon.entry_number,function(data){
    $('.modal').append(ModalPokemon(data,name, state.selectedPokemon));
   });
})

return containerImg;
}

const reRender = (contentImage,pokemon, update) => {
    contentImage.empty();
    $.each(pokemon, function (index, value) {
      contentImage.append(PokeItem(value,update));
      if (index == 20) {
        return false;
      }
    });
}
