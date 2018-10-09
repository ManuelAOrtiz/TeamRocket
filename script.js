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






















function addMannyTrainer(){
	trainerInfo.innerHTML =" "
	trainerImage.style.backgroundImage = "url('library/images/giovanni.jpeg')"
	trainerInfo.innerHTML =  'Manny Giovanni'
	var extra 
	trainerInfo.innerHTML = 'A slick dude who has an even slicker attitude.'
}

function blastoise(){
	pokemon.style.backgroundImage = "url('"+blastoise.sprites[1]+"')"
}


// adam.addEventListener('click',)
