# Fire Emblem Echoes: Shadows of Valentia Randomizer
Current Version: 1.1 (Ugly and Broken Divorce Edition) 

## 1.1 Updates:

- Updated documentation/guide to be more helpful
- Split Ugly classes and broken classes
- Fixed bugs relating to generating randomization for both parties
- Added more Animated GIF Sprites

## WTF is this?/What is this for?

This is a randomizer tool for a randomized class run of Fire Emblem Echoes: Shadow of Valentia. Right now, this is just purely a web-based tool to generate random classsets for runs, and is NOT an application that modifies 3DS saves or patches 3DS games (although I may spend some time developing this depending on reception). If you want to do a randomized run of Fire Emblem Echoes: Shadows of Valentia, you will also need 3DS-side tools to modify the game. I suggest Luma3DS or a similar CFW with NTR's most recent cheat database (should come stock with Luma with no install needed). With this on your system, you should be able to pull up the cheat menu in-game, and be able to use NTR's All class selectable by class change to hack the Mila altars to allow for the custom classes. Links will be provided below, and in addition, I am leaving a copy of the cheat that makes this possible:

>[All class selectable by class change]
>00527140 E59F0010
>00527144 E5900000
>00527148 E5900000
>0052714C E0800385
>00527150 E0800285
>00527154 E12FFF1E
>00527158 0065F14C
>001D12D8 E3A00049
>001D12DC E59FA178
>001D12E0 E58D0024
>001D1308 EB0D578C
>001D1344 E3A00000
>001FBCDC E3A00001
>001FBCEC EA000036

## So how do I run a randomized game?

Well, assuming you have the aforementioned setup (Luma3DS/CFW, NTR cheats, as well as a digital/physical copy of Fire Emblem Echoes), you now have two options to randomnize your run. You have randomize-as-you go, where whenever you gain a new character/need to promote a character you randomize on the spot; or you can pre-randomize the entire game beforehand by using the Randomize Party feature. Examples of how both work are detailed below. I have also detailed a summary of what each option means after that.

### Randomize-as-You-Go-Example

You just recruited Silque in Act 1. You select Silque from the drop-down menu for characters, and then check the class tier (Silque starts as a tier 1 class, so you'll choose tier 1), then choose the conditions you want such as allowing Amiibo classes or Enemy Classes and then hit randomize. After you get Silque's class, (let's say she got Pegasus Knight) you load in the cheat code, and visit a Mila alter to IMMEDIATELY change Silque's class into its randomized option (in this case a Pegasus Knight).

### Pre-Randomized Example

Before the game starts, you visit the to randomize a class matrix for the entire game. After setting Amiibo/Enemy class conditions, you press Randomize Both to randomize Alm's Route and Celica's, and you save a copy of the exported class list. So now, whenever you recruit a new unit, such as Silque in the previous example, you cross-reference your character sheet to determine what class to change her into.

Visit [the website](https://evinjaff.github.io/FESOV-randomizer) to try it out.

## What do the randomization rules/classes mean?

Here is a breakdown of all the randomization rules (In Progress):

- Include Classes?
- Amiibo Classes?
- Enemy Classes?
- Broken/Ugly Classes?
- Alm and Celica Classes?
- Generate Overclass?

### Allow Amiibo Classes? 

This allows all Amiibo-exclusive classes to be options. Amiibo-exclusive classes were the classes of the illusory fighters that can be summoned via scanning Amiibos such as Lucina, Roy, and Robin. These classes are untiered and possilbe randomizations at every level if enabled. This is by far the coolest option, since the characters models classed into these look a lot like how the Lodestar, Great Lord, Ranger, and Tactitian classes were in *Fates*! So, this means that you could be classed as Lucina, or Marth if you so pleased. In total, this allows these classes to be used:

| Tier     | Classes                                                      |
| -------- | ------------------------------------------------------------ |
| Untiered | Lord (Marth), Lord (F. Corrin), Lord (M. Corrin), Lord (Roy),  Lord (Lucina),  Hero (Ike), Tactitian (Robin) |

### Allow Enemy Classes? 

This allows all compatible Enemy-exclusive classes to be options. It was a tough choice, but I decided to only include the Enemy Classes that look reasonably like someone was that class for this. This basically means do the heads fit on well, and with the exception of a little bit of clipping, does it feel like you character could truly be that class? If you want every single Enemy class available for class change, check this box and the Ugly Classes? option. Checking just Enemy Classes? allows these possible classes:

| Tier     | Classes                                    |
| -------- | ------------------------------------------ |
| 1        | Arcanist, Brigand, Mogall                  |
| 2        | Mogall, Brigand                            |
| 3        | Balor, Dagon, Fire Dragon, Fiend, Guardian |
| Untiered | Cantor, Arcanist, Witch                    |



### Allow Ugly Classes? 

This allows all possible classes (Mainly Enemy Classes) that are normally balanced, but do not have a good way to position the head of a character onto it (such as Deimos), so the game feels much more hacked and thereby breaks immersion. 

*Note about Revenant/Entombed Classes: Both of these classes have mirrored versions of their normal classes in which you have access to numbing or posion claws. Due to the possible power that this gives you in the early game, I have opted to consider the Venin/Numbing Claw variants promoted versions of the original due to how busted the poisioned condition is.*

| Tier     | Classes                                                      |
| -------- | ------------------------------------------------------------ |
| 1        | Gargoyle, Entombed (Normal), Revenant (Normal), Bonewalker   |
| 2        | Entombed (Numbing), Entombed (Venin), Revenant (Numbing),  Revenant (Numbing), Titan, Lich, Necodragon, Fafnir, Bonewalker |
| 3        | Deathgoyle, Lich, Garuda, Deimos, Vestal, Mila Apostole, White Dragon, Duma Apostole |
| Untiered | None                                                         |

### Allow Broken Classes?

Checking this will allow for you to have classes that are just plain broken. Due to either high stats or something not being right with them, they've been relegated to broken. I will also include a reason to explain their placement.

| Class       | Tier                                                | Reason                                                       |
| ----------- | --------------------------------------------------- | ------------------------------------------------------------ |
| Fell God    | Untiered (To powerful to really belong in any tier) | Has insane stats, can cause the game to crash, and is unable to attack. |
| Fell Dragon | Untiered (To powerful to really belong in any tier) | Has insane stats/weapons, and can cause the game to crash.   |

### A Note about classes not included:

I am including a table of classes not included in the randomizer to be transparent. I deemed these classes irrelevant for 99.9% of runs and decided not to include these. If you really feel like they need to be included, then I will patch in a choice for a future update.

| Class Name  | Reason                                                       |
| ----------- | ------------------------------------------------------------ |
| Player Boat | Has 0 movement and was never intended to be an actual character. Also will not be able to wield weapons unless you Mila the character with them holding a weapon (unconfirmed). |
| Enemy Boat  | See Player Boat                                              |
| Unknown     | This is a generic class for when the game can't load a class. (ex. if you don't have DLC installed and a character like Alm is a Conqueror). In this class, your character retains its stats, but its movement is reduced to 1 and the unit cannot attack. The character's class is reverted back to its intended class if either the system is able to load the correct class data via reboting/inserting an SD card with the class data, opening a file on a console that has the class data installed. This class is mostly designed as an anti-DLC-sharing mechanic that Echoes implemented that's much harsher than Awakening. In Awakening, all that happened if you couldn't load the DLC Dread Fighter and Bride Classes was that they became a generic tactitian and lost their class skills but still retained their ability to attack and could fight. |

## Technical Notes on Randomization

### Dungeon Softlocking

Throught some testing, I have determined that Alm can only be reclassed into a Fighter, Hero, Conqueror, or Unknown and still retain the ability to attack in dungeons. This means that for certain dungerons, you can potentially softlock yourself inside a dungeon since Alm will not be able to break boxes blocking the path to the boss. The most prominent exmaple of this is the Fear Mountain Shrine on Alm's route, where there is a Mila altar that is blocked by a stone wall and some boxes. If you enter the room and reclass Alm into a class other than his class tree or an Unknown, he will lose the ability to attack when you press A, meaning that once you leave the Mila statue, he will 

 By reclassing Alm to any class other than his class tree, you get softlocked since you can press A to break the boxes and get through.

### Spell Lists

As most of you know, some characters are naturally oriented towards spellcasting (ex. Kliff, Celica, Mae, Delthea), and as a result have a spell list that dictates which spells they learn.  For example, here is Mae's Spell list (Source: Fire Emblem Fandom):

| Class                                                        | Level Learnt | Spell                                                        |
| ------------------------------------------------------------ | ------------ | ------------------------------------------------------------ |
| [![FE15 Mage (Mae)](https://vignette.wikia.nocookie.net/fireemblem/images/7/75/FE15_Mage_%28Mae%29.gif/revision/latest?cb=20180303104517)](https://vignette.wikia.nocookie.net/fireemblem/images/7/75/FE15_Mage_(Mae).gif/revision/latest?cb=20180303104517)[Mage](https://fireemblem.fandom.com/wiki/Mage) | 1            | [![Echoes black magic icon](https://vignette.wikia.nocookie.net/fireemblem/images/1/1e/Echoes_black_magic_icon.png/revision/latest?cb=20170411145423)](https://vignette.wikia.nocookie.net/fireemblem/images/1/1e/Echoes_black_magic_icon.png/revision/latest?cb=20170411145423)[Fire](https://fireemblem.fandom.com/wiki/Fire_(tome)) [![Echoes black magic icon](https://vignette.wikia.nocookie.net/fireemblem/images/1/1e/Echoes_black_magic_icon.png/revision/latest?cb=20170411145423)](https://vignette.wikia.nocookie.net/fireemblem/images/1/1e/Echoes_black_magic_icon.png/revision/latest?cb=20170411145423)[Thunder](https://fireemblem.fandom.com/wiki/Thunder_(tome)) |
|                                                              | 9            | [![Echoes black magic icon](https://vignette.wikia.nocookie.net/fireemblem/images/1/1e/Echoes_black_magic_icon.png/revision/latest?cb=20170411145423)](https://vignette.wikia.nocookie.net/fireemblem/images/1/1e/Echoes_black_magic_icon.png/revision/latest?cb=20170411145423)[Aura](https://fireemblem.fandom.com/wiki/Aura) |
|                                                              | 14           | [![Echoes black magic icon](https://vignette.wikia.nocookie.net/fireemblem/images/1/1e/Echoes_black_magic_icon.png/revision/latest?cb=20170411145423)](https://vignette.wikia.nocookie.net/fireemblem/images/1/1e/Echoes_black_magic_icon.png/revision/latest?cb=20170411145423)[Seraphim](https://fireemblem.fandom.com/wiki/Seraphim) |
| [![FE15 Priestess (Mae)](https://vignette.wikia.nocookie.net/fireemblem/images/c/c1/FE15_Priestess_%28Mae%29.gif/revision/latest?cb=20180305165218)](https://vignette.wikia.nocookie.net/fireemblem/images/c/c1/FE15_Priestess_(Mae).gif/revision/latest?cb=20180305165218)[Priestess](https://fireemblem.fandom.com/wiki/Priestess_(Gaiden)) | 1            | [![Echoes white magic icon](https://vignette.wikia.nocookie.net/fireemblem/images/4/49/Echoes_white_magic_icon.png/revision/latest?cb=20170411145423)](https://vignette.wikia.nocookie.net/fireemblem/images/4/49/Echoes_white_magic_icon.png/revision/latest?cb=20170411145423)[Recover](https://fireemblem.fandom.com/wiki/Recover_(Staff)) |
|                                                              | 6            | [![Echoes white magic icon](https://vignette.wikia.nocookie.net/fireemblem/images/4/49/Echoes_white_magic_icon.png/revision/latest?cb=20170411145423)](https://vignette.wikia.nocookie.net/fireemblem/images/4/49/Echoes_white_magic_icon.png/revision/latest?cb=20170411145423)[Silence](https://fireemblem.fandom.com/wiki/Silence_(staff)) |
| [![FE15 Cleric (Mae)](https://vignette.wikia.nocookie.net/fireemblem/images/b/b4/FE15_Cleric_%28Mae%29.gif/revision/latest?cb=20180305165216)](https://vignette.wikia.nocookie.net/fireemblem/images/b/b4/FE15_Cleric_(Mae).gif/revision/latest?cb=20180305165216)[Cleric](https://fireemblem.fandom.com/wiki/Cleric) | 1            | [![Echoes black magic icon](https://vignette.wikia.nocookie.net/fireemblem/images/1/1e/Echoes_black_magic_icon.png/revision/latest?cb=20170411145423)](https://vignette.wikia.nocookie.net/fireemblem/images/1/1e/Echoes_black_magic_icon.png/revision/latest?cb=20170411145423)[Nosferatu](https://fireemblem.fandom.com/wiki/Nosferatu) [![Echoes white magic icon](https://vignette.wikia.nocookie.net/fireemblem/images/4/49/Echoes_white_magic_icon.png/revision/latest?cb=20170411145423)](https://vignette.wikia.nocookie.net/fireemblem/images/4/49/Echoes_white_magic_icon.png/revision/latest?cb=20170411145423)[Recover](https://fireemblem.fandom.com/wiki/Recover_(Staff)) |
| [![FE15 Saint (Mae)](https://vignette.wikia.nocookie.net/fireemblem/images/f/fb/FE15_Saint_%28Mae%29.gif/revision/latest?cb=20180305165219)](https://vignette.wikia.nocookie.net/fireemblem/images/f/fb/FE15_Saint_(Mae).gif/revision/latest?cb=20180305165219)[Saint](https://fireemblem.fandom.com/wiki/Saint) | 1            | [![Echoes black magic icon](https://vignette.wikia.nocookie.net/fireemblem/images/1/1e/Echoes_black_magic_icon.png/revision/latest?cb=20170411145423)](https://vignette.wikia.nocookie.net/fireemblem/images/1/1e/Echoes_black_magic_icon.png/revision/latest?cb=20170411145423)[Seraphim](https://fireemblem.fandom.com/wiki/Seraphim) |
|                                                              | 6            | [![Echoes white magic icon](https://vignette.wikia.nocookie.net/fireemblem/images/4/49/Echoes_white_magic_icon.png/revision/latest?cb=20170411145423)](https://vignette.wikia.nocookie.net/fireemblem/images/4/49/Echoes_white_magic_icon.png/revision/latest?cb=20170411145423)[Silence](https://fireemblem.fandom.com/wiki/Silence_(staff)) |
| [![FE15 Harrier (Mae)](https://vignette.wikia.nocookie.net/fireemblem/images/7/79/FE15_Harrier_%28Mae%29.gif/revision/latest?cb=20180305165217)](https://vignette.wikia.nocookie.net/fireemblem/images/7/79/FE15_Harrier_(Mae).gif/revision/latest?cb=20180305165217)[Harrier](https://fireemblem.fandom.com/wiki/Harrier) | 1            | [![Echoes black magic icon](https://vignette.wikia.nocookie.net/fireemblem/images/1/1e/Echoes_black_magic_icon.png/revision/latest?cb=20170411145423)](https://vignette.wikia.nocookie.net/fireemblem/images/1/1e/Echoes_black_magic_icon.png/revision/latest?cb=20170411145423)[Fire](https://fireemblem.fandom.com/wiki/Fire_(tome)) |
| [![FE15 Enchantress (Mae)](https://vignette.wikia.nocookie.net/fireemblem/images/8/81/FE15_Enchantress_%28Mae%29.gif/revision/latest?cb=20180305165216)](https://vignette.wikia.nocookie.net/fireemblem/images/8/81/FE15_Enchantress_(Mae).gif/revision/latest?cb=20180305165216)[Enchantress](https://fireemblem.fandom.com/wiki/Enchantress) | 1            | [![Echoes black magic icon](https://vignette.wikia.nocookie.net/fireemblem/images/1/1e/Echoes_black_magic_icon.png/revision/latest?cb=20170411145423)](https://vignette.wikia.nocookie.net/fireemblem/images/1/1e/Echoes_black_magic_icon.png/revision/latest?cb=20170411145423)[Mire](https://fireemblem.fandom.com/wiki/Mire) [![Echoes black magic icon](https://vignette.wikia.nocookie.net/fireemblem/images/1/1e/Echoes_black_magic_icon.png/revision/latest?cb=20170411145423)](https://vignette.wikia.nocookie.net/fireemblem/images/1/1e/Echoes_black_magic_icon.png/revision/latest?cb=20170411145423)[Death](https://fireemblem.fandom.com/wiki/Death) |
| [![FE15 Exemplar (Mae)](https://vignette.wikia.nocookie.net/fireemblem/images/7/75/FE15_Exemplar_%28Mae%29.gif/revision/latest?cb=20180305165217)](https://vignette.wikia.nocookie.net/fireemblem/images/7/75/FE15_Exemplar_(Mae).gif/revision/latest?cb=20180305165217)[Exemplar](https://fireemblem.fandom.com/wiki/Exemplar) | 1            | [![Echoes white magic icon](https://vignette.wikia.nocookie.net/fireemblem/images/4/49/Echoes_white_magic_icon.png/revision/latest?cb=20170411145423)](https://vignette.wikia.nocookie.net/fireemblem/images/4/49/Echoes_white_magic_icon.png/revision/latest?cb=20170411145423)[Ward](https://fireemblem.fandom.com/wiki/Ward) [![Echoes white magic icon](https://vignette.wikia.nocookie.net/fireemblem/images/4/49/Echoes_white_magic_icon.png/revision/latest?cb=20170411145423)](https://vignette.wikia.nocookie.net/fireemblem/images/4/49/Echoes_white_magic_icon.png/revision/latest?cb=20170411145423)[Restore](https://fireemblem.fandom.com/wiki/Restore) |

Now you migh be a little confused as to why I'm bringing this up, since most Echoes players are aware of how spell lists work. Well, here's where it gets tricky. Because from some research and testing, not all spellcasting classes are created equal. An important thing to note before you get excited about randomized lists is that with one exception, **no caster classes have a custom spell list where they could learn special spells like Miasma, Mire, Death, Medusa, Occular Beam, or Oculus**. Currently, the only way to learn those spells other than hacking would be to promote to the Enchantress class, which would give you access to Mire and Death. 



 From what I'm researching, it seems as there are basically 3 ways that spells are inherited

- Roll-Over spells: Most of these classes work on a "rolled over spells"-type deal where if you've learned a spell, you can roll it over to another class that uses the same kind of black magic.
- Learned spells: For a select few spellcasting classes, they will retain a spell list of the character despite the fact that they normally shouldn't be that class. Details on how this works below
- Preset Spells: No spell learned through leveling up or rolling over spells, but has preset spells to learn
- No Magic: For a few specific classes, you are unable to roll over any learned magic from previous classes. This mainly happens with either white magic or classes that aren't primary spellcasters, mainly Fell Gods.

Here is a table of class data I've compiled on this:

| Class                         | Spell List Type                              | Notes                                                        |
| ----------------------------- | :------------------------------------------- | ------------------------------------------------------------ |
| Mage (of the opposite gender) | Roll-Over spells + Learned Spells            | Will treat the character                                     |
| Sage (If female character)    | Roll-Over spells + Learned Spells            | Will treat the female character like a Priestess and give them Priestess spells and mage spells if they didn't get them earlier |
| Priestess                     | Roll-Over Spells +                           | See Sage, does the same thing but flipped                    |
| Priestess (Celica)            | Roll-Over spells + Learned Spells            | Treats the character like a mage, and can level uip and learn mage spells |
| Enchantress                   | Learned Spells                               | It's not possible to directly class into the Overclasses at this point as far as I know, so you'd have to be a Saint to progress into this class line. So from my research it |
| Cleric                        | None                                         | Will teach Noseferatu/your normal spells if you have a cleric spell list. Otherwise, you will just learn your mage class list. |
| Saint                         | Roll-Over Spells + Learned Spells            | Will roll over your mage spells or cleric spells if you have a cleric spell list, and if you did not go through a magic progression earlier, you will get your Cleric/Saint/Mage spells at their levels. |
| Exemplar                      | Learned Spells                               | It's not possible to directly class into the Overclasses at this point as far as I know, so you'd have to be a Saint to progress into this class line. So from my research it |
| Arcanist                      | Roll-Over Spells + Learned Spells            | Learns mage spells at the mage level                         |
| Cantor                        | Roll-Over Spells + No Magic                  | Learns mage spells at the mage level, but will not learn Sage white magic spells. Will not roll over white magic |
| Witch                         | Roll-Over Spells + Learned Spells + No Magic | Learns the mage spells and will recieve no white magic despite supposedly being able to learn it. |
| Vestal                        | Roll-Over + No Magic                         | Similar to a Witch, learns the mage spells and will recieve no white magic despite supposedly being able to learn it. |
| Balor                         | No Magic                                     | Will not roll over or learn any white magic, even if prelearnt. |
| Deimos                        | Learned Magic                                | Will not roll over mage/sage spells and you will be able to learn mage spells. Your white magic will also appear to roll over but they will not be usable. |
| Fell God                      | No Magic + Roll-Over                         | Wildly inconsistent depending on the character. For some reason on Celica's route, all black magic and attacks are greyed out, and on Alm's route, magic appears usable, but the Fell God will not be able to attack and will just sit there. Additionally, Fell Gods have a mix of a mage and Sage/Priestess spell list, where they learn both mage and sage spell levels (ex. For Deen as Fell God Lv. 1: Fire & Recover, Lv. 4: Sagittae, Lv. 5 Silence) |
| Fell Dragon                   | Learned Class + Roll-Over                    | Will roll over your simultaneous Mage/Sage/Priestess spell list similar to Duma. You will be able to attack with spells, but in most cases you will probabaly want to use Expiration since it hits through defenses/resistances. |
| Tactitian                     | Preset Spells                                | Only learns Thunder (Thoron version) at level 1. Will not learn anything else. |

### Triangle Attack Compatibility

Catria, Palla, and Est all have the personal triangle attack ability that unleashes a super powerful attack when all three are together. They lose the ability when transferring out of the pegausus knight class, but they gain compatibility in a few outside classes that they weren't intended to class into since the developer chose to have compatibility determined by whether or not the unit was a flier. The compatible classes are listed below:

- Pegaus Knight
- Falcon Knight
- Harrier
- Gargoyle
- Deathgoyle
- Necodragon
- White Dragon
- Mogall
- Mila's Servant
- Duma's Apostole
- Garuda
- Fafnir
- Balor

## What are you up to/working on right now?

I'm working on two main things: One, I'm grabbing game asset data and sifting through the spritesheets to build animated GIFs of sprites that only have publicly available non-animated images. Second, I'm going to focus on tweaks to make the tool more usable, such as making the site nicer-looking and adding links to links to install Luma3DS/FEST to actually run the randomization. It's unfortunate that at this current moment. Lastly, I'm also going to spend some time researching class compatibility to see if there are any additional classes that I may have overlooked when designing this. If I've overlooked any, they'll be swiftly added into the possible class arrays.

## Current/Upcoming Extra Features

* **Basic Randomization of a Character or Party:** Randomly generates either a random class for an individual character or generates random classes for Alm's/Celica's party
* **2-Tier Randomization Options:** Ability to determine how to randomize 2-tier classes such as the Mage or Pegasus Knight. Gives the option to Randomize it such that (Mage: Tier 1 Sage: Tier 2, Tier 3) if you want it a little easier, and (Mage: Tier 1, Tier 2, Sage: Tier 3) if you want it a little bit harder.
* **Collection of Animated Map Spirte GIFS:** A near-entire library of animated GIFS of Fire Emblem Echoes map sprites these are suprisingly hard to find. I am still animating sprite GIFS for some of the characters.
* **Specific Character Sprites:** Loads specific character sprites when possible to show you what you character will look like as that option. If a sprite can't be found a generic sprite will display instead. This only works on classes that are possibly through either regular gameplay/pitchfork method. This means that edge cases such as Female Barons, non-Alm Heroes, Male Pegasus Knights will still show generic sprites even though they do have an actual in-game sprites that are generated through the game's head-and-body system for generating map sprites. As time goes on, I am planning on trying to write a program that can mimic the head-and-body system and generate sprites for all possible options.
* **Starting Items (In Progress!):** Randomizes the starting item that a character will get. Currently testing categorization and ability to apply rules to starting item.
* **Quantum Randomization (In Progress):** I'm looking at a way to use quantum randomness to randomize the classes instead of just a traditional pseudo-random generation, especially since you can see the flaws of pseudorandomness manifest with a lot of duplicate class assignments.
* **Genericized Randomization (Future):** In the future, I'm looking to genericize this tool so that it will eventually be plug'n'play so that you can just import a CSV of characters and a dump of sprites. 
* **Starting class save editing (Far Future):** In the far future, am intending on building an add-on for FEST or a save file editor/generator in C++ that pre-randomizes the starting classes via Hex editing. This allows for easy randomization.
* **Class Tree (Far-Far Future):** In the distant future when I get good at writng patches of 3DS games, I am planning on building a C++ Application/Patch that randomizes the game similar to the Universal Pokemon Randomizer for Pokemon games. 

## Awesome! I'd love to do a randomized run, any suggestions?

Yes! Thank you for asking. Below are some rulesets I typed up that you might enjoy using:

[Vanilla Iron Man](https://evinjaff.github.io/FESOV-randomizer/rules/Vanilla%20Iron%20Man%20Run.pdf])

[No-Promote Run](https://evinjaff.github.io/FESOV-randomizer/rules/Vanilla%20Iron%20Man%20Run.pdf])



# I like this but I think you should do/change xyz..

Thanks for your suggestion! If you think there's something I should change, feel free to submit an issue or email me. I know that there's a lot of stuff that I haven't done efficiently since most of my experience is with Java, so I wrote a lot of my JS and JS libraries so I mostly wrote this in pure JavaScript with no additional packages or libraries as they ended up being a little more difficult to implement than I thought. In the future though, I do hope to genericize this 