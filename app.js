// THIS IS WHERE ALL DIFFERENT JS FILE IS RESIDED

require('./hello'); // only run the hello.js
var anon = require('./anonFn'); // requiring the anon functions module (anonFn.js)
var named = require('./nameFn'); // requiring the named functions module (nameFn.js)
var pikachu = require('./pokemon'); // requiring the animal object module NOT CONSTRUCTOR (pokemon.js)
var ImportedPokemon = require('./pokemon-const'); // requiring the animal constructor module (pokemon-const.js) NOTICE THAT IT IS CAPITAL Imported...
var pokemon_instance = require('./animal-inst'); // requiring the animal instance module (pokemon-const.js) NOTICE THAT IT IS SMALLCAP pokemon_instance


anon(); // run the anonFn module

// run the two different functions from nameFn module
named.buzz();
named.fiz();

// instantiate the imported constructor pokemon-const
var magicarp = new ImportedPokemon('ded', 'red', 'small');
console.log(magicarp.type);

// call a defined function within pokemon_instance
console.log('poke instance, do chant ' + pokemon_instance.chant());

// set the undefined pokemon_instance properties
pokemon_instance.size = 'LARGE!'

// call the defined properties now
console.log('poke instance, show size ' + pokemon_instance.size);
