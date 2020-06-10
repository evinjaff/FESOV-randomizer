
// false
//console.log(isValid('abc.js'));
//var almchars = ('data/alm.js').arr;
//Define Global Objects

var script = document.createElement('script');

script.src = 'https://code.jquery.com/jquery-3.5.1.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

var almdone = false;
var celicadone = false;

var almchars = [Alm, Lukas, Gray, Tobin, Kliff, Faye, Silque, Clair, Clive, Forsyth, Python, Luthier, Mathilda, Delthea, Tatiana, Zeke, Mycen]

var Alm = {
    name: "Alm",
    gender: "Male",
    tier: '1'
}
var Lukas = {
    name: "Lukas",
    gender: "Male",
    tier: '1'
}
var Gray = {
    name: "Gray",
    gender: "Male",
    tier: '1'
}
var Tobin = {
    name: "Tobin",
    gender: "Male",
    tier: '1'
}
var Kliff = {
    name: "Kliff",
    gender: "Male",
    tier: '1'
}
var Faye = {
    name: "Faye",
    gender: "Female",
    tier: '1'
}
var Silque = {
    name: "Silque",
    gender: "Female",
    tier: '1'
}
var Clair = {
    name: "Clair",
    gender: "Female",
    tier: '1'
}
var Clive = {
    name: "Clive",
    gender: "Male",
    tier: '1'
}
var Forsyth = {
    name: "Forsyth",
    gender: "Male",
    tier: '1'
}
var Python = {
    name: "Python",
    gender: "Male",
    tier: '1'
}
var Luthier = {
    name: "Luthier",
    gender: "Male",
    tier: '1'
}
var Mathilda = {
    name: "Mathilda",
    gender: "Female",
    tier: '2'
}
var Delthea = {
    name: "Delthea",
    gender: "Female",
    tier: '1'
}
var Tatiana = {
    name: "Tatiana",
    gender: "Female",
    tier: '2'
}
var Zeke = {
    name: "Zeke",
    gender: "Female",
    tier: '3'
}
var Mycen = {
    name: "Mycen",
    gender: "Male",
    tier: '3'
}

var celicachars = [Celica, Mae, Boey, Genny, Saber, Valbar, Kamui, Leon, Palla, Catria, Atlas, Jesse, Sonya, Deen, Est, Nomah, Conrad];
var Celica = {
    name: "Celica",
    gender: "Female",
    tier: '1'
}
var Mae = {
    name: "Mae",
    gender: "Female",
    tier: '1'
}
var Boey = {
    name: "Boey",
    gender: "Male",
    tier: '1'
}
var Genny = {
    name: "Genny",
    gender: "Female",
    tier: '1'
}
var Saber = {
    name: "Saber",
    gender: "Male",
    tier: '1'
}
var Valbar = {
    name: "Valbar",
    gender: "Male",
    tier: '2'
}
var Kamui = {
    name: "Kamui",
    gender: "Male",
    tier: '1'
}
var Leon = {
    name: "Leon",
    gender: "Male",
    tier: '1'
}
var Palla = {
    name: "Palla",
    gender: "Female",
    tier: '1'
}
var Catria = {
    name: "Catria",
    gender: "Female",
    tier: '1'
}
var Atlas = {
    name: "Atlas",
    gender: "Male",
    tier: '1'
}
var Jesse = {
    name: "Jesse",
    gender: "Male",
    tier: '1'
}
var Sonya = {
    name: "Sonya",
    gender: "Female",
    tier: '1'
}
var Deen = {
    name: "Deen",
    gender: "Male",
    tier: '2'
}
var Est = {
    name: "Est",
    gender: "Female",
    tier: '1'
}
var Nomah = {
    name: "Nomah",
    gender: "Male",
    tier: '2'
}
var Conrad = {
    name: "Conrad",
    gender: "Male",
    tier: '2'
}

function randomize() {

    var e = document.getElementById("characters");
    var charname = e.options[e.selectedIndex].text;

    //console.log("Name:" + charname)


    var e = document.getElementById("tiers");
    var level = e.options[e.selectedIndex].value;

    //console.log("tier:" + level)

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

    return;

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

    var exists = checkImage('img/FE15_' + newclass + '_(' + name + ').gif', function() {
            //console.log("good");
            newImg.src = 'img/FE15_' + newclass + '_(' + name + ').gif';
        },
        function() {
            //console.log("not found");
            newImg.src = 'img/Generic' + newclass + '.gif';
        });




    console.log("exists is:" + status);
    newImg.src = 'img/FE15_' + playerclass + '_(' + name + ').gif';



    return;
}

function checkImage(imageSrc, good, bad) {
    var img = new Image();
    img.onload = good;
    img.onerror = bad;
    img.src = imageSrc;

    return;

}

function spacefixer(name) {
    //error type = new error(TypeError);

    var newname = name;
    try {
        newname = name.replace(" ", "_");
    } catch (err) {

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
function yesAmiibo() {
    return document.getElementById("amiibo").checked;
}

function yesEnemy() {
    return document.getElementById("enemy").checked;
}

function yesAlm() {
    return document.getElementById("alm").checked;
}

function yesTier1() {
    return document.getElementById("one").checked;
}

function yesBroken() {
    return document.getElementById("busted").checked;
}

function chooseclass(level, yesamiibo, yesenemy, yesbroken, yesalm, yestier1) {
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

    var levelone = ["Villager", "Archer", "Cavalier", "Soldier", "Mercenary", "Boy", "Girl"];
    var leveltwo = ["Myrmidon", "Sniper", "Paladin", "Knight", ];

    var levelthree = ["Dread Fighter", "Baron", "Bow Knight", "Gold Knight"];
    var onetwothree = ["Falcon Knight", "Saint", "Sage", "Priestess"];

    //Untiered enemy classes
    var enemyflex = ["Brigand", "Arcanist", "Mogall", "Witch"];
    //Tier Two enemy classes
    var enemytwo = ["Cantor", "Vestal"];

    var enemythree = ["Mila Apostole", "Duma Apostole", "Dagon", "Fire Dragon", "Guardian"];
    var overclass = ["Harrier", "Skogul", "Yasha", "Exemplar", "Guru", "Enchantress", "Oliphantier", "Spartan"];



    //Broken Classes -- Only use if you want a fucked playthrough
    var broken = ["Fell Dragon", "God", "Player Boat", "Enemy Boat", "Gargoyle", "Deathgoyle", "Gardua", "Lich", "Deimos", "Titan", "Entombed", "Necodragon", "Fafnir", ];

    var classledger = [];

    //Base options
    if (level == 1) {
        classledger = levelone;
        arraypush(oneandtwo, classledger);



    }
    if (level == 2) {
        classledger = leveltwo;
        //console.log('isEnemy: ' + isEnemy);
        if (isOne == true) {
            arraypush(onetwothree, classledger);
        } else {
            arraypush(oneandtwo, classledger);
        }

        //if(isEnemy == true){for (i = 0; i < enemytwo.length; i++){classledger.push(enemytwo[i]);}}
        //arraypush(enemytwo, classledger);
        if (isEnemy == true) {
            arraypush(enemytwo, classledger);
        }


    }
    if (level == 3) {
        classledger = levelthree;
        arraypush(onetwothree, classledger);
        if (isEnemy == true) {
            arraypush(enemythree, classledger);
        }
    }
    if (level == 4) {
        classledger = overclass;
    }

    //Universal Classes

    if (isAmiibo == true) {
        arraypush(amiibo, classledger);
    }
    if (isEnemy == true) {
        arraypush(enemyflex, classledger);
    }
    if (isBroken == true) {
        arraypush(broken, classledger);
    }

    if (isAlm == true) {
        if (level <= 2) {
            arraypush(almcelica1, classledger);
        }
        if (level == 3) {
            arraypush(almcelica2, classledger);
        }
        if (level == 4) {
            arraypush(almcelica3, classledger);
        }

    }



    //console.log(classledger);

    return classledger[randint(classledger.length)];

}

function arraypush(array, other) {
    for (i = 0; i < array.length; i++) {
        other.push(array[i]);
    }
}

function randint(max) {
    return Math.floor(Math.random() * max);
}

function getSpritePath(pclass) {
    var path = "img/";
    var name = pclass;
    return path + name;
}

function Route(option) {
    //style.display = 'none'
    //console.log("Alm");

    //var routechars = ["Alm", "Lukas", "Tobin", "Kliff", "Faye", "Gray"];

    /*
          const sleep = (milliseconds) => {
            return new Promise(resolve => setTimeout(resolve, milliseconds))
          }
    */
    var celicabutton = document.getElementById("CelicaButton");
    var almbutton = document.getElementById("AlmButton");
    var bothbutton = document.getElementById("Both");
    if (yesOverclass() == true) {
        var final = 5;
    } else {
        var final = 4;
    }

    if (option == 'Alm') {
      //isValid('config.js');
      //console.log("Celica!")

      for (var i = 2; i < almchars.length + 2; i++) {
          // Test code: var i=5;
          csstring = almchars[i - 2].name;
          var id = document.createTextNode(csstring + ": ");
          var tablehead = document.createElement("table");
          var row = document.createElement("tr");

          document.getElementById("div2").appendChild(id);
          document.getElementById("div2").appendChild(tablehead);
          document.getElementById("div2").appendChild(row);


          var arr = [];

          for (var j = almchars[i - 2].tier; j < final; j++) {

              var item = document.createElement("td");
              //item.innerHTML("test");
              document.getElementById("div2").appendChild(item);

              cstring = almchars[i - 2].name;
              //console.log("Character: " + cstring);
              //console.log(cstring + " is: " + celicachars[i-2].tier)

              var myclass = chooseclass(j, yesAmiibo1(), yesEnemy1(), yesBroken1(), yesAlm1(), yesTier11());

              arr[j] = myclass;
              var id = 'id' + i.toString();

              //console.log(id);
              //htmlify(cstring, "id8", myclass);
              //sleep(5000);


              almbutton.style.display = 'none';
              celicabutton.style.display = 'none';
              //if(celicabutton.style.display = 'none'){
              //bothbutton.style.display = 'none';
              //}

          }
          tableCreate(arr, yesOverclass(), celicachars[i - 2].name);

          document.getElementById("div2").appendChild(document.createElement("br"));

            almbutton.style.display = 'none';
            //celicabutton.style.display = 'none';

            //if(celicabutton.style.display = 'none'){
            //bothbutton.style.display = 'none';
            //}
        }
        almdone = true;


    }
    if (option == 'Celica') {
        //isValid('config.js');
        //console.log("Celica!")

        for (var i = 2; i < celicachars.length + 2; i++) {
            // Test code: var i=5;
            csstring = celicachars[i - 2].name;
            var id = document.createTextNode(csstring + ": ");
            var tablehead = document.createElement("table");
            var row = document.createElement("tr");

            document.getElementById("div2").appendChild(id);
            document.getElementById("div2").appendChild(tablehead);
            document.getElementById("div2").appendChild(row);


            var arr = [];

            for (var j = celicachars[i - 2].tier; j < final; j++) {

                var item = document.createElement("td");
                item.id = "tdCelica";
                //item.innerHTML("test");
                //document.getElementById("div2").appendChild(item);

                cstring = celicachars[i - 2].name;
                //console.log("Character: " + cstring);
                //console.log(cstring + " is: " + celicachars[i-2].tier)

                var myclass = chooseclass(j, yesAmiibo1(), yesEnemy1(), yesBroken1(), yesAlm1(), yesTier11());

                arr[j] = myclass;
                var id = 'id' + i.toString();

                //console.log(id);
                //htmlify(cstring, "id8", myclass);
                //sleep(5000);


                almbutton.style.display = 'none';
                celicabutton.style.display = 'none';
                //if(celicabutton.style.display = 'none'){
                //bothbutton.style.display = 'none';
                //}

            }
            tableCreate(arr, yesOverclass(), celicachars[i - 2].name);

            document.getElementById("div2").appendChild(document.createElement("br"));
        }

        almbutton.style.display = 'none';
        celicabutton.style.display = 'none';
        celicadone = true;
    }
    if (option == 'Both') {
        //console.log("Both!")

        bothbutton.style.display = 'none';
        console.log("almdone: " + almdone);

        if (almdone == false && celicadone == false) {
            Route('Alm');
            Route('Celica');
            //break;
        }
        if(celicadone == true && almdone == false){
          Route('Alm');
        }
        if (almdone == false) {
            if(celicadone == false){

            }
            //break;
        }

    }
    var all = document.getElementsByTagName("td");
    arraypush(document.getElementsByTagName("tr"), all);

    console.log(all);

    for (var i=0, max=all.length; i < max; i++) {
      //console.log(all);
     // Do something with the element here
     if(all[i].innerHTML == ""){


       var element = all[i];
       element.parentNode.removeChild(element);
     }
    }

}


function tableCreate(array, overlevel, name) {

    //console.log(array);

    var body = document.getElementById('div2');
    var tbl = document.createElement('table');
    tbl.style.width = '100%';

    //tbl.setAttribute('border', '1');
    tbl.id = "test";

    tbl.setAttribute('class', 'fixed');

    /*
    tbl.setAttribute('cellpadding', '0');
    tbl.setAttribute('cellspacing', '0');
    tbl.setAttribute('border', '0');
    */
    //cellpadding="0" cellspacing="0" border="0"

    var tbdy = document.createElement('tbody');
    tbdy.id = "test";


    //for (var i = 0; i < 4; i++) {
    var tr = document.createElement('tr');
    tr.id = "test";


    //div = document.createElement('td');
    //div.appendChild(tr);

    //Patch in overclass eventually
    if (overlevel) {
        var level = 5;
    } else {
        var level = 4;
    }
    for (var j = 1; j < level; j++) {
        //l = 0;
        if (array[j] != null) {
            var td = document.createElement('td');
            td.id = "test";
            td.innerHTML = array[j];
            td.appendChild(document.createTextNode('\u0020'));
            //i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;

            tr.appendChild(td);
        } else {
            var td = document.createElement('td');
            td.innerHTML = "N/A (Starts at a higher tier)";
            td.appendChild(document.createTextNode('\u0020'));
            tr.appendChild(td);

        }

    }


    //}
    tbdy.appendChild(tr);

    var tr2 = document.createElement('tr');

    tr2.id = "tr2";


    //for (var i = 0; i < 4; i++) {
    //var pics = document.createElement('tr');


    //div = document.createElement('td');
    //div.appendChild(tr);

    //Patch in overclass eventually
    if (overlevel) {
        var level = 5;
    } else {
        var level = 4;
    }
    for (var j = 1; j < level; j++) {
        //l = 0;
        //console.log("array[" + j + "] = " + array[j]);
        if (array[j] != null) {
            var td = document.createElement('td');
            td.innerHTML = " ";
            td.id = "test";
            //td.innerHTML = array[j];
            //td.appendChild(document.createTextNode('\u0020'));
            var aclass = spacefixer(array[j]);
            var img = document.createElement('img');


            //img.setAttribute('onerror', "myFunction()" );



            //img.src = "img/FE15_" + aclass + "_(" + name + ").gif";


            //doesexist('img/FE15_' + array[j-1] + '_(' + name + ').gif', function(){ img.src = 'img/FE15_' + array[j-1] + '_(' + name + ').gif'; }, function(){ img.src = 'img/Generic' + array[j-1] + '.gif' } );
            //console.log(img.src);
            var img = document.createElement("img");

            img.id = name;
      console.log("img.id: " + img.id);

          img.src = 'img/FE15_' + aclass + '_(' + name + ').gif';


            //img.src = 'img/FE15_' + aclass + '_(' + name + ').gif';
            console.log("Loading: " + "img/FE15_" + aclass + "_(" + name + ").gif");
            //console.log(loadImage('img/FE15_' + aclass + '_(' + name + ').gif'));
            //doesexist('img/FE15_' + aclass + '_(' + name + ').gif', function(){ img.src = 'img/FE15_' + aclass + '_(' + name + ').gif'; }, function(){ img.src = 'img/Generic' + aclass + '.gif' } );

            //td.appendChild(img);

            var imageExists = false;
            /*
            var image = document.createElement('img');
            image.src = 'img/Hero.gif';
            console.log(image);
            //console.log(imagenotreal);
            console.log("attribute:");
            console.log(image.attr('width'));

            if (image.attr('width') > 0){
              console.log("wide boi");
             imageExists = true;
             //image.src
           }
            else{
             imageExists = false;
           }
           */
           var img = new Image();
           img.onload = function() {
             console.log(this.naturalHeight);
           }
            img.src = "img/FE15_" + aclass + "_(" + name + ").gif";
            console.log("imageExists: " + imageExists);

            div = document.getElementById("testpull");

            //img.setAttribute('onerror', "this.onerror=null; this.src='img/Hero.gif'");
            img.setAttribute('onerror', "this.onerror=null; this.src='img/Generic" + aclass + ".gif'");

            var para = document.createElement("p");

            //para.appendChild(img);

            var element = document.getElementById("div2");
      //element.appendChild(para);

            //var imageUrl = 'img/FE15_' + aclass + '_(' + name + ').gif';
            td.appendChild(img);



            tr2.appendChild(td);
        }


        //}
        else {
            var td = document.createElement('td');
            td.innerHTML = " ";
            td.appendChild(document.createTextNode('\u0020'));
            tr2.appendChild(td);
        }

        tbdy.appendChild(tr2);




    }


    tbl.appendChild(tbdy);
    body.appendChild(tbl);

}



function checkImage1(src) {
  var img = new Image();
  img.onload = function() {
    // code to set the src on success

  };
  img.onerror = function() {
    // doesn't exist or error loading
    img.src = 'img/Generic' + newclass + '.gif';
  };

  img.src = src; // fires off loading of image


  return img;
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
    //var id = document.createTextNode(name + ": ");
    var br = document.createElement("br");


    var img = document.createElement("img");



    //console.log("id: " + id);
    img.id = id;
    //console.log("img.id: " + img.id);



    //img.src = 'img/FE15_' + newclass + '_(' + name + ').gif';

    //console.log("does: "+ 'img/FE15_' + newclass + '_(' + name + ').gif' + "exist?");
    //doesFileExist('img/FE15_' + newclass + '_(' + name + ').gif')

    //var truthtable = false;

    //checkImage('img/FE15_' + newclass + '_(' + name + ').gif', function(){ img.src = 'img/FE15_' + newclass + '_(' + name + ').gif'; console.log("good"); }, function(){ img.src = 'img/Generic' + newclass + '.gif' } console.log("bad"); );





    //console.log(name + "'s class is: " + newclass + " and img is: ");



    //img = newImg.src;
    //img.src = 'img/FE15_' + newclass + '_(' + name + ').gif';

    //para.appendChild(id);
    para.appendChild(aclass);
    //para.appendChild(br);
    para.appendChild(img);

    var element = document.getElementById("div2");
    element.appendChild(para);


    //console.log("exists is:" + status);

}
/*
function loadImage(variable){
var image = new Image();
//var url_image = "img/FE15_" + variable + "_(" + name + ").gif";
var url_image = variable;

var testdiv = document.getElementById("testpull");
testdiv.appendChild(image);

console.log("url_image: " + url_image);

console.log(image.width);

image.src = url_image;

if (image.width == 0) {
   return false;
} else {
   return true;
}
}
*/
/*
function makeGeneric(){
  console.log(this.src);
  console.log(this);
  this.src = "img/Hero.gif";
}
*/
// Sample usage


function doesexist(imageSrc, good, bad) {
    var img = new Image();
    img.src = imageSrc;
    img.onload = good;
    img.onerror = bad;

}

function yesAmiibo1() {
    return document.getElementById("amiibo1").checked;
}

function yesEnemy1() {
    return document.getElementById("enemy1").checked;
}

function yesAlm1() {
    return document.getElementById("alm1").checked;
}

function yesTier11() {
    return document.getElementById("one1").checked;
}

function yesBroken1() {
    return document.getElementById("busted1").checked;
}

function yesOverclass() {
    return document.getElementById("overclass1").checked;
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
  */function myFunction(){
  //alert("Test that it works");
  this.src = "img/Hero.gif"
  this.innerHTML = " ";
  //this.refresh;
  return;
}
