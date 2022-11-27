const elementNamePokemon01 = document.getElementById('namePokemon01')
const elementNamePokemon02 = document.getElementById('namePokemon02')
const elementoDexNumber01 = document.getElementById('dexNumber01')
const elementoDexNumber02 = document.getElementById('dexNumber02')

function addNamePokemon(){
    elementNamePokemon01.innerHTML = Data[0].name;
    elementNamePokemon02.innerHTML = Data[1].name;

    addDexNumber()
}

function addDexNumber(){
    elementoDexNumber01.innerHTML = Data[0].dexNumber
    elementoDexNumber02.innerHTML = Data[1].dexNumber
    
    
}


addNamePokemon()
console.log(Data)