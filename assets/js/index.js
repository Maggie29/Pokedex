'use strict';
const render = (root, data)=>{
  root.empty();
  const wrapper = $('<div class=wrapper></div>');
  wrapper.append(Header());
  wrapper.append(Gallery());

  root.append(wrapper);

}

const state = {
  pokemon: null,
  selectedPokemon: null,
  selectImage:null,
};

$( _ => {
  getPokemons((err, data) => {
    if (err) console.log(err);
    const root = $("#root");
    state.pokemon=data;
    render(root,data);
  });
  $('.modal').modal();

})
