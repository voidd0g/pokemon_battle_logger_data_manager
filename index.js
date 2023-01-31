const admin = require("firebase-admin");
const serviceAccount = require("./pokemon-battle-logger-firebase-adminsdk-lj5ic-8e5a09976f.json");
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
const firestore = admin.firestore();

const pokemonsRaw = require("./pokemons.json");
const Pokemon = require("./pokemon");
const pokemons = pokemonsRaw.map((value) => {
	return new Pokemon(value);
});
async function createPokemons(){
	for(var i = 0; i < pokemons.length; i++){
		await firestore.collection('pokemons').doc(pokemons[i].id).set(pokemons[i].data);
	}
}
async function deletePokemons(){
	pocdocs = (await firestore.collection('pokemons').get()).docs;
	for(var i = 0; i < pocdocs.length; i++){
		await pocdocs[i].ref.delete();
	}
}

const abilities = require("./abilities.json");
const fields = require("./fields.json");
const items = require("./items.json");
const terrains = require("./terrains.json");
const weathers = require("./weathers.json");


  
async function main() {
	if(process.argv.length != 4){
		console.log('usage: node index.js [collection] [operation(create/delete)]');
		return;
	}
    if(process.argv[2] == 'pokemons'){
		if(process.argv[3] == 'create'){
			await createPokemons();
		}
		else if(process.argv[3] == 'delete'){
			await deletePokemons();
		}
	}
}

main().then();