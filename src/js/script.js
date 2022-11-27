const elementNamePokemon01 = document.getElementById('namePokemon01')
const elementNamePokemon02 = document.getElementById('namePokemon02')
const elementNamePokemon03 = document.getElementById('namePokemon03')
const elementNamePokemon04 = document.getElementById('namePokemon04')
const elementNamePokemon05 = document.getElementById('namePokemon05')
const elementNamePokemon06 = document.getElementById('namePokemon06')

const elementoDexNumber01 = document.getElementById('dexNumber01')
const elementoDexNumber02 = document.getElementById('dexNumber02')
const elementoDexNumber03 = document.getElementById('dexNumber03')
const elementoDexNumber04 = document.getElementById('dexNumber04')
const elementoDexNumber05 = document.getElementById('dexNumber05')
const elementoDexNumber06 = document.getElementById('dexNumber06')

const elementoFirstPokemonType01 = document.getElementById('firstPokemonType01')
const elementoFirstPokemonType02 = document.getElementById('firstPokemonType02')
const elementoFirstPokemonType03 = document.getElementById('firstPokemonType03')
const elementoFirstPokemonType04 = document.getElementById('firstPokemonType04')
const elementoFirstPokemonType05 = document.getElementById('firstPokemonType05')
const elementoFirstPokemonType06 = document.getElementById('firstPokemonType06')

const elementoSecondPokemonType01 = document.getElementById('secondPokemonType01')
const elementoSecondPokemonType02 = document.getElementById('secondPokemonType02')
const elementoSecondPokemonType03 = document.getElementById('secondPokemonType03')
const elementoSecondPokemonType04 = document.getElementById('secondPokemonType04')
const elementoSecondPokemonType05 = document.getElementById('secondPokemonType05')
const elementoSecondPokemonType06 = document.getElementById('secondPokemonType06')

const elementoDescriptionPokemon01 = document.getElementById('descriptionPokemon01')
const elementoDescriptionPokemon02 = document.getElementById('descriptionPokemon02')
const elementoDescriptionPokemon03 = document.getElementById('descriptionPokemon03')
const elementoDescriptionPokemon04 = document.getElementById('descriptionPokemon04')
const elementoDescriptionPokemon05 = document.getElementById('descriptionPokemon05')
const elementoDescriptionPokemon06 = document.getElementById('descriptionPokemon06')


function addNamePokemon(){
    elementNamePokemon01.innerHTML = Data[0].name;
    elementNamePokemon02.innerHTML = Data[1].name;
    elementNamePokemon03.innerHTML = Data[2].name;
    elementNamePokemon04.innerHTML = Data[3].name;
    elementNamePokemon05.innerHTML = Data[4].name;
    elementNamePokemon06.innerHTML = Data[5].name;

    addDexNumber()
    addPokemonType()
    addDescription()
}

function addDexNumber(){
    elementoDexNumber01.innerHTML = Data[0].dexNumber
    elementoDexNumber02.innerHTML = Data[1].dexNumber
    elementoDexNumber03.innerHTML = Data[2].dexNumber
    elementoDexNumber04.innerHTML = Data[3].dexNumber
    elementoDexNumber05.innerHTML = Data[4].dexNumber
    elementoDexNumber06.innerHTML = Data[5].dexNumber
    
}

function addPokemonType(){
    elementoFirstPokemonType01.innerHTML = Data[0].Type01
    elementoFirstPokemonType02.innerHTML = Data[1].Type01
    elementoFirstPokemonType03.innerHTML = Data[2].Type01
    elementoFirstPokemonType04.innerHTML = Data[3].Type01
    elementoFirstPokemonType05.innerHTML = Data[4].Type01
    elementoFirstPokemonType06.innerHTML = Data[5].Type01

    elementoSecondPokemonType01.innerHTML = Data[0].type02
    elementoSecondPokemonType02.innerHTML = Data[1].type02
    elementoSecondPokemonType03.innerHTML = Data[2].type02
    elementoSecondPokemonType04.innerHTML = Data[3].type02
    elementoSecondPokemonType05.innerHTML = Data[4].type02
    elementoSecondPokemonType06.innerHTML = Data[5].type02

}

function addDescription(){
    elementoDescriptionPokemon01.innerHTML = Data[0].description
    elementoDescriptionPokemon02.innerHTML = Data[1].description
    elementoDescriptionPokemon03.innerHTML = Data[2].description
    elementoDescriptionPokemon04.innerHTML = Data[3].description
    elementoDescriptionPokemon05.innerHTML = Data[4].description
    elementoDescriptionPokemon06.innerHTML = Data[5].description
}

addNamePokemon()
