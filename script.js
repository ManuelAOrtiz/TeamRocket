class Pokemon{
	constructor(ajaxNumber){
		this.name;
		this.hp;
		this.attack;
		this.defense;
		this.abilities = [];
		this.sprites = [];
		this.types = [];
		this.pokemonID = ajaxNumber;
		this.getPokemon(ajaxNumber);
	}
	getPokemon(ajaxNumber){
		var that = this
		$.ajax({url: "https://fizal.me/pokeapi/api/"+ajaxNumber+".json",
		success: function(result){
					// console.log(result)
					that.hp = that.getHP(result)
					that.attack = that.getAttack(result);
					that.defense = that.getDefense(result);
					that.abilities = that.getAbilities(result);
					that.name = that.getName(result);
					that.sprites = that.getImage(result);
					that.types = that.getType(result);
				}
		})
	}
	getImage(result){
		var imageArray = [];
		imageArray.push(result.sprites.back_default);
		imageArray.push(result.sprites.front_default);
		return imageArray;
	}
	getName(result){
		//sends a name
		return result.name
	}
	getHP(result){
		return result.stats[5].base_stat
	}
	getAttack(result){
		return result.stats[4].base_stat
	}
	getDefense(result){
		return result.stats[3].base_stat
	}
	getAbilities(result){
		let abilityArray = [];
		for(let i = 0 ; i< result.abilities.length;i++){
			abilityArray.push(result.abilities[i].ability.name)
		}
		return abilityArray;
	}
	getType(result){
		var types= [];
		for(let i = 0; i< result.types.length; i++){
			types.push(result.types[i].type.name)
		}
		return types
	}
}

class Trainer{
	constructor(pokemon1,pokemon2,pokemon3){
		this.pokemons = [pokemon1, pokemon2, pokemon3];
	}
	nameAll(){
		for(let i = 0; i<pokemons.length; i++){
			this.pokemons[i].name;
		}
	}
	selectPokemon(name){
		var index = this.pokemons.name.indexOf('name');

	}
}

var bug = ['bug',['dark','grass','psychic'],['fire','flying','rock']];
var dark = ['dark',['ghost','psychic'],['bug','fairy','fighting']];
var dragon = ['dragon',['dragon'],['dragon','fairy','ice']];
var electric =['electric',['flying','water'],['ground']];
var fairy = ['fairy',['dark','dragon','fighting'],['posion','steel']];
var fighting = ['fighting',['dark','ice','normal','rock','steel'],['fairy','flying','psychic']]
var fire = ['fire',['bug','grass','ice','steel'],['ground','rock','water']];
var flying = ['flying',['bug','fighting','grass'],['electric','ice','rock']];
var ghost = ['ghost',['ghost','psychic'],['dark','ghost']];
var grass = ['grass',['ground','rock','water'],['bug','fire','flying','ice','poison']];
var ground = ['ground',['electric','fire','poison','rock','steel'],['grass','ice','water']];
var ice = ['ice',['dragon','flying','grass','ground'],['fighting','fire','rock','steel']];
var normal = ['normal',['none'],['fighting']];
var poison = ['poison',['fairy','grass'],['ground','psychic']];
var psychic = ['psychic',['fighting','poison'],['bug','dark','ghost']];
var rock = ['rock',['bug','fire','flying','ice'],['fighting','grass','ground']]
var water = ['water',['fire','ground','rock'],['electric','grass']];

var allPokemonTypes = [bug,dark,dragon,electric,fairy,fighting,fire,flying,ghost,grass,ground,ice,normal,poison,psychic,rock,water];


var blastoise = new Pokemon(9);
var kadabra = new Pokemon(64);
var arcanine = new Pokemon(59);



var nidoran = new Pokemon(32);
var nidorino = new Pokemon(33);
var nidoking = new Pokemon(34);



var empoleon = new Pokemon(395);
var arceus = new Pokemon(493);
var charizard = new Pokemon(6);
var mannyTrainer = new Trainer(blastoise, kadabra, arcanine);
var kyleTrainer = new Trainer(empoleon,arceus, charizard);
var adamTrainer = new Trainer(nidoran,nidorino,nidoking);

var adam = document.getElementById('adam');
var kyle = document.getElementById('kyle');
var manny = document.getElementById('manny');
var picture = document.getElementById('pokemonImage');

var leftButt = document.getElementById('left');
var rightButt = document.getElementById('right');
var trainerInfo = document.getElementById('trainerInfo');
var pokemonInfo = document.getElementById('pokemonInfo');
var trainerImage = document.getElementById('trainerImage');
var pokemonName = document.getElementById('pokemonName');


}

function arceus() {
	pokemonImage.style.backgroundImage = "url('library/images/arceus.gif')"
	let hp = document.createElement('div')
	hp.innerHTML = 'HP: ' + arceus.hp;
	let attack = document.createElement('div')
	attack.innerHTML = 'attack: ' + arceus.attack;
	let defense = document.createElement('div')
	defense.innerHTML = 'HP: ' + arceus.hp;
	let  = document.createElement('div')
	for(let i = 0;i<pokemon.abilitiesl; i++){
		abilities.innerHTML += arceus.abilities[i] + " "

}
function charizard(){
	pokemonImage.style.backgroundImage = "url('library/images/charizard.gif')"
	let hp = document.createElement('div')
	hp.innerHTML = 'HP: ' + charizard.hp;
	let attack = document.createElement('div')
	attack.innerHTML = 'attack: ' + charizard.attack;
	let defense = document.createElement('div')
	defense.innerHTML = 'HP: ' + charizard.hp;
	let  = document.createElement('div')
	for(let i = 0;i<pokemon.abilitiesl; i++){
		abilities.innerHTML += charizard.abilities[i] + " "
}










function adamTrainer(){
	trainerInfo.innerHTML = ''
	trainerInfo.innerHTML = 'James is a common member of Team Rocket. James is part of a unit made up of himself, Jessie, and Meowth. He is close friends with the two of them, and is known to make personal sacrifices in order to keep them safe'
	trainerImage.style.backgroundImage = "url(" +'library/images/james.jpeg'+")"
}

function nidoran(){
	pokemonImage.style.backgroundImage = nidoran.sprites[1];
	var hp = document.createElement('div');
	hp.innerHTML = "HP: " + nidoran.hp;
	var attack = document.createElement('div');
	attack.innerHTML = "Attack: "+ nidoran.attack;
	var defense = document.createElement('div');
	defense.innerHTML = "Defense: " + nidoran.defense;
	var abilities = document.createElement('div');
	abilities.innerHTML = "Abilities: ";
	for(let i = 0;i<pokemon.abilitiesl; i++){
		abilities.innerHTML += nidoran.abilities[i] + " "
	}

	pokemonInfo.appendChild('hp');
	pokemonInfo.appendChild('attack');
	pokemonInfo.appendChild('defense');
	pokemonInfo.appendChild('abilities');
}

function nidorino(){
	pokemonImage.style.backgroundImage = nidorino.sprites[1];
	var hp = document.createElement('div');
	hp.innerHTML = "HP: " + nidorino.hp;
	var attack = document.createElement('div');
	attack.innerHTML = "Attack: "+ nidorino.attack;
	var defense = document.createElement('div');
	defense.innerHTML = "Defense: " + nidorino.defense;
	var abilities = document.createElement('div');
	abilities.innerHTML = "Abilities: ";
	for(let i = 0;i<pokemon.abilitiesl; i++){
		abilities.innerHTML += nidorino.abilities[i] + " "
	}

	pokemonInfo.appendChild('hp');
	pokemonInfo.appendChild('attack');
	pokemonInfo.appendChild('defense');
	pokemonInfo.appendChild('abilities');
}

function nidoking(){
	pokemonImage.style.backgroundImage = nidoking.sprites[1];
	var hp = document.createElement('div');
	hp.innerHTML = "HP: " + nidoking.hp;
	var attack = document.createElement('div');
	attack.innerHTML = "Attack: "+ nidoking.attack;
	var defense = document.createElement('div');
	defense.innerHTML = "Defense: " + nidoking.defense;
	var abilities = document.createElement('div');
	abilities.innerHTML = "Abilities: ";
	for(let i = 0;i<pokemon.abilitiesl; i++){
		abilities.innerHTML += nidoking.abilities[i] + " "
	}

	pokemonInfo.appendChild('hp');
	pokemonInfo.appendChild('attack');
	pokemonInfo.appendChild('defense');
	pokemonInfo.appendChild('abilities');
}























function addMannyTrainer(){
	trainerInfo.innerHTML =" "
	trainerImage.style.backgroundImage = "url('library/images/giovanni.jpeg')"
	trainerInfo.innerHTML =  'Manny Giovanni'
	var extra
	trainerInfo.innerHTML = 'A slick dude who has an even slicker attitude.'
}

function getBlastoise(){
	pokemonInfo.innerHTML = " "
	pokemon.style.backgroundImage = "url('"+blastoise.sprites[1]+"')"
	var hp = document.createElement("DIV");
	hp.innerHTML = "HP: " +blastoise.hp;
	var attack = document.createElement("DIV");
	attack.innerHTML = "Attack: "+blastoise.attack;
	var defense = document.createElement("DIV");
	defense.innerHTML = "Defense: "+blastoise.defense;
	var abilities = document.createElement("DIV");
	abilities.innerHTML = "Abilites: ";
	for(let i = 0;i<pokemons.abilities;i++){
		abilities.innerHTML += blastoise.abilities[i] + " "
	}
	pokemonInfo.appendChild(hp);
	pokemonInfo.appendChild(attack);
	pokemonInfo.appendChild(defense);
	pokemonInfo.appendChild(abilities);
}
function getKadabra(){
	pokemonInfo.innerHTML = " "
	pokemon.style.backgroundImage = "url('"+kadabra.sprites[1]+"')"
	var hp = document.createElement("DIV");
	hp.innerHTML = "HP: " +kadabra.hp;
	var attack = document.createElement("DIV");
	attack.innerHTML = "Attack: "+kadabra.attack;
	var defense = document.createElement("DIV");
	defense.innerHTML = "Defense: "+kadabra.defense;
	var abilities = document.createElement("DIV");
	abilities.innerHTML = "Abilites: ";
	for(let i = 0;i<pokemons.abilities;i++){
		abilities.innerHTML += kadabra.abilities[i]+ " "
	}
	pokemonInfo.appendChild(hp);
	pokemonInfo.appendChild(attack);
	pokemonInfo.appendChild(defense);
	pokemonInfo.appendChild(abilities);
}
function getArcanine(){
	pokemonInfo.innerHTML = " "
	pokemon.style.backgroundImage = "url('"+arcanine.sprites[1]+"')"
	var hp = document.createElement("DIV");
	hp.innerHTML = "HP: " +arcanine.hp;
	var attack = document.createElement("DIV");
	attack.innerHTML = "Attack: "+arcanine.attack;
	var defense = document.createElement("DIV");
	defense.innerHTML = "Defense: "+arcanine.defense;
	var abilities = document.createElement("DIV");
	abilities.innerHTML = "Abilites: ";
	for(let i = 0;i<pokemons.abilities;i++){
		abilities.innerHTML += arcanine.abilities[i] + " "
	}
	pokemonInfo.appendChild(hp);
	pokemonInfo.appendChild(attack);
	pokemonInfo.appendChild(defense);
	pokemonInfo.appendChild(abilities);
}


// adam.addEventListener('click',)
