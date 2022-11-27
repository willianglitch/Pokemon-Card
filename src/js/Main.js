function createCard(src,idName,dexPokeNumber){
    return `
    <div class="card">
    <div class="pokemon-image">
        <img src="./src/assets/${src}.svg" alt="Pokemon Tauro tipo fogo">
    </div>

    <div class="card-content">
        <div class="pokemon-Name-Dex">
            <p class="name" id="${idName}"></p>
            <p class="number" id="${dexPokeNumber}"></p>
        </div>

        <div class="pokemon-Type">
            <div class="type "><p>figthing</p></div>
            <div class="type "><p>fire</p></div>
        </div>

        <div class="pokemon-card-information">
            <p>Quando aquecidos pela energia do fogo, seus chifres podem ficar mais quentes do que 1.800 graus Fahrenheit. Aqueles feridos por eles sofrerão ferimentos e queimaduras.</p>
        </div>
    </div>
</div>
    `
}



document.querySelector('#Cards').innerHTML = `
<section class="card-Container">
    ${createCard('TaurosFire','namePokemon01','dexNumber01')}
    ${createCard('Grafaiai','namePokemon02','dexNumber02')}
    ${createCard('Tinkaton')}
    ${createCard('Cyclizar')}
    ${createCard('Skeledirge')}
    ${createCard('Cetitan')}
</section>
`