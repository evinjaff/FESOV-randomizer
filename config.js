

var almchars = require('data/alm.js').arr;

  function randomize(){

    var e = document.getElementById("characters");
    var charname = e.options[e.selectedIndex].text;

    //console.log("Name:" + charname)


    var e = document.getElementById("tiers");
    var level = e.options[e.selectedIndex].value;

    console.log("tier:" + level)

     //text.style.display = "block";

    playerclass = chooseclass(level, yesAmiibo(), yesEnemy(), yesBroken(), yesAlm(), yesTier1());
    //setsprite(playerclass);
    //document.write(chooseclass(1))

    //docuemnt.getElementById('characters');

    htmladd(charname);
    //var text = input.options[input.selectedIndex].text; // returns the text ie one / two etc
    //var value = input.value; // returns the value ie 1 / 2 / 3 etc

    //console.log(value);


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

  function htmladd(name) {

    newclass = spacefixer(playerclass);

    //console.log("new class is:" + newclass);
    //Write a space fixer for bow knights - Done!

    var _img = document.getElementById('id1');
    var newImg = new Image;
    newImg.onload = function() {
    _img.src = this.src;
    }

    var status = 0;

    var exists = checkImage('img/FE15_' + newclass + '_(' + name + ').gif', function(){
      //console.log("good");
      newImg.src = 'img/FE15_' + newclass + '_(' + name + ').gif';
    },
      function(){
        //console.log("not found");
        newImg.src = 'img/Generic' + newclass + '.gif';
      });




    console.log("exists is:" + status);
    newImg.src = 'img/FE15_' + playerclass + '_(' + name + ').gif';



      return ;
  }

  function checkImage(imageSrc, good, bad) {
    var img = new Image();
    img.onload = good;
    img.onerror = bad;
    img.src = imageSrc;

    return

  }

function spacefixer(name){
  //error type = new error(TypeError);

  var newname = name;
  try{
  newname = name.replace(" ","_");
}
catch(err){

}

  return newname;
}
//include amiibos

/*
if (chosen.isMega) {
    eligiblePokemon = removeMegas(eligiblePokemon);
}
*/
// yesTier1 means Mages at 1
function yesAmiibo() {return document.getElementById("amiibo").checked;}
function yesEnemy() {return document.getElementById("enemy").checked;}
function yesAlm() {return document.getElementById("alm").checked;}

function yesTier1() {return document.getElementById("one").checked;}

function yesBroken() {return document.getElementById("busted").checked;}

  function chooseclass(level, yesamiibo, yesenemy, yesbroken, yesalm, yestier1){
        //Class data

        var isBroken = yesbroken;
        var isEnemy = yesenemy;
        var isAmiibo = yesamiibo;
        var isAlm = yesalm;
        var isOne = yestier1;


        //console.log("isBroken:" + yesBroken);
        //Amiibo
        var amiibo = ["Lord (Marth)", "Lord (F. Corrin)", "Lord (Roy)", "Lord (Lucina)", "Hero (Ike)", "Tactitian (Robin)"];
        //Classes lv 1 and 2
        var oneandtwo = ["Mage (Male)", "Pegasus Knight", "Cleric", "Mage (Female)"];
        //Alm and Celica
        var almcelica1 = ["Fighter", "Priestess (Celica)"]
        var almcelica2 = ["Hero (Alm)", "Princess"]
        var almcelica3 = ["Conqueror", "Rigain"]

        var levelone = ["Villager","Archer", "Cavalier", "Soldier", "Mercenary","Boy", "Girl"];
        var leveltwo = ["Myrmidon", "Sniper", "Paladin", "Knight", ];

        var levelthree = ["Dread Fighter", "Baron", "Bow Knight", "Gold Knight"];
        var onetwothree = ["Falcon Knight", "Saint", "Sage", "Priestess"];

        //Untiered enemy classes
        var enemyflex = ["Brigand", "Arcanist", "Mogall", "Witch"];
        //Tier Two enemy classes
        var enemytwo = ["Cantor", "Vestal"];

        var enemythree = ["Mila/Duma Apostole", "Dagon", "Fire Dragon", "Deimos"];
        var overclass = ["Harrier", "Skogul", "Yasha", "Exemplar", "Guru", "Enchantress", "Oliphantier", "Spartan"];



        //Broken Classes -- Only use if you want a fucked playthrough
        var broken = ["Fell Dragon", "God", "Player Boat", "Enemy Boat"];

        var classledger = [];

        //Base options
        if(level == 1){
          classledger = levelone;
          arraypush(oneandtwo, classledger);



        }
        if(level == 2){
          classledger = leveltwo;
          console.log('isEnemy: ' + isEnemy);
          if(isOne == true){arraypush(onetwothree, classledger);}
          else{arraypush(oneandtwo, classledger);}

          //if(isEnemy == true){for (i = 0; i < enemytwo.length; i++){classledger.push(enemytwo[i]);}}
          //arraypush(enemytwo, classledger);
          if(isEnemy == true){arraypush(enemytwo, classledger);}


        }
        if(level == 3){
          classledger = levelthree;
          arraypush(onetwothree, classledger);
          if(isEnemy == true){arraypush(enemythree, classledger);}
        }
        if(level == 4){
          classledger = overclass;
        }

        //Universal Classes

        if(isAmiibo == true){arraypush(amiibo, classledger);}
        if(isEnemy == true){arraypush(enemyflex, classledger);}
        if(isBroken == true){arraypush(broken, classledger);}

        if(isAlm == true){
          if(level <= 2){arraypush(almcelica1, classledger);}
          if(level == 3){arraypush(almcelica2, classledger);}
          if(level == 4){arraypush(almcelica3, classledger);}

        }



        console.log(classledger);

        return classledger[randint(classledger.length)];

  }

function arraypush(array, other){
  for (i = 0; i < array.length; i++){other.push(array[i]);}
}

  function randint(max){
    return Math.floor(Math.random()*max);
  }

  function getSpritePath(pclass) {
      var path = "img/";
      var name = pclass;
      return path + name;
  }

  function AlmRoute(){

      //console.log("Alm");

      //var routechars = ["Alm", "Lukas", "Tobin", "Kliff", "Faye", "Gray"];

/*
      const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }
*/
      for(var i=2;i<almchars.length+2;i++){
      // Test code: var i=5;
        cstring = almchars[i-2];
        console.log("Character: " + cstring);
        var myclass = chooseclass("1", yesAmiibo(), yesEnemy(), yesBroken(), yesAlm(), yesTier1());
        var id = 'id'+ i.toString();

        console.log(id);
        htmlify(cstring, "id8", myclass);
        //sleep(5000);
    }





  }

  function htmlify(name, id, theclass) {

    var myclass = theclass;

    var newclass = spacefixer(theclass);

    var printclass = theclass;

    //console.log("new class is:" + newclass);
    //Write a space fixer for bow knights - Done!

    //var _img = document.getElementById('pic1');


      var para = document.createElement("p");
      //var node = document.createTextNode("This is new.");
      var aclass = document.createTextNode(theclass);
      var id = document.createTextNode(name + ": ");
      var br = document.createElement("br");


      var img = document.createElement("img");



      console.log("id: " + id);
      img.id = id;
      console.log("img.id: " + img.id);

      img.src = 'img/FE15_' + newclass + '_(' + name + ').gif';

      console.log("does: "+ 'img/FE15_' + newclass + '_(' + name + ').gif' + "exist?");
      //doesFileExist('img/FE15_' + newclass + '_(' + name + ').gif')

      //var truthtable = false;

      doesexist('img/FE15_' + newclass + '_(' + name + ').gif', function(){ img.src = 'img/FE15_' + newclass + '_(' + name + ').gif'; }, function(){ img.src = 'img/Generic' + newclass + '.gif' } );

        console.log(name + "'s class is: " + newclass + " and img is: ");



      //img = newImg.src;
      //img.src = 'img/FE15_' + newclass + '_(' + name + ').gif';

      para.appendChild(id);
      para.appendChild(aclass);
      para.appendChild(br);
      para.appendChild(img);

      var element = document.getElementById("div2");
      element.appendChild(para);


    console.log("exists is:" + status);

  }

  function doesexist(imageSrc, good, bad) {
  var img = new Image();
  img.onload = good;
  img.onerror = bad;
  img.src = imageSrc;
  }

  //doesexist("foo.gif", function(){ alert("good"); }, function(){ alert("bad");} );



/*var exists = checkImage('img/FE15_' + newclass + '_(' + name + ').gif', function(){
  //console.log("good");
  newImg.src = 'img/FE15_' + newclass + '_(' + name + ').gif';
},
  function(){
    //console.log("not found");
    newImg.src = 'img/Generic' + newclass + '.gif';
  });

    newImg.src = 'img/FE15_' + theclass + '_(' + name + ').gif';

    document.getElementById("h2test").innerHTML = theclass;
    var child = document.getElementById('p2');


      return ;
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
