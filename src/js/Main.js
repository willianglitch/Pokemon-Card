function createCard(src,idName,dexPokeNumber,type01,type02,description,bg){
    return `
    <div class="card">
        <div class="pokemon-image">
            <img src="./src/assets/${src}.svg" alt="Pokemon Tauro tipo fogo">
        </div>

        <div class="card-content card-bg${bg}">
            <div class="pokemon-Name-Dex">
                <p class="name" id="${idName}"></p>
                <p class="number" id="${dexPokeNumber}"></p>
            </div>

            <div class="pokemon-Type">
                <div class="type" id="${type01}"></div>
                <div class="type" id="${type02}"></div>
            </div>

            <div class="pokemon-card-information" id="${description}">
            </div>
        </div>
    </div>
`
}

document.querySelector('#Cards').innerHTML = `
<section class="card-Container">
    ${createCard(
    'TaurosFire',
    'namePokemon01',
    'dexNumber01',
    'firstPokemonType01',
    'secondPokemonType01',
    'descriptionPokemon01',
    '01'
    )}
    ${createCard(
    'Grafaiai',
    'namePokemon02',
    'dexNumber02',
    'firstPokemonType02',
    'secondPokemonType02',
    'descriptionPokemon02',
    '02'
    )}
    ${createCard(
    'Tinkaton',
    'namePokemon03',
    'dexNumber03',
    'firstPokemonType03',
    'secondPokemonType03',
    'descriptionPokemon03',
    '03'
    )}
    ${createCard(
    'Cyclizar',
    'namePokemon04',
    'dexNumber04',
    'firstPokemonType04',
    'secondPokemonType04',
    'descriptionPokemon04',
    '04'
    )}
    ${createCard(
    'Skeledirge',
    'namePokemon05',
    'dexNumber05',
    'firstPokemonType05',
    'secondPokemonType05',
    'descriptionPokemon05',
    '05'
    )}
    ${createCard(
    'Cetitan',
    'namePokemon06',
    'dexNumber06',
    'firstPokemonType06',
    'secondPokemonType06',
    'descriptionPokemon06',
    '06'
    )}
</section>
`