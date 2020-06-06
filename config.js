
  function randomize(){


     //text.style.display = "block";

    playerclass = chooseclass(1, yesAmiibo(), yesEnemy(), yesBroken());
    //setsprite(playerclass);
    //document.write(chooseclass(1))

    //htmlify("Saber");

    //docuemnt.removeElement("p");

    document.getElementById("p1").innerHTML = playerclass;
    var child = document.getElementById("p1");
    /*
    var para = document.createElement("p");
    var node = document.createTextNode(playerclass);
    para.appendChild(node);
    parent.replaceChild(para,child);
    */

    return ;

  }

  function htmlify(pokemon) {


      var title = pokemon;

      var out = pokemon;


      out += "</li>";



      return out;
  }


//include amiibos

/*
if (chosen.isMega) {
    eligiblePokemon = removeMegas(eligiblePokemon);
}
*/
function yesAmiibo() {return document.getElementById("amiibo").checked;}
function yesEnemy() {return document.getElementById("enemy").checked;}

function yesBroken() {return document.getElementById("busted").checked;}

  function chooseclass(level, yesamiibo, yesenemy, yesbroken){
        //Class data

        var isBroken = yesbroken;
        var isEnemy = yesenemy;
        var isAmiibo = yesamiibo;


        //console.log("isBroken:" + yesBroken);
        //Amiibo
        var amiibo = ["Lord (Marth)", "Lord (Corrin)", "Lord(Roy)", "Lord(Lucina)", "", "Hero (Ike)", "Tactitian (Robin)"];
        //Classes lv 1 and 2
        var oneandtwo = ["Mage", "Pegasus Knight", "Cleric", "Mage"];
        //Alm and Celica
        var almcelica1 = ["Fighter", "Priestess (Celica)"]
        var almcelica2 = ["Hero (Alm)", "Princess"]
        var almcelica3 = ["Conqueror", "Rigain"]
        var levelone = ["Villager","Archer", "Fighter", "Cavalier", "Soldier", "Mercenary","Boy/Girl" ];
        var leveltwo = ["Myrmidon", "Sniper", "Paladin", "Knight", ];
        var levelthree = ["Dread Fighter", "Baron", "Bow Knight", "Gold Knight"];
        var onetwothree = ["Falcon Knight", "Saint", "Sage", "Priestess"];
        var enemyflex = ["Brigand", "Arcanist", "Mogall", "Cantor"];
        var enemytwo = ["Cantor", "", ""];
        var enemythree = ["Mila/Duma Apostole", "Dagon", "Fire Dragon", "Deimos", ""];
        var overclass = ["Harrier", "Skogul", "Yasha", "Exemplar", "Guru", "Enchantress", "Oliphantier", "Spartan"];



        //Broken Classes -- Only use if you want a fucked playthrough
        var broken = ["Fell Dragon", "God", "Player Boat", "Enemy Boat"];

        var classledger = [];

        //Base options
        if(level == 1){
          classledger = levelone;
        }
        if(level == 2){
          classledger = leveltwo;
        }
        if(level == 3){
          classledger = levelthree;
        }

        if(isAmiibo == true){for (i = 0; i < amiibo.length; i++){classledger.push(amiibo[i]);}}

        if(isEnemy == true){for (i = 0; i < enemyflex.length; i++){classledger.push(enemyflex[i]);}}

        if(isBroken == true){for (i = 0; i < broken.length; i++){classledger.push(broken[i]);}}


        console.log(classledger);

        return classledger[randint(classledger.length)];

  }


  function randint(max){
    return Math.floor(Math.random()*max);
  }

  function getSpritePath(pclass) {
      var path = "img/";
      var name = pclass;
      return path + name;
  }

/*
//notmine
  function generateRandom() {
      markLoading(true);
      var options = getOptions();
      getEligiblePokemon(options).then(function(eligible) {
          return chooseRandom(eligible, options)
      }).then(function(generated) {
          return htmlifyPokemonArray(generated, options)
      }).then(function(html) {
          document.getElementById("results").innerHTML = html;
      }).finally(function() {
          markLoading(false);
          logOptionsToAnalytics(options);
      });
  }

  function markLoading(isLoading) {
      document.getElementById("controls").className = isLoading ? "loading" : "";
  }

  function getOptions() {
      return {
          n: Number(document.getElementById("n").value),
          region: document.getElementById("region").value,
          type: document.getElementById("type").value,
          ubers: document.getElementById("ubers").checked,
          nfes: document.getElementById("nfes").checked,
          sprites: document.getElementById("sprites").checked,
          natures: document.getElementById("natures").checked,
          forms: document.getElementById("forms").checked
      };
  }
  var cachedOptionsJson;
  var cachedEligiblePokemon;

  function getEligiblePokemon(options) {
      var optionsJson = JSON.stringify(options);
      if (cachedOptionsJson == optionsJson) {
          return Promise.resolve(cachedEligiblePokemon);
      } else {
          return getPokemonInRegion(options).then(function(pokemonInRegion) {
              return filterByOptions(pokemonInRegion, options);
          }).then(function(eligiblePokemon) {
              cachedOptionsJson = optionsJson;
              cachedEligiblePokemon = eligiblePokemon;
              return eligiblePokemon;
          });
      }
  }

  function getPokemonInRegion(options) {
      return fetch("dex/" + options.region + ".json").then(function(r) {
          return r.json()
      });
  }

  function filterByOptions(pokemonInRegion, options) {
      return pokemonInRegion.filter(function(pokemon) {
          if (options.forms && "forms" in pokemon) {
              pokemon.forms = filterByOptions(pokemon.forms, options);
              return pokemon.forms.length > 0;
          }
          if (options.type != "all" && !pokemon.types.includes(options.type)) {
              return false;
          }
          if (!options.ubers && pokemon.isUber) {
              return false;
          }
          if (!options.nfes && pokemon.isNfe) {
              return false;
          }
          return true;
      });
  }

  function chooseRandom(eligiblePokemon, options) {
      var chosenArray = [];
      var eligiblePokemon = JSON.parse(JSON.stringify(eligiblePokemon));
      while (eligiblePokemon.length > 0 && chosenArray.length < options.n) {
          var chosen = removeRandomElement(eligiblePokemon);
          if (options.forms && chosen.forms) {
              var randomForm = removeRandomElement(chosen.forms);
              randomForm.id = chosen.id;
              chosen = randomForm;
              if (chosen.isMega) {
                  eligiblePokemon = removeMegas(eligiblePokemon);
              }
              if (chosen.isGigantamax) {
                  eligiblePokemon = removeGigantamaxes(eligiblePokemon);
              }
          }
          chosenArray.push(chosen);
      }
      return shuffle(chosenArray);
  }

  function removeMegas(pokemonArray) {
      return pokemonArray.filter(function(pokemon) {
          if ("forms" in pokemon) {
              pokemon.forms = pokemon.forms.filter(function(form) {
                  return !form.isMega
              });
              return pokemon.forms.length > 0;
          } else {
              return true;
          }
      });
  }

  function removeGigantamaxes(pokemonArray) {
      return pokemonArray.filter(function(pokemon) {
          if ("forms" in pokemon) {
              pokemon.forms = pokemon.forms.filter(function(form) {
                  return !form.isGigantamax
              });
              return pokemon.forms.length > 0;
          } else {
              return true;
          }
      });
  }

  function htmlifyPokemonArray(generatedPokemon, options) {
      var output = "<ol>";
      for (i = 0; i < generatedPokemon.length; i++) {
          output += htmlifyPokemon(generatedPokemon[i], options);
      }
      output += "</ol>";
      return output;
  }

  function htmlifyPokemon(pokemon, options) {
      var shiny = Math.floor(Math.random() * 65536) < 16;
      var title = (shiny ? "Shiny " : "") + pokemon.name;
      if (options.sprites) {
          var out = '<li title="' + title + '">';
      } else {
          var out = '<li class="imageless">';
      }
      if (options.natures) {
          out += '<span class="nature">' + generateNature() + "</span> ";
      }
      out += pokemon.name;
      if (shiny) {
          out += ' <span class="shiny">&#9733;</span>';
      }
      if (options.sprites) {
          var sprite = getSpritePath(pokemon, shiny);
          out += '<div class="wrapper"><img src="' + sprite + '" alt="' + title + '" title="' + title + '" /></div>';
      }
      out += "</li>";
      return out;
  }

  function getSpritePath(pokemon, shiny) {
      var path = shiny ? PATH_TO_SHINY_SPRITES : PATH_TO_SPRITES;
      var name = pokemon.id;
      if (pokemon.spriteSuffix) {
          name = name + "-" + pokemon.spriteSuffix;
      }
      return path + name + SPRITE_EXTENTION;
  }

  function generateNature() {
      return getRandomElement(NATURES);
  }
  const NATURES = ["Adamant", "Bashful", "Bold", "Brave", "Calm", "Careful", "Docile", "Gentle", "Hardy", "Hasty", "Impish", "Jolly", "Lax", "Lonely", "Mild", "Modest", "Na&iuml;ve", "Naughty", "Quiet", "Quirky", "Rash", "Relaxed", "Sassy", "Serious", "Timid"];

  function getRandomElement(arr) {
      return arr[randomInteger(arr.length)];
  }

  function removeRandomElement(arr) {
      return arr.splice(randomInteger(arr.length), 1)[0];
  }

  function shuffle(arr) {
      for (var i = arr.length - 1; i > 0; i--) {
          var j = randomInteger(i + 1);
          var temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
      }
      return arr;
  }

  function randomInteger(maxExclusive) {
      return Math.floor(Math.random() * maxExclusive);
  }
  */
