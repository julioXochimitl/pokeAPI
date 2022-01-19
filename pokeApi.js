fetch(`https://pokeapi.co/api/v2/pokemon/5/`)
.then((respuesta) => respuesta.json())
.then((pokemon) => {
    let element = document.getElementById("elemento");
    element.innerHTML = `<h1 style="color: white;">${pokemon.name}</h1>
    <img src='${pokemon.sprites.front_default}' style="width: 100%;">
    <h3 style="color: white;"><span style="color: red;">Habilidad:</span> ${pokemon.abilities[0].ability.name}</h3>
    <h4 style="color: white;"><span style="color: red;">Movimiento:</span> ${pokemon.moves[0].move.name}</h4>
    <h5 style="color: white;"><span style="color: red;">Especie:</span> ${pokemon.species.name}</h5>
    <h6 style="color: white;"><span style="color: red;">Tipo:</span> ${pokemon.types[0].type.name}</h6>`;
    console.log(pokemon);
})
.catch((err) => console.log(err));

/////////////////////////////////////////////////////////////////////////////////////////////////////

fetch(`https://pokeapi.co/api/v2/pokemon/200/`)
.then((respuesta) => respuesta.json())
.then((pokemon) => {
    let element = document.getElementById("elemento2");
    element.innerHTML = `<h1 style="color: white;">${pokemon.name}</h1>
    <img src='${pokemon.sprites.front_default}' style="width: 100%;">
    <h3 style="color: white;"><span style="color: red;">Habilidad:</span> ${pokemon.abilities[0].ability.name}</h3>
    <h4 style="color: white;"><span style="color: red;">Movimiento:</span> ${pokemon.moves[0].move.name}</h4>
    <h5 style="color: white;"><span style="color: red;">Especie:</span> ${pokemon.species.name}</h5>
    <h6 style="color: white;"><span style="color: red;">Tipo:</span> ${pokemon.types[0].type.name}</h6>`;
    console.log(pokemon);
})
.catch((err) => console.log(err));

/////////////////////////////////////////////////////////////////////////////////////////////////////

fetch(`https://pokeapi.co/api/v2/pokemon/47/`)
.then((respuesta) => respuesta.json())
.then((pokemon) => {
    let element = document.getElementById("elemento3");
    element.innerHTML = `<h1 style="color: white;">${pokemon.name}</h1>
    <img src='${pokemon.sprites.front_default}' style="width: 100%;">
    <h3 style="color: white;"><span style="color: red;">Habilidad:</span> ${pokemon.abilities[0].ability.name}</h3>
    <h4 style="color: white;"><span style="color: red;">Movimiento:</span> ${pokemon.moves[0].move.name}</h4>
    <h5 style="color: white;"><span style="color: red;">Especie:</span> ${pokemon.species.name}</h5>
    <h6 style="color: white;"><span style="color: red;">Tipo:</span> ${pokemon.types[0].type.name}</h6>`;
    console.log(pokemon);
})
.catch((err) => console.log(err));