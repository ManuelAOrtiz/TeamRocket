
// hp - integer
// attack - integer
// defense - integer
// abilities - array of strings


class Pokemon{
  constructor(result){
  this.name = result.name;
  this.number = result.id;
  this.hp = result.stats[5].base_stat;
  this.attack = result.stats[4].base_stat;
  this.defense = result.stats[3].base_stat;
  this.abilities = [];
  }

  for(let i = 0; i < results.)
}

class Trainer{
  constructor(name){
    this.name = name;
  }

}





/* -------------------------------------------- Ajax calls ----------------------------------------------------------*/

function ajax1(){
  $.ajax({url: "https://pokeapi.co/api/v2/pokemon/395/",
          success: function(result){
          // console.log(result)
          console.log(result)
          let empoleon = new Pokemon(result)
          console.log(empoleon.name)
        }
  });

}

function ajax2(){
        $.ajax({url: "https://pokeapi.co/api/v2/pokemon/493/",
                success: function(result){
                // console.log(result)

                console.log(result)
            }
          });
      }
function ajax3(){
  $.ajax({url: "https://pokeapi.co/api/v2/pokemon/6/",
          success: function(result){
          // console.log(result)
          console.log(result)
      }});
}

window.onload = function(){
  ajax1()
  ajax2()
  ajax3()
}
