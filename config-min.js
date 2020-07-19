/*
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.5.1.min.js';
document.getElementsByTagName('head')[0].appendChild(script);
*/
var worldtrue = true;
function stringfix(string, gender){


	switch(string) {
  case "Cavalier":
	case "Villager":
	case "Paladin":
	case "Mage":
	case "Gold Knight":
	{
    if(gender == "Male"){
			var output = string + " (M)";
		}
		if(gender == "Female"){
			var output = string + " (M)";
		}
		return output;
	}


	case "Lord (Corrin)":
	{
		if(gender == "Male"){
			var output = "Lord (M. Corrin)"
		}
		if(gender == "Female"){
			var output = "Lord (F. Corrin)"
		}
		return output;
	}

	case "Mage (Male)": {
			return "Mage (M)";
	}
	case "Mage (Female)":{
			return "Mage (F)";
	}
	case "Mila Apostole":{
		return "Mila's Servant";
	}
	case "Duma Apostole":{
		return "Duma's Apostole";
	}

  default:
	{
    // code block
		return string;
	}

	}

}

var spells = [];

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var rows = [
["Character", "Tier 1 Class", "Tier 2 Class", "Tier 3 Class", "Overclass"] ];

/*
var request = new XMLHttpRequest();
	request.open("GET", "../../data.json", false);
	request.send(null)
	var my_JSON_object = JSON.parse(request.responseText);
	alert (my_JSON_object.result[0]);
*/

var almdone = false;
var celicadone = false;
var almchars = [Alm, Lukas, Gray, Tobin, Kliff, Faye, Silque, Clair, Clive, Forsyth, Python, Luthier, Mathilda, Delthea, Tatiana, Zeke, Mycen];

var Alm = {
	name: "Alm",
	gender: "Male",
	tier: '1',
	item: false,
	id: "PID_アルム"
}
var Lukas = {
	name: "Lukas",
	gender: "Male",
	tier: '1',
	id: "PID_ルカ"
}
var Gray = {
	name: "Gray",
	gender: "Male",
	tier: '1',
	item: false,
	id: "PID_グレイ"
}
var Tobin = {
	name: "Tobin",
	gender: "Male",
	tier: '1',
	item: true,
	eq: "Carrot",
	id: "PID_ロビン"
}
var Kliff = {
	name: "Kliff",
	gender: "Male",
	tier: '1',
	item: true,
	eq: "Carrot",
	id: "PID_クリフ"
}
var Faye = {
	name: "Faye",
	gender: "Female",
	tier: '1',
	item: true,
	eq: "Orange",
	id: "PID_エフィ"
}
var Silque = {
	name: "Silque",
	gender: "Female",
	tier: '1',
	item: false,
	id: "PID_シルク"

}
var Clair = {
	name: "Clair",
	gender: "Female",
	tier: '1',
	item: false,
	id: "PID_クレア"
}
var Clive = {
	name: "Clive",
	gender: "Male",
	tier: '1',
	item: true,
	eq: "Steel Lance",
	id: "PID_クレーベ"
}
var Forsyth = {
	name: "Forsyth",
	gender: "Male",
	tier: '1',
	item: false,
	id: "PID_フォルス"
}
var Python = {
	name: "Python",
	gender: "Male",
	tier: '1',
	item: false,
	id:"PID_パイソン"
}
var Luthier = {
	name: "Luthier",
	gender: "Male",
	tier: '1',
	item: true,
	eq: "Mana Herbs",
	id: "PID_リュート"
}
var Mathilda = {
	name: "Mathilda",
	gender: "Female",
	tier: '2',
	item: false,
	id:"PID_マチルダ"
}
var Delthea = {
	name: "Delthea",
	gender: "Female",
	tier: '1',
	item: true,
	eq: "Prayer Ring",
	id: "PID_デューテ"
}
var Tatiana = {
	name: "Tatiana",
	gender: "Female",
	tier: '2',
	item: false,
	id: "PID_ティータ"
}
var Zeke = {
	name: "Zeke",
	gender: "Female",
	tier: '3',
	item: false,
	id: "PID_ジーク"
}
var Mycen = {
	name: "Mycen",
	gender: "Male",
	tier: '3',
	item: false,
	id: "PID_マイセン"
}
var celicachars = [Celica, Mae, Boey, Genny, Saber, Valbar, Kamui, Leon, Palla, Catria, Atlas, Jesse, Est, Nomah, Conrad];
var Celica = {
	name: "Celica",
	gender: "Female",
	tier: '1',
	item: true,
	eq: "Golden Dagger",
	id: "PID_セリカ"

}
var Mae = {
	name: "Mae",
	gender: "Female",
	tier: '1',
	item: true,
	eq: "Sweet Cookie",
	id: "PID_メイ"
}
var Boey = {
	name: "Boey",
	gender: "Male",
	tier: '1',
	item: true,
	eq: "Drinking Water",
	id: "PID_ボーイ"
}
var Genny = {
	name: "Genny",
	gender: "Female",
	tier: '1',
	item: true,
	eq: "Holey Cheese",
	id: "PID_ジェニー"
}
var Saber = {
	name: "Saber",
	gender: "Male",
	tier: '1',
	item: false,
	id: "PID_セーバー"
}
var Valbar = {
	name: "Valbar",
	gender: "Male",
	tier: '2',
	item: false,
	id: "PID_バルボ"
}
var Kamui = {
	name: "Kamui",
	gender: "Male",
	tier: '1',
	item: false,
	id: "PID_カムイ"
}
var Leon = {
	name: "Leon",
	gender: "Male",
	tier: '1',
	item: true,
	eq: "Iron Bow",
	id: "PID_レオ"
}
var Palla = {
	name: "Palla",
	gender: "Female",
	tier: '1',
	item: true,
	eq: "Javelin",
	id: "PID_パオラ"
}
var Catria = {
	name: "Catria",
	gender: "Female",
	tier: '1',
	item: true,
	eq: "Angel Ring",
	id: "PID_カチュア"
}
var Atlas = {
	name: "Atlas",
	gender: "Male",
	tier: '1',
	item: false,
	id: "PID_アトラス"
}
var Jesse = {
	name: "Jesse",
	gender: "Male",
	tier: '1',
	item: false,
	id: "PID_ジェシー"
}
var Sonya = {
	name: "Sonya",
	gender: "Female",
	tier: '1',
	item: true,
	eq: "Steel Shield",
	id: "PID_ソニア"
}
var Deen = {
	name: "Deen",
	gender: "Male",
	tier: '2',
	item: true,
	eq: "Brave Sword",
	id: "PID_ディーン"
}
var Est = {
	name: "Est",
	gender: "Female",
	tier: '1',
	item: false,
	id: "PID_エスト"
}
var Nomah = {
	name: "Nomah",
	gender: "Male",
	tier: '2',
	item: false,
	id: "PID_ノーマ"
}
var Conrad = {
	name: "Conrad",
	gender: "Male",
	tier: '2',
	item: true,
	eq: "Blessed Lance",
	id: "PID_コンラート"
}
function JSONgenerate(){

	//console.log(data);


	var saveData = (function () {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    return function (data, fileName) {
        var json = JSON.stringify(data),
            blob = new Blob([json], {type: "octet/stream"}),
            url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    };
}());

//var data = { x: 42, s: "hello, world", d: new Date() },
fileName = "RandomizedClasses.json";


saveData(data[0], fileName);

	//alert("click!");
	//console.log(almchars[0].id);
	//console.log(data);
	//console.log( data[0].Modules.Characters[almchars[0].id].Name.value);

	//console.log(classmap);
	//console.log(classmap.get("Villager (M)"));

	return;

}


function randomize() {
  var truths = [yesAmiibo(), yesEnemy(), yesBroken(), yesAlm(), yesTier1(), yesUgly(), yesBase()];
  var noinput = true;
  var anybad = true;
  for(var i=0;i<truths.length;i++){
    if(!truths[i]){


    }
    else{
      anybad = false;
    }
  }
  if(anybad){
   alert("Error: no classes selected");
   return;
  }


	var e = document.getElementById("characters");
	var charname = e.options[e.selectedIndex].text;
	var e = document.getElementById("tiers");
	var level = e.options[e.selectedIndex].value;
	playerclass = chooseclass(level, yesAmiibo(), yesEnemy(), yesBroken(), yesAlm(), yesTier1(), yesUgly(), yesBase());
	htmladd(charname);
	document.getElementById("p1").innerHTML = playerclass;
	var child = document.getElementById("p1");
	return;
}

function yesUgly(){
  return document.getElementById("ugly").checked;
}

function htmladd(name) {
	newclass = spacefixer(playerclass);
	var _img = document.getElementById('id1');
	var newImg = new Image;
	newImg.onload = function() {
		_img.src = this.src;
	}
	var status = 0;
	var exists = checkImage('img/FE15_' + newclass + '_(' + name + ').gif', function() {
		newImg.src = 'img/FE15_' + newclass + '_(' + name + ').gif';
	}, function() {
		newImg.src = 'img/Generic' + newclass + '.gif';
	});


	newImg.src = 'img/FE15_' + playerclass + '_(' + name + ').gif';
  //removeElement( newImg.id );
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
	var newname = name;
	try {
		newname = name.replace(" ", "_");
	} catch (err) {}
	return newname;
}

function yesBase() {
	return document.getElementById("base").checked;
}
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

function Ugly() {
	return document.getElementById("ugly").checked;
}

function moreweapons() {
		//Hard Code weapon flags for some JIDS
		//This will revert the weapon flags and secondary weapons back to normal, since it will be easier

	 if(!document.getElementById("moreweapons").checked){
		 //Slow non-hard coded solution
		 //Opted to make this O(n^2) over O(1) so it's dynamic.


		 for(var jids in data[0].Modules["Classes"]){

			 //console.log(jids);

			 for(var oldjids in oldflags[0].Modules["Classes"]){
				 //console.log(oldjids["Name"]["value"])
				 //console.log(jids["Name"]["value"])
				 if(oldjids == jids){
					 //console.log("Match!");
					 //console.log(oldjids);

					 data[0].Modules["Classes"][jids] = oldflags[0].Modules["Classes"][oldjids];



				 }
			 }
		 }

	 }

}

function randomchars() {
		if(document.getElementById("routechars").checked){

			console.log(data);



			var arr = [];
			//Generates internal Array
			for(var pids in legacy[0].Modules["Characters"]){
					//console.log(legacy[0].Modules["Characters"][pids]["Name"]["value"]);

					//for(var i in legacy[0].Modules["Characters"][pids]){
				if(legacy[0].Modules["Characters"][pids]["Name"]["value"] != ""){


					var newins = [legacy[0].Modules["Characters"][pids]];
					arr[arr.length] = newins;
				}

					//console.log(arr["Name"]["value"]);

					if(legacy[0].Modules["Characters"][pids]["Name"]["value"] == "Conrad"){
							console.log("Break at Conrad");
							break;
					}
						//break;
					//}

				}



				console.log("This should run ONCE!");
			for(var pids in legacy[0].Modules["Characters"]) {



						if(data[0].Modules["Characters"][pids]["Name"]["value"] != ""){

							var index = Math.floor(Math.random()*arr.length);

							//var poppedname = arr.splice(index, 1);

							for(var x in arr){
									console.log(arr[x][0]["Name"]["value"]);
							}

							var randomIndex = Math.floor(Math.random() * arr.length);
							var poppedname = arr.splice(randomIndex, 1);

							poppedname = poppedname[0];

							console.log(arr);



							console.log("Popped! " + poppedname[0]["Name"]["value"]);
							console.log(poppedname);





						//Change name value.. Just a test for pointer problems
						console.log(data[0].Modules["Characters"][pids]["Name"]["value"] + " is " + poppedname[0]["Name"]["value"]);
						data[0].Modules["Characters"][pids]["Name"]["value"] = poppedname[0]["Name"]["value"];
						data[0].Modules["Characters"][pids]["Voice"] = poppedname[0]["Voice"];
						data[0].Modules["Characters"][pids]["Description"]["value"] = poppedname[0]["Description"]["value"];


						console.log(data[0].Modules);

						if(arr.length == 0){
							break;
						}

					}







			}

		}
	}


function chooseclass(level, yesamiibo, yesenemy, yesbroken, yesalm, yestier1, yesugly, yesBase) {
	var isBroken = yesbroken;
	var isEnemy = yesenemy;
	var isAmiibo = yesamiibo;
	var isAlm = yesalm;
	var isOne = yestier1;
  var isUgly = yesugly;
  var base = yesBase;

	var classledger = [];




		if (level == 1) {
	    if(base == true){
			classledger = levelone;
	  }
	  if(base == true){
			arraypush(oneandtwo, classledger);
	  }
	    if (yesugly == true) {
	      arraypush(uglyone, classledger);
	    }
		}
		if (level == 2) {
	    if(base == true){
			classledger = leveltwo;
	    }
	    if(base == true){
			if (isOne == true) {
				arraypush(onetwothree, classledger);
			} else {
				arraypush(oneandtwo, classledger);
			}
	  }
			if (isEnemy == true) {
				arraypush(enemytwo, classledger);
			}
	    if (yesugly == true) {
	      arraypush(uglytwo, classledger);
	    }
		}
		if (level == 3) {
	    if(base == true){
			classledger = levelthree;
	    }
	    if(base == true){
			arraypush(onetwothree, classledger);
	  }
			if (isEnemy == true) {
				arraypush(enemythree, classledger);
			}
	    if (yesugly == true) {
	      arraypush(uglythree, classledger);
	    }
		}
		if (level == 4) {
	    if(base == true){
			classledger = overclass;
	    }
		}
		if (isAmiibo == true) {
			if(level < 4){
			arraypush(amiibo, classledger);
		}
	}
		if (isEnemy == true) {
			if(level < 4){
			arraypush(enemyflex, classledger);
			}
		}
		if (isBroken == true && level <= 3) {
			arraypush(brokenuni, classledger);
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

		return classledger[randint(classledger.length)];
	//return classledger[randint(classledger.length)];
}

function arraypush(array, other) {
	for (i = 0; i < array.length; i++) {
		other.push(array[i]);
	}
}
function getRandomValue(collection) {
    let keys = Array.from(collection.keys());
	  var output = collection.get(keys[Math.floor(Math.random() * keys.length)]);
    return output;
}

function getRandomKey(collection) {
    let keys = Array.from(collection.keys());
    return keys[Math.floor(Math.random() * keys.length)];
}

function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}

function getTier(string){

		//Balance tweaking for early-game Brigands
		//console.log("String: " + string)




		if(contains(one, string)){
			return 1;
		}

		if(contains(two, string)){
			return 2;
		}
		if(contains(three, string)){
			return 3;
		}
		if(contains(four, string)){
			return 4;
		}
		if(contains(five, string)){
			return 5;
		}
		if(contains(six, string)){
			return 6;
		}
		if(contains(seven, string)){
			return 7;
		}
		if(contains(eight, string)){
			return 8;
		}
		if(contains(ten, string)){
			return 10;
		}



		switch (string) {
			case "Cavalier (M)":
				return 6;
			case "Cavalier (F)":
				return 6;
			case "Paladin (M)":
				return 3;
			case "Paladin (F)":
				return 3;
			case "Gold Knight (M)":
				return 1;
			case "Gold Knight (F)":
				return 1;
			case "Mage (M)":
				return 5;
			case "Mage (F)":
				return 6;
			case "Villager (M)":
				return 10;
			case "Villager (F)":
				return 10;
			case "Hero":
				return 2;
			case "Tactician (Robin)":
				return 2;
			case "Revenant (Venin)":
				return 2;
			case "Entombed(Numbing)":
				return 2;
			case "Entombed(Venin)":
				return 2;
			case "Mila's Servant":
				return 1;
			case "Duma's Apostole":
				return 1;
			case undefined:
				return 0;
			case null:
				return 0;
			default:
				return 0;
		}

}

function strchoose(int){
	//Fixed so that you can also have a class 2 levels lower for diversity. Avoids issues with Paladins and other classes that have small class strengths not being diverse.
	switch (int) {
		case 1:
			var onerange = one.concat(two, three);
			return onerange[randint(onerange.length)];
		case 2:
			var tworange = two.concat(three, four);
			return tworange[randint(tworange.length)];
		case 3:
			var threerange = three.concat(five, four);
			return threerange[randint(threerange.length)];
		case 4:
			var fourrange = four.concat(five, six);
			return fourrange[randint(fourrange.length)];
		case 5:
			var fiverange = five.concat(seven, six);
			return fiverange[randint(fiverange.length)];
		case 6:
			var sixrange = six.concat(seven, eight);
			return sixrange[randint(sixrange.length)];
		case 7:
			var sevenrange = seven.concat(ten, eight);
			return sevenrange[randint(sevenrange.length)];
		case 8:
			var eightrange = seven.concat(ten);
			return eightrange[randint(eightrange.length)];
		case 10:
				return ten[randint(ten.length)];
		default:
				return;
	}
}

function randclasspromotion(){
		if(document.getElementById("evolutionbeta").checked == true){

			for(var jids in data[0].Modules["Classes"]){
				//console.log(data[0].Modules["Classes"][jids]["Promotes From"])

				//data[0].Modules["Classes"][jids]["Promotes From"] = jidlist[randint(jidlist.length)];
				console.log(getByValue(classmap , data[0].Modules["Classes"][jids]["Promotes From"]));
				//console.log(data[0].Modules["Classes"][jids]["Promotes From"]);
			}

		}
}

function npcify(){
	var kidsPID = ["PID_幼少アルム", "PID_幼少セリカ", "PID_幼少グレイ", "PID_幼少ロビン", "PID_幼少クリフ", "PID_幼少エフィ", "PID_若マイセン"];
	if(document.getElementById("chaos").checked == true){
		for(var mypid of npcarr){

				var randoJID = classmap.get(getRandomKey(classmap));
				data[0].Modules["Characters"][mypid]["JID"] = randoJID;

				if(data[0].Modules["Characters"][mypid]["Dropped Item"] != null){
					console.log("not null item! " + data[0].Modules["Characters"][mypid]["Dropped Item"]);
					if(Math.random() > 0.5){
						data[0].Modules["Characters"][mypid]["Dropped Item"] = getRandomKey(jpmap);
						console.log("Yes trigger!");
					}
					else{
						console.log("No trigger!");
					}
				}
			else{
				console.log("null")
			}
		}

	}

	if(document.getElementById("NPC").checked == true){


		var enarr = [];
		var trueEvin = false;
		for(var mypid of npcarr){

			//console.log(mypid);
			//NPC randomization based on class strength table
			/** https://fireemblemwiki.org/wiki/Class_strength **/

			//console.log(charclass);

			var origJID = data[0].Modules["Characters"][mypid]["JID"];  //= charclass;

			var origclass = getByValue(classmap, origJID);

			var str = getTier(origclass);

			//console.log("Class Value:" + getByValue(classmap, origJID) + "\n Class Tier: " + str);

			var randclass = strchoose(str);
			//console.log(randclass);

			if(getTier(getByValue(classmap, origJID)) == 0){
					//Do Nothing - Don't fuck up the JSON
			}
			else{

				//console.log(origclass + " New Class is: "+ randclass + " JID is: " + classmap.get(stringfix(randclass)));

				var randgender = "Male";

				if(Math.random() > 0.5){
					randgender = "Male";
				}else{
					randgender = "Female";
				}


				var properJID = classmap.get(stringfix(randclass, randgender));

				var droppeditem = getRandomKey(jpmap);

				//Mycen Fun



				if(contains(kidsPID, mypid)){
					properJID = classmap.get(getRandomKey(classmap));
					//console.log(properJID);
				}

				data[0].Modules["Characters"][mypid]["JID"] = properJID;
				data[0].Modules["Characters"][mypid]["Equipped Item"] = droppeditem;

				if(data[0].Modules["Characters"][mypid]["Dropped Item"] != null){

					data[0].Modules["Characters"][mypid]["Drop Rate %"] = 99.9;
					data[0].Modules["Characters"][mypid]["Dropped Item"] = getRandomKey(jpmap);
					//console.log(data[0].Modules["Characters"][mypid]);
				}

			}


			//console.log("Old Class: " + getByValue(classmap, origJID));
			//console.log(getByValue(classmap, origJID) + " tier is " + getTier(getByValue(classmap, origJID)));


			/*




			data[0].Modules["Characters"][mypid]["JID"] = fixedstring;
			data[0].Modules["Characters"][mypid]["Equipped Item"] = droppeditem;
		} */


	}
	/*Lock Early brigands to non-caster low-cap Classes
	var lowcapmartial = ["JID_村人男", "JID_村人女", "JID_盗賊男", "JID_子供男", "JID_子供女"]

	data[0].Modules["Characters"]["PID_盗賊"]["JID"] = lowcapmartial[randint(lowcapmartial.length)];
	*/
	//console.log(data[0].Modules["Characters"]["PID_盗賊"]);
}
else{
		//Not checked
	return;
}

} //End of function

function fixweapons(){

	if(document.getElementById("amiiboweaponbuff").checked == true){
			//Kanji Item IDs

			//Exalted Falchion -> "IID_神剣ファルシオン"
			// Original Mt > 10
			// Original Weight > 3
			// Range tweaked to 2

			//Ragnell -> "IID_ラグネル"
			// Original Mt > 18
			// Original Weight > 15
			// Range tweaked to 2

			//Paralell Falchion -> "IID_裏剣ファルシオン"
			// Original Mt > 12
			// Original Weight > 3
			// Range tweaked to 2


			//Binding Blade -> "IID_封印の剣"
			// Original Mt > 18
			// Original Weight > 8
			// Iron sword mt in this game 5

			//Yato -> "IID_夜刀神"
			// Original Mt > 8
			// Original Weight > 1
			// Reasonable high-end weapon. No need to scale

			var legendaryswords = ["IID_神剣ファルシオン", "IID_ラグネル", "IID_裏剣ファルシオン", "IID_封印の剣", "IID_夜刀神"];
			var mights = [10, 18, 12, 18, 6];
			var weights = [3, 15, 3, 8, 1];
			var descriptions = ["The Hero-King's sword carved \\nfrom Naga's Fang", "A legendary sword bessed by \\nthe godess Ashera", "A legendary sword carved from Naga's Fang\\n", "A powerful weapon \\ncapable of sealing Idunn", "A legendary Katana capable of slaying\\n the first dragons."];

			//Buff Ragnell range
			data[0].Modules["Items"]["IID_ラグネル"]["Max Range"] = 2;

			for(var i=0;i<legendaryswords.length;i++){


				data[0].Modules["Items"][legendaryswords[i]]["Might"] = mights[i];
				data[0].Modules["Items"][legendaryswords[i]]["Weight"] = weights[i];
				data[0].Modules["Items"][legendaryswords[i]]["Description"]["value"] = descriptions[i];
				/*
				console.log("New Weapon: " + data[0].Modules["Items"][legendaryswords[i]]["Name"]["value"]);
				console.log(data[0].Modules["Items"][legendaryswords[i]]["Might"]);
				console.log(data[0].Modules["Items"][legendaryswords[i]]["Weight"]);
				console.log(data[0].Modules["Items"][legendaryswords[i]]["Description"]["value"]);
				*/
			}



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

function getByValue(map, searchValue) {
  for (let [key, value] of map.entries()) {
    if (value === searchValue)
      return key;
  }
}

function Route(option) {


	moreweapons();
	//Uncomment later
	//npcify();
	fixweapons();
	//randclasspromotion();
	if(worldtrue){
		randomchars();
		worldtrue = false;
	}


	var celicabutton = document.getElementById("CelicaButton");
	var almbutton = document.getElementById("AlmButton");
	var bothbutton = document.getElementById("Both");
	if (yesOverclass() == true) {
		var final = 5;
	} else {
		var final = 4;
	}
  var truths = [yesBase1(), yesAmiibo1(), yesEnemy1(), yesBroken1(), yesAlm1(), yesTier11(), yesUgly1()];
  var noinput = true;
  var anybad = true;
  for(var i=0;i<truths.length;i++){
    if(!truths[i]){
    }
    else{
      anybad = false;
    }
  }
  if(anybad){
   alert("Error: no classes selected");
   return;
  }

	//Item array entry ifs

	var extractedmap = [];

	var dospells = false;
	if(document.getElementById("spells").checked == true){
		dospells = true;
	}
var randgrowths = false;
var thracia = false;
	if(document.getElementById("growths").checked){
		randgrowths = true;
		if(document.getElementById("move").checked){
			thracia = true;
		}
	}


	//if(document.getElementById("item").checked){
		var checkedtruths = [true, true, true, true, true, true];
		var univtruth = true;

			if(document.getElementById("provisions").checked == true){
				arraypush(provisions, extractedmap);
				checkedtruths[0] = false;
			}

			if(document.getElementById("quest").checked == true){
				arraypush(questitems, extractedmap);
				checkedtruths[1] = false;
			}
			if(document.getElementById("statboosters").checked == true){
				arraypush(statboosters, extractedmap);
				checkedtruths[2] = false;
			}

			if(document.getElementById("weapons").checked == true){
				arraypush(weapons, extractedmap);
				checkedtruths[3] = false;
			}

			if(document.getElementById("rusted").checked == true){
				arraypush(rusted, extractedmap);
				checkedtruths[4] = false;
			}
			if(document.getElementById("dlc").checked == true){
				arraypush(dlc, extractedmap);
				checkedtruths[5] = false;
			}
			if(document.getElementById("enitem").checked == true){
				arraypush(amiiboenemy, extractedmap);
				checkedtruths[6] = false;
			}
			//console.log(checkedtruths);


			var min = document.getElementById("ming").value;
			var max = document.getElementById("maxg").value;

			var mint = document.getElementById("mingt").value;
			var maxt = document.getElementById("maxgt").value;

			if(parseInt(min) > parseInt(max) || parseInt(mint) > parseInt(maxt)){
				alert("Min growth rate is higher than max growth rate");
				return;
			//}




			switch (document.getElementById("growths").checked) {
				case true:

				if(parseInt(min) > 100 || parseInt(max) > 100 ){
					alert("Growth Rates cannot be greater than 100");
					return;
				}
				if(min == "" || max == ""){
					alert("Growth Rates cannot be empty!");
					return;
				}

					break;
				default:

			}

			switch (document.getElementById("move").checked) {
				case true:

				if(parseInt(mint) > 100 || parseInt(maxt) > 100){
					alert("Move Growth Rates cannot be greater than 100");
					return;
				}

				if(mint == "" || maxt == ""){
					alert("Move growth Rates cannot be empty!");
					return;
				}

					break;
				default:

			}




			var anyfalse = false;
			for(var u=0;u<checkedtruths.length;u++){
				if(checkedtruths[u] == false){
					anyfalse = true;
				}
			}
			if(!anyfalse){
				alert("error: please select at least one item type to include in the item randomization pool, or uncheck 'Randomize Starting Items'");
				return;
			}






}

	switch(option){

	case "Alm": {

			//CSV test




			//End CSV test



		document.getElementById("reroll").hidden = false;
		for (var i = 2; i < almchars.length + 2; i++) {
			csstring = almchars[i - 2].name;
			var csvclass = [almchars[i - 2].name];

			var id = document.createTextNode(csstring + ": ");
			var tablehead = document.createElement("table");
			var row = document.createElement("tr");
			document.getElementById("div2").appendChild(id);
			document.getElementById("div2").appendChild(tablehead);
			document.getElementById("div2").appendChild(row);
			var arr = [];

			var firsttime = true;





			for (var j = almchars[i - 2].tier; j < final; j++) {
				var item = document.createElement("td");
				item.id = "tdCelica";
				cstring = almchars[i - 2].name;




				var myclass = chooseclass(j, yesAmiibo1(), yesEnemy1(), yesBroken1(), yesAlm1(), yesTier11(), yesUgly1(), yesBase1());
				arr[j] = myclass;
				csvclass[j] = myclass;
				var id = 'id' + i.toString();

				//Start JSON Collection
				//console.log("First Time:");
				//console.log(firsttime);
				if(firsttime){


					if(dospells){
						data[0].Modules.Characters[almchars[i-2].id]["Learned Black Magic"] = black[randint(black.length)];
						data[0].Modules.Characters[almchars[i-2].id]["Learned White Magic"] = white[randint(white.length)];
					}

					//Growth Characters

					if(randgrowths == true){
						//console.log(data[0].Modules.Characters[almchars[i-2].id]["Growths"]);

						for(var k=0; k<data[0].Modules.Characters[almchars[i-2].id]["Growths"].length-1;k++){
								data[0].Modules.Characters[almchars[i-2].id]["Growths"][k] = parseInt(min) + randint(parseInt(max)-parseInt(min));

						}
						if(thracia){
								//console.log("THRACIA TIME!")
								data[0].Modules.Characters[almchars[i-2].id]["Growths"][7] = parseInt(mint) + randint(parseInt(maxt)-parseInt(mint));
						}

						//console.log(data[0].Modules.Characters[almchars[i-2].id]["Growths"]);


					}
					if(document.getElementById("log").checked == true){
						data[0].Modules.Characters[almchars[i-2].id]["Description"]["value"] += "\\n Growths: " + data[0].Modules.Characters[almchars[i-2].id]["Growths"].slice(0,8).toString();
						//console.log(data[0].Modules.Characters[almchars[i-2].id]["Description"]["value"]);

					}
						//console.log(myclass);

						/* Test loop to test for null results
						for(var o=1;o<extractedmap.length;o++){
							console.log("o = " + o);
							console.log(extractedmap[o]);
							console.log(jpmap.get(extractedmap[o]));
						}
						//console.log(stringfix(myclass, almchars[i - 2].gender));
						*/
						/*
						if(data[0].Modules.Characters[almchars[i-2].id]["Equipped Item"] != null){
							//console.log(almchars[i-2].name + " has an item!");
							//console.log(data[0].Modules.Characters[almchars[i-2].id]["Equipped Item"])
							//console.log("New Item: ");
							if(document.getElementById("item").checked){
							data[0].Modules.Characters[almchars[i-2].id]["Equipped Item"] = 	extractedmap[randint(extractedmap.length)];
							//console.log(data[0].Modules.Characters[almchars[i-2].id]["Equipped Item"]);

							}
						}
						*/



						//console.log(myclass);
						//console.log(stringfix(myclass, almchars[i - 2].gender));
						if(document.getElementById("item").checked){
							//console.log(data[0].Modules.Characters[celicachars[i-2].id]["Equipped Item"] );
							//if(data[0].Modules.Characters[almchars[i-2].id]["Equipped Item"] != null){
								//console.log("Rand Number: ")
								var rng = randint(extractedmap.length-1);


								var myitem = extractedmap[rng];
						data[0].Modules.Characters[almchars[i-2].id]["Equipped Item"] = 	myitem;
						//console.log(data[0].Modules.Characters[almchars[i-2].id]["Equipped Item"]);
						var itemico = document.createElement("img");
						//console.log(lowunderscore(jpmap.get(myitem)));
						itemico.src = "img/Echoes_" + lowunderscore(jpmap.get(myitem)) + "_icon.png";
						//console.log("img/Echoes_" + lowunderscore(jpmap.get(myitem)) + "_icon.png");
						st = document.createElement("p");
						var excstr = "exc" + i-2
						st.id = excstr;
						st.innerHTML = "Starting Item: ";

						var pu = document.createElement("p");
						pu.innerHTML = jpmap.get(myitem);
						//console.log(pu);

						st.appendChild(document.createElement("br"));
						st.appendChild(itemico);
						st.appendChild(pu);
						//console.log(itemico);

							document.getElementById("div2").appendChild(st);


					//}
					}


						//Other>

						var playerjid = classmap.get(stringfix(myclass, almchars[i - 2].gender));
						data[0].Modules.Characters[almchars[i-2].id].JID = playerjid;

				}
				firsttime = false;
			}

			//End JSON
			almbutton.style.display = 'none';
			var ex = document.getElementById("export");
			ex.hidden = false;
			tableCreate(arr, yesOverclass(), almchars[i - 2].name);
			document.getElementById("div2").appendChild(document.createElement("br"));
			rows[rows.length] = csvclass;


		}

		almdone = true;

		if(celicabutton.style.display == 'none'){
			celicabutton.style.display = 'none';
			bothbutton.style.display = 'none';
			almbutton.style.display = 'none';

		}
		else{
			almbutton.style.display = 'none';
			celicabutton.style.display = 'none';
		}



		//randomchars();
		break;

	return;

	}
	case "Celica": {
		document.getElementById("reroll").hidden = false;
		if (document.getElementById("deen").checked) {
			celicachars.splice(12, 0, Deen);
		}
		if (document.getElementById("sonya").checked) {
			celicachars.splice(12, 0, Sonya);
		}
		if (document.getElementById("both").checked) {
			celicachars.splice(12, 0, Deen);
			celicachars.splice(12, 0, Sonya);
		}




		for (var i = 2; i < celicachars.length + 2; i++) {
			var firsttime = true;
			var csvclass = [celicachars[i - 2].name];
			//console.log(csvclass);
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
				cstring = celicachars[i - 2].name;
				var myclass = chooseclass(j, yesAmiibo1(), yesEnemy1(), yesBroken1(), yesAlm1(), yesTier11(), yesUgly1(), yesBase1());
				arr[j] = myclass;
				var id = 'id' + i.toString();
				csvclass[j] = myclass;
				//almbutton.style.display = 'none';
				//celicabutton.style.display = 'none';

				//for(let o of data.entries() ){
						//console.log(data[0].Modules.Items);


						//console.log(evolutionids);
					if(document.getElementById("evo").checked){
						//console.log("evo!");

							for(var prop in data[0].Modules.Items){

							data[0].Modules.Items[prop]["EID"] = evolutionids[randint(evolutionids.length)];
						}

					}


				//}

				if(firsttime){


					if(document.getElementById("shufgrowths").checked){

						if(document.getElementById("res").checked){var resnum = 7;}else{var resnum = 6;}
						var sliced = shuffle(data[0].Modules.Characters[celicachars[i-2].id]["Growths"].slice(0,resnum));


						//console.log(sliced);
						//console.log(data[0].Modules.Characters[celicachars[i-2].id]["Growths"]);

						for(var q = 0; q<sliced.length;q++){
							data[0].Modules.Characters[celicachars[i-2].id]["Growths"][q] = sliced[q];
						}
						//console.log(data[0].Modules.Characters[celicachars[i-2].id]["Growths"]);
							}


					if(randgrowths == true){
						//console.log(data[0].Modules.Characters[almchars[i-2].id]["Growths"]);

						for(var k=0; k<data[0].Modules.Characters[celicachars[i-2].id]["Growths"].length-1;k++){
								data[0].Modules.Characters[celicachars[i-2].id]["Growths"][k] = parseInt(min) + randint(parseInt(max)-parseInt(min));

						}
						if(thracia){
								//console.log("THRACIA TIME!")
								data[0].Modules.Characters[celicachars[i-2].id]["Growths"][7] = parseInt(mint) + randint(parseInt(maxt)-parseInt(mint));
						}

						//console.log(data[0].Modules.Characters[celicachars[i-2].id]["Growths"]);


					}

					if(document.getElementById("log").checked == true){
						data[0].Modules.Characters[celicachars[i-2].id]["Description"]["value"] += "\\n Growths: " + data[0].Modules.Characters[celicachars[i-2].id]["Growths"].slice(0,8).toString();
					}
					//console.log(data[0].Modules.Characters[celicachars[i-2].id]["Description"]["value"]);


					if(dospells){

							data[0].Modules.Characters[celicachars[i-2].id]["Learned Black Magic"] = black[randint(black.length)];
							data[0].Modules.Characters[celicachars[i-2].id]["Learned White Magic"] = white[randint(white.length)];
							//console.log(data[0].Modules.Characters[celicachars[i-2].id]);

					}
						//console.log(myclass);
						//console.log(stringfix(myclass, almchars[i - 2].gender));
						if(document.getElementById("item").checked){
							//console.log(data[0].Modules.Characters[celicachars[i-2].id]["Equipped Item"] );
							//if(data[0].Modules.Characters[celicachars[i-2].id]["Equipped Item"] != null){
								var myitem = extractedmap[randint(extractedmap.length)];
						data[0].Modules.Characters[celicachars[i-2].id]["Equipped Item"] = 	myitem;
						//console.log(data[0].Modules.Characters[almchars[i-2].id]["Equipped Item"]);
						var itemico = document.createElement("img");
						//console.log(lowunderscore(jpmap.get(myitem)));
						itemico.src = "img/Echoes_" + lowunderscore(jpmap.get(myitem)) + "_icon.png";
						//console.log("img/Echoes_" + lowunderscore(jpmap.get(myitem)) + "_icon.png");
						st = document.createElement("p");
						var excstr = "exc" + i-2
						st.id = excstr;
						st.innerHTML = "Starting Item: ";

						var pu = document.createElement("p");
						pu.innerHTML = jpmap.get(myitem);
						//console.log(pu);

						st.appendChild(document.createElement("br"));
						st.appendChild(itemico);
						st.appendChild(pu);



						//console.log(st);


						document.getElementById("div2").appendChild(st);
						//document.getElementById("div2").appendChild(pu);

						//begin test block

						//begin test block



						//}
						}

						var playerjid = classmap.get(stringfix(myclass, celicachars[i - 2].gender));
						data[0].Modules.Characters[celicachars[i-2].id].JID = playerjid;


				}
				firsttime = false;

			}
			tableCreate(arr, yesOverclass(), celicachars[i - 2].name);
			document.getElementById("div2").appendChild(document.createElement("br"));
			//console.log(csvclass);
			rows[rows.length] = csvclass;
			//console.log(rows);
		}
		var ex = document.getElementById("export");
		ex.hidden = false;
		//console.log(almbutton);
		if(almbutton.style.display == 'none'){
			celicabutton.style.display = 'none';
			bothbutton.style.display = 'none';
			almbutton.style.display = 'none';

		}
		else{
			almbutton.style.display = 'none';
			celicabutton.style.display = 'none';
		}

		celicadone = true;
		//randomchars();
		break;
	}

	case "Both": {
		bothbutton.style.display = 'none';

		if (celicadone == true && almdone == false) {
			Route('Alm');
			return;
		} else if (celicadone == false && almdone == true) {
			Route('Celica');
		} else {

			Route('Alm');

			Route('Celica');
		}
	}
}
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function lowunderscore(itemtype){
		try{
		var output = itemtype.toLowerCase().replace(/ /g,"_");

		return output;
	}
	catch(err){
			//console.log("invalid string: " + itemtype);
	}
}

function tableCreate(array, overlevel, name) {
	var body = document.getElementById('div2');
	var tbl = document.createElement('table');
	tbl.style.width = '100%';
	tbl.id = "test";
	tbl.setAttribute('class', 'fixed');
	var tbdy = document.createElement('tbody');
	tbdy.id = "test";
	var tr = document.createElement('tr');
	tr.id = "test";
	if (overlevel) {
		var level = 5;
	} else {
		var level = 4;
	}
	for (var j = 1; j < level; j++) {
		if (array[j] != null) {
			var td = document.createElement('td');
			td.id = "test";
			td.innerHTML = array[j];
			td.appendChild(document.createTextNode('\u0020'));
			tr.appendChild(td);
		} else {
			var td = document.createElement('td');
			td.innerHTML = "N/A (Starts at a higher tier)";
			td.appendChild(document.createTextNode('\u0020'));
			tr.appendChild(td);
		}
	}
	tbdy.appendChild(tr);
	var tr2 = document.createElement('tr');
	tr2.id = "tr2";
	if (overlevel) {
		var level = 5;
	} else {
		var level = 4;
	}
	for (var j = 1; j < level; j++) {
		if (array[j] != null) {
			var td = document.createElement('td');
			td.innerHTML = " ";
			td.id = "test";
			var aclass = spacefixer(array[j]);
			var img = document.createElement('img');
			var img = document.createElement("img");
			img.id = name;
			img.src = 'img/FE15_' + aclass + '_(' + name + ').gif';
			var imageExists = false;
			var img = new Image();
			img.onload = function() {}
			img.src = "img/FE15_" + aclass + "_(" + name + ").gif";
			div = document.getElementById("testpull");
			img.setAttribute('onerror', "this.onerror=null; this.src='img/Generic" + aclass + ".gif'");
			var para = document.createElement("p");
			var element = document.getElementById("div2");
			td.appendChild(img);
			tr2.appendChild(td);
		} else {
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
	img.onload = function() {};
	img.onerror = function() {
		img.src = 'img/Generic' + newclass + '.gif';
	};
	img.src = src;
	return img;
}

function htmlify(name, id, theclass) {
	var myclass = theclass;
	var newclass = spacefixer(theclass);
	var printclass = theclass;
	var para = document.createElement("p");
	var aclass = document.createTextNode(theclass);
	var br = document.createElement("br");
	var img = document.createElement("img");
	img.id = id;
	para.appendChild(aclass);
	para.appendChild(img);
	var element = document.getElementById("div2");
	element.appendChild(para);
}

function doesexist(imageSrc, good, bad) {
	var img = new Image();
	img.src = imageSrc;
	img.onload = good;
	img.onerror = bad;
}

function yesBase1() {
	return document.getElementById("base1").checked;
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
function yesUgly1() {
	return document.getElementById("ugly1").checked;
}

function printPage() {
	//removeAll();
	/*
	window.print();
	return false;
	*/
	let csvContent = "data:text/csv;charset=utf-8,";
	rows.forEach(function(rowArray) {
	let row = rowArray.join(",");
	csvContent += row + "\r\n";
	});

	var encodedUri = encodeURI(csvContent);
	var link = document.createElement("a");
	link.setAttribute("href", encodedUri);
	link.setAttribute("download", "FESoV-RandomClasses.csv");
	document.body.appendChild(link); // Required for FF

	link.click(); // This will download the data file named "my_data.csv".
	return false;
}



function removeAll() {
	document.getElementById("clutter");
	clutter.remove();
	return;
}

function myFunction() {
	this.src = "img/Hero.gif"
	this.innerHTML = " ";
	return;
}
