# Fire Emblem Echoes: Shadows of Valentia Randomizer
Current Version: 1.3 (Shut up Tobin Edition)

# I am not maintaining this project anymore, but I may come back to this later. I've really gotten into Wii Homebrew recently and have been focused on playing around with that.

## 1.3 Updates:

- Crushed some more bugs and made some efficiency fixes!
- Added JSON support for Paragon integration

## WTF is this?/What is this for?

This is a randomization tool to generate a randomized class run of Fire Emblem Echoes: Shadow of Valentia. Right now, the tool is pretty simple, it generates a table of a character's class progression and gives the option to export the class table, either as a CSV for your reference, or as a JSOn for use with Paragon or other applications which support importing a JSON of the similar format to edit game data.

## What do I need to randomize a run?

If you want to do a randomized run of Fire Emblem Echoes: Shadows of Valentia, you will need a few things for the best experience. There are curently 2 methods to do this, one: editing the romfs (is a little tricky but will make your life easier in the long run) and two: using NTR cheats to set classes at Mila altars (is easier to set up, but will be a major pain as time goes on). **Regardless of what option you choose, you will need a 3DS** **with** **Luma3DS** **or a similar CFW with NTR's most recent cheat database as well as a physical or digital copy of Fire Emblem Echoes: Shadows of Valentia** (NTR's cheat database will come stock if you choose Luma and no extra install is needed).

[3DS Hacks/CFW Guide](https://3ds.hacks.guide/)

[Luma3DS](https://github.com/LumaTeam/Luma3DS/releases)

### If you want to edit the romfs to randomize (recommended), you will need:

-A Windows machine

-GodMode9 or a way to obtain SoV's romfs

-[thane98's Paragon application](https://github.com/thane98/paragon) (it does require you to install some python and rust libraries in order for it to run)

-A modern web browser (except for Microsoft Edge, for some reason it really hates jQuery. This has been tested on the most recent versions of Chrome and Firefox, so use those if you can't get them to work elsewhere.)

### If you want to use cheats to randomize (not reccomended), you will need:

-Some way to view a CSV

## Ok, I'm interested! How do I actually randomize?

### For romfs Method (reccomended):

1. Using GodMode9 or a similar tool, unpack the romfs (ROM filesystem) of the game. The easiest way to do this is to use GodMode9 which will take a couple hours for a full dump. ([I have a written up Gist of how to do that here](https://gist.github.com/evinjaff/f8d743995c6acc90a12ff3e1fd962300))  
2. Use the tool on my github site to generate a class list. Make sure you're randomizing it for a full party, not just an individual character. For more details on that check out the "How to use this tool" section.
3. Once you've clicked either "Randomize Both Routes", "Randomze Alm's Route", or "Randomize Celica's Route" you should see two buttons pop up. One should read "Export Class List (via CSV)", and one should read "Export Class List (via JSON for Paragon)." You'll want to click on both buttons. A JSON file and CSV file should download.
4. Now open the paragon application. Load in the RomFS folder, and make an empty folder to serve as the outupt folder. Then, select FE15 as the game, and wait a few seconds for the editor to load. Once the editor has loaded, click "File"->"Import..." and then import the JSON that was downloaded. Now that the JSON has been imported, you are free to change anything else beyond the scope of randomization (ex. modify class data, tweak character description, etc.) Depending on what run you choose, you may need to tweak things to make the run more playable.
5. Once you've made your tweaks and clicked "Save," All of the modified files should appear inside the ouput folder you picked. In the case of most game data stuff, it should appear inside a folder called "Data." You'll then want to copy this to the SD card of the Luma3DS system. If it doesn't already exist, make a new folder so you can navigate to SDCard/luma/titles/. Once you're there, you'll need to make a new folder that matches the .3ds title naming convention. You can find this by opening GodMode9 on your 3DS, and inside the Gamecart() directory, you should find a .trim.3ds file with a long list of numbers and letters that denote the ID. For my North American copy of echoes, the ID is: 00040000001B4000. Make a new folder with this ID so that the directory looks like this: SDCard/luma/titles/00040000001B4000/. With that new folder, add a romfs folder, and import **only the newly created files**. So, for example, the Character data file inside the Data folder should be navigable by going to: SDCard/luma/titles/00040000001B4000/romfs/Data/Person.bin.lz
6. With this now added. Boot up your 3DS in the Luma config mode by holding "Select" on boot. This should pull up a menu that allows you to tweak some OS settings. navigate down until "Enable game patching" is highlihged in red, then click "A" and start. The system should boot up to the home screen. At this point, launch the game, and hopefully everything should be randomized to your liking.
7. Unfortunately, you will still have to use NTR cheats to promote classes. Check the Reclassing/Promoting Using romfs section.

### For Vanilla Luma3DS Method:

This is a little easier in terms of initial setup, but definetly has drawbacks. I'd only reccomend this way for someone who is having difficulties getting the proper Python and Rust libraries installed to run Paragon/isn't able to run Paragon due to other limitations.

1. Have a 3DS with Luma3DS installed.
2. Use the tool to randomize a party to your liking
3. Click "Randomize Both Parties", and then "Export Class List (via CSV)." A CSV should download.
4. Play through FE15 as normal. When you reach your first Mila altar on Alm's route, now you'll have to reassign the whole party to different classes. To do this, trigger the Rosalina menu on your 3DS while playing FE15 (default command to do so is: L+Down+Select), and then select "Cheats..." and then scroll down using down on the d-pad to select the "All classes selectable by class change" on the second page. Change the classes using the Mila according to the CSV file's list. Do this as well for any new recruits/when a character needs to promote.

## Additional things:

### Reclassing/Promoting using romfs:

The only way to reclass into your next randomized class, at least until some work gets done, is to use the same NTR cheat in the Luma3DS method to promote to a higher class. Unfortunately, it's highly likely that when you go to reclasss using the Mila Altar, your 3DS will crash due to an ARM11 exception. This is because cheats and RomFS do not cooperate, even if they modify different things. However, there is a way to fix this. The steps to do so are below:

1. Save your copy of FE15, and then power off your 3DS.
2. Boot up Luma's Menu by holding "select" on boot. Highlight "(x) Enable Game Patching", and click A to deselect it so that it reads "( ) Enable Game Patching." Then, press start and launch FE15 from the homescreen like normal.
3. Go to the nearest Mila Altar, and then trigger the Rosalina menu on your 3DS while playing FE15 (default command to do so is: L+Down+Select). Select "Cheats..." and then scroll down using down on the d-pad to select the "All classes selectable by class change" on the second page. 
4. Change the classes using the Mila according to the CSV file you downloaded when setting up the romfs.

# Randomization/Class Mechanics Info

## What do the randomization rules/classes mean?

Here is a breakdown of all the randomization rules (In Progress):

- Standard Classes?
- Amiibo Classes?
- Enemy Classes?
- Broken/Ugly Classes?
- Alm and Celica Classes?
- Generate Overclass?

### Allow Standard Classes?

This is on by default and allows all the standard classes in the game to be added to the class pool. While this is the standard array of classes, this will not gender lock classes, so you will get cross-gender class assignments such as as a Female Bow Knight or a Male Cleric. This will also include standard single-promotion classes such as mages and pegasus knights. You will have the option of how to determine the tiers of the classes; with you either having the option to select the base class as being tier 1 and 2, or selecting the promoted class to be tier 2 and 3.

The classes included are:

| Tier | Classes                                                   |
| ---- | --------------------------------------------------------- |
| 1    | Villager, Archer, Cavalier, Soldier, Mercenary, Boy, Girl |
| 2    | Myrmidon, Sniper, Paladin, Knight,                        |
| 3    | Dread Fighter, Baron, Bow Knight, Gold Knight             |
| 1/2  | Mage (Male and Female), Pegasus Knight, Cleric            |
| 2/3  | Falcon Knight, Sage, Priestess, Saint                     |

### Allow Amiibo Classes?

This allows all Amiibo-exclusive classes to be options. Amiibo-exclusive classes were the classes of the illusory fighters that can be summoned via scanning Amiibos such as Lucina, Roy, and Robin. These classes are untiered and possilbe randomizations at every level if enabled. This is by far the coolest option, since the characters models classed into these look a lot like how the Lodestar, Great Lord, Ranger, and Tactitian classes were in *Fates*! So, this means that you could be classed as Lucina, or Marth if you so pleased. **It is highly reccomended that you edit the various Amiibo class strengths in paragon to be a value between 5 and 8 so that the Amiibo class characters don't become weak Jagens and steal all the XP** (their default class strength is 9 and will make the early game extremely difficult if you decide to keep it that way). In total, this allows for these classes to be used:

| Tier       | Classes                                                      |
| ---------- | ------------------------------------------------------------ |
| 1, 2 and 3 | Lord (Marth), Lord (F. Corrin), Lord (M. Corrin), Lord (Roy),  Lord (Lucina),  Hero (Ike), Tactitian (Robin) |

### Allow Enemy Classes?

This allows all compatible Enemy-exclusive classes to be options. It was a tough choice, but I decided to only include the Enemy Classes that look reasonably like someone was that class for this. This basically means do the heads fit on well (or does the class do a good job at fully concealing the head), and with the exception of a little bit of clipping, does it feel like you character could truly be that class? If you want every single Enemy class available for class change, check this box and the Ugly Classes option. Checking just Enemy Classes allows these possible classes:

| Tier     | Classes                                    |
| -------- | ------------------------------------------ |
| 1        | Arcanist, Brigand, Mogall                  |
| 2        | Mogall, Brigand                            |
| 3        | Balor, Dagon, Fire Dragon, Fiend, Guardian |
| Untiered | Cantor, Arcanist, Witch                    |



### Allow Ugly Classes?

This option adds all enemy classes that are reasonablay balanced but don't have a good way to position the head to the class pool. This does result in the game feeling much more hacked and thereby breaking immersion.

*Note about Revenant/Entombed Classes: Both of these classes have mirrored versions of their normal classes in which you have access to numbing or posion claws. Due to the massive power that this gives you in the early game, I have opted to consider the Venin/Numbing Claw variants promoted versions of the original due to how busted the poisioned/numbing conditions are.*

| Tier     | Classes                                                      |
| -------- | ------------------------------------------------------------ |
| 1        | Gargoyle, Entombed (Normal), Revenant (Normal), Bonewalker   |
| 2        | Entombed (Numbing), Entombed (Venin), Revenant (Numbing),  Revenant (Numbing), Titan, Lich, Necodragon, Fafnir, Bonewalker |
| 3        | Deathgoyle, Lich, Garuda, Deimos, Vestal, Mila's Apostole, White Dragon, Duma's Servant |
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

Throught some testing, I have determined that Alm can only be reclassed into a Fighter, Hero, Conqueror, or Unknown and still retain the ability to attack in dungeons. This means that for certain dungerons, you can potentially softlock yourself inside a dungeon since Alm will not be able to break boxes blocking the path to the boss. The most prominent exmaple of this is the Fear Mountain Shrine on Alm's route, where there is a Mila altar that is blocked by a stone wall and some boxes. If you enter the room and reclass Alm into a class other than his class tree or an Unknown, he will lose the ability to attack when you press A, meaning that once you leave the Mila statue, you can potentially softlock the game, or lose the ability to thoroughly explore most dungeoons.

### Spell Lists

As most of you know, some characters are naturally oriented towards spellcasting (ex. Kliff, Mae, Conrad, Delthea), and as a result have a special spell list that dictates which spells they learn.  For example, here is Mae's Spell list (Source: Fire Emblem Fandom):

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

Now you migh be a little confused as to why I'm bringing this up, since most Echoes players are aware of how spell lists work. Well, here's where it gets tricky. From some research and testing, not all spellcasting classes are created equal. An important thing to note before you get excited about randomized classes is that with a few special exceptions, **no classes have a custom spell list where they can learn special spells like Miasma, Mire, Death, Medusa, Occular Beam, or Oculus**. If you do want to add these spells in, you can use paragon to hack it in. A lot of this information is mainly just for people who want to retain everything about the game except for classes, so disregard this if you're going to hack a lot of stuff in using paragon.

 From what I've figured out, it seems as there are basically four ways that spells are inherited

- Roll-Over spells: Most of these classes work on a "rolled over spells"-type deal where if you've learned a spell, you can roll it over to another class that uses the same kind of black magic.
- Learned spells: For a decent number of spellcasting classes, they will retain a spell list of the character despite the fact that they normally shouldn't be that class. Details on how this works below
- Preset Spells: Spells are determined by preset spells defined by the class.
- No Magic: For a few specific classes, you are unable to roll over any learned magic from previous classes, and this class itself will not have any preset spells to teach you. This mainly happens with either white magic or classes that aren't primary spellcasters, mainly variant classes that get the ability to use White Magic to fortify.

Here is a table of class data I've compiled on this:

| Class                         | Spell List Type                              | Notes                                                        |
| ----------------------------- | :------------------------------------------- | ------------------------------------------------------------ |
| Mage (of the opposite gender) | Roll-Over spells + Learned Spells            | Will treat the character like a normal mage regardless of gender |
| Sage (If female character)    | Roll-Over spells + Learned Spells            | Will treat the female character like a Priestess and give them Priestess spells and mage spells if they didn't get them earlier |
| Priestess                     | Roll-Over Spells +                           | See Sage, does the same thing but flipped                    |
| Priestess (Celica)            | Roll-Over spells + Learned Spells            | Treats the character like a mage, and can level up and learn mage spells |
| Princess                      | Roll-Over spells + Learned Spells            | Treats characters like a promoted Sage/Priestess             |
| Rigain                        | Preset Spells                                | It's not possible to directly class into the Overclasses as far as I know since its DLC, so you'd have to be a Princess to progress into this class line without some tricky save editing. Regardless, I found from testing that you will allways learn Aura if you Idol to Enchantress, even if you're not supposed to be in this class. |
| Enchantress                   | Preset Spells                                | It's not possible to directly class into the Overclasses as far as I know since its DLC, so you'd have to be a Priestess to progress into this class line without some tricky save editing. Regardless, I found from testing that you will allways learn Mire and Death if you Idol to Enchantress, even if you're not supposed to be in this class. |
| Guru                          | Preset Spells                                | Similar to the Enchantress, it's not possible to directly class into the Overclasses at this point without some save editing. When you class into Guru via Mila, you will gain access to the Guru's standard Lemegeton white magic. |
| Cleric                        | None                                         | Will teach Noseferatu/your normal spells if you have a cleric spell list. Otherwise, you will just learn your mage class list. |
| Saint                         | Roll-Over Spells + Learned Spells            | Will roll over your mage spells or cleric spells if you have a cleric spell list, and if you did not go through a magic progression earlier, you will get your Cleric/Saint/Mage spells at their levels. |
| Exemplar                      | Preset Spells                                | It's not possible to directly class into the Overclasses at this point as far as I know, so you'd have to be a Saint to progress into this class line. Regardless if you Altar into this class, you will gain the preset Ward and Restore spells even if you don't have a cleric spell list. |
| Harrier                       | Preset Spells                                | Similar to other overclassed casters. Harriers will allways learn Fire. |
| Arcanist                      | Roll-Over Spells + Learned Spells            | Learns mage spells at the mage level                         |
| Cantor                        | Roll-Over Spells + No Magic                  | Learns mage spells at the mage level, but will not learn Sage white magic spells. Will not roll over white magic |
| Witch                         | Roll-Over Spells + Learned Spells + No Magic | Learns the mage spells and will recieve no white magic despite supposedly being able to learn it. |
| Vestal                        | Roll-Over + No Magic                         | Similar to a Witch, learns the mage spells and will recieve no white magic despite supposedly being able to learn it. |
| Balor                         | No Magic                                     | Will not roll over or learn any white magic, even if prelearnt. |
| Deimos                        | Learned Magic + No Magic                     | Will not roll over mage/sage spells, but you will be able to learn mage spells. Your white magic, learned or rolled over will not be usable. |
| Fell God                      | No Magic + Roll-Over                         | Wildly inconsistent depending on the character. For some reason on Celica's route, all black magic and attacks are greyed out, and on Alm's route, magic appears usable, but the Fell God will not be able to attack and will just sit there. Additionally, Fell Gods have a mix of a mage and Sage/Priestess spell list, where they learn both mage and sage spell levels (ex. For Deen as Fell God Lv. 1: Fire & Recover, Lv. 4: Sagittae, Lv. 5 Silence) |
| Fell Dragon                   | Learned Class + Roll-Over                    | Will roll over your simultaneous Mage/Sage/Priestess spell list similar to Duma. You will be able to attack with spells, but in most cases you will probabaly want to use Expiration since it hits through defenses/resistances. A funny note is that the spellcasting animations for Fell Dragon, are the same as using Expiration, so it will still just look like a Fell Dragon using Expiration. |
| Tactitian                     | Preset Spells                                | Only learns Thunder (Thoron version) at level 1. Will not learn anything else. |

### Triangle Attack Compatibility

Catria, Palla, and Est all have the personal triangle attack ability that unleashes a super powerful attack when all three are together. They lose the ability when transferring out of the pegausus knight class. However, the game devs chose to decide triangle attack ability based on if the character was a flyer, since pegasus knights were the only playable character class in the game (RIP Wyvern Riders.) So as a result, they gain compatibility in some outside classes that they weren't intended to class because of the developers' poor choice. The options are listed below:

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

I'm working on two main things: One, I'm grabbing game asset data and sifting through the spritesheets to build animated GIFs of sprites that only have publicly available non-animated images. Second, I'm going to focus on tweaks to make the tool more usable, such as allowing an export to PDF/CSV option that is probabaly much easier than just using print to save a PDF.

## Current and Upcoming Extra Features

* **Basic Randomization of a Character or Party:** Randomly generates either a random class for an individual character or generates random classes for Alm's/Celica's party
* **2-Tier Randomization Options:** Ability to determine how to randomize 2-tier classes such as the Mage or Pegasus Knight. Gives the option to Randomize it such that (Mage: Tier 1 Sage: Tier 2, Tier 3) if you want it a little easier, and (Mage: Tier 1, Tier 2, Sage: Tier 3) if you want it a little bit harder.
* **Collection of Animated Map Spirte GIFS:** A near-entire library of animated GIFS of Fire Emblem Echoes map sprites these are suprisingly hard to find. I am still animating sprite GIFS for some of the characters.
* **Specific Character Sprites:** Loads specific character sprites when possible to show you what you character will look like as that option. If a sprite can't be found a generic sprite will display instead. This only works on classes that are possibly through either regular gameplay/pitchfork method. This means that edge cases such as Female Barons, non-Alm Heroes, Male Pegasus Knights will still show generic sprites even though they do have an actual in-game sprites that are generated through the game's head-and-socket system for making map sprites. As time goes on, I am planning on trying to write a program that can mimic the head-and-socket system and generate sprites for all possible options. Hopefully if anyone ever decides to make hacks for FE15 they could use it later.
* **Starting class save editing (Done!):** I've since added a method to export a JSON, which will allow you to modify the romfs in the paragon application so that you can play the game with random base classes, and only need to use NTR cheats minimally.
* **Starting Items (In Progress!):** Randomizes the starting item that a character will get. Currently writing a scraper and tagger to inventory all the possible game items and set attributes to categorize them (ex. Amiibo weapons, provisions, lances, etc.)
* **Quantum Randomization (In Progress):** I'm looking at a way to use quantum randomness to randomize the classes instead of just a traditional pseudo-random generation, especially since you can see the flaws of pseudorandomness manifest with a lot of duplicate class assignments. Once I find a solid JS library that doesn't cost a Kidney to buy a liscense, I will include it. I may also compromise on this, and just find a better Mersenne Twister for randomization.
* **Genericized Randomization (Future):** In the future, I'm also looking to genericize this tool so that it will be plug'n'play so that you can just import a CSV of classes so you could do this for FE8, FE13, or any other game really.
* **Class Tree (This is possible but far off):** In the distant future, I could figure out a way in this application to write 2 JSON files with custom classes that account for the shift in memory so that you don't need NTR cheats at all. Would be awesome to make, but that seems like it may be outside my abilities.

## Awesome! I'd love to do a randomized run, any suggestions?

Yes! Thank you for asking. Below are some rulesets I typed up that you might enjoy using (these were written for the Luma method, but are functionally identical using the romfs method):

<a href = "https://evinjaff.github.io/FESOV-randomizer/rules/VanillaIronMan.pdf" target="_blank">Vanilla Iron Man</a>

<a href = "https://evinjaff.github.io/FESOV-randomizer/rules/BadGuy.pdf" target="_blank">Bad Guy Run</a>

<a href = "https://evinjaff.github.io/FESOV-randomizer/rules/CompleteChaos.pdf" target="_blank">Complete Chaos</a>

<a href = "https://evinjaff.github.io/FESOV-randomizer/rules/SmashEmblem.pdf" target="_blank">Smash Emblem</a>

<a href = "https://evinjaff.github.io/FESOV-randomizer/rules/NoPromote.pdf" target="_blank">Base Class Run</a>

