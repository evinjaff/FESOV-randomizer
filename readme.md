# Fire Emblem Echoes: Shadows of Valentia Randomizer
Current Version: 1.1 (Ugly and Broken Divorce Edition) 

## 1.1 Updates:

- Updated documentation/guide to be more helpful
- Split Ugly classes vs mean classes
- Fixed bugs relating to generating randomization for both parties

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

I am including a table of classes not included in the randomizer to be transparent. I deemed these classes irrelevant for 99.9% of runs and decided not to include these. If you really feel like they need to be included, then I will patch them in during a future update.

| Class Name  | Reason                                                       |
| ----------- | ------------------------------------------------------------ |
| Player Boat | Has 0 movement and was never intended to be an actual character. Also will not be able to wield weapons unless you Mila the character with them holding a weapon (unconfirmed). |
| Enemy Boat  | See Player Boat                                              |
| Unknown     | This is a generic class for when the game can't load a class. (ex. if you don't have DLC installed and a character like Alm is a Conqueror). In this class, your character retains its stats, but its movement is reduced to 1 and the unit cannot attack until you either obtain the DLC or switch back to a game that has the DLC installed. This is an anti-DLC-sharing mechanism that has since been upgraded from Awakening to make the unit useless instead of just not displaying class data when a load fails. |

## Technical Notes on Randomization

### Dungeon Softlocking

Throught some testing, I have determined that Alm **cannot** be reclassed into anything other than his standard Fighter, Hero, Conqueror tree and still retain the right to attack. This means that for certaian dungerons, you can potentially softlock yourself inside a dungeon since Alm cannot break boxes and clear away rubble blocking the bath. The most prominent exmaple of this is the Fear Mountain Shrine on Alm's route, where there is a Mila status that's normally blocked by a stone wall. By reclassing Alm to any class other than his class tree, you get softlocked since you can press A to break the boxes and get through.

### Spell Lists

Some characters have built in spell lists that allow them to learn mage spells outside of just Fire and Thunder! This is awesome, but right now, I still have yet to figure out why some magic classes accept character spell lists, and others dont acccept it. I will do more research and report back.

## What Are you up to/working on right now?

I'm working on two main things: One, I'm grabbing game asset data and sifting through the spritesheets to build animated GIFs of sprites that only have publicly available still images. Second, I'm going to focus on tweaks to make the tool more usable, such as making the site nicer-looking and adding links to links to install Luma3DS/FEST to actually run the randomization. It's unfortunate that at this current moment. Lastly, I'm also going to spend some time researching class compatibility to see if there are any additional classes that I may have overlooked when designing this. If I've overlooked any, they'll be swiftly added into the possible class arrays.

## Current/Upcoming Extra Features

* **Basic Randomization of a Character or Party:** Randomly generates either a random class for an individual character or generates random classes for Alm's/Celica's party
* **2-Tier Randomization Options:** Ability to determine how to randomize 2-tier classes such as the Mage or Pegasus Knight. Gives the option to Randomize it such that (Mage: Tier 1 Sage: Tier 2, Tier 3) if you want it a little easier, and (Mage: Tier 1, Tier 2, Sage: Tier 3) if you want it a little bit harder.
* **Collection of Animated Map Spirte GIFS:** A near-entire library of animated GIFS of Fire Emblem Echoes map sprites these are suprisingly hard to find. I am still animating sprite GIFS for some of the characters.
* **Specific Character Sprites:** Loads specific character sprites when possible to show you what you character will look like as that option. If a sprite can't be found a generic sprite will display instead. This only works on classes that are possibly through either regular gameplay/pitchfork method. This means that edge cases such as Female Barons, non-Alm Heroes, Male Pegasus Knights will still show generic sprites even though they do have an actual in-game sprites that are generated through the game's head-and-body system for generating map sprites. As time goes on, I am planning on trying to write a program that can mimic the head-and-body system and generate sprites for all possible options.
* **Starting Items (In Progress!):** Randomizes the starting item that a character will get. Currently testing categorization and ability to apply rules to starting item.
* **Quantum Randomization (In Progress):** In the future, I'm looking at a way to use quantum randomness to randomize the classes instead of just a traditional pseudo-random generation, especially since you can see the flaws of pseudorandomness manifest with a lot of duplicate class assignments.
* **Starting class save editing (far future):** In the far future, am intending on building an add-on for FEST or a save file editor/generator in C++ that pre-randomizes the starting classes via Hex editing. This allows for easy randomization.
* **Class Tree (far far far Future):** In the distant future when I get good at writng patches of video games, I am planning on building a C++ Application/Patch that randomizes the game similar to the Universal Pokemon Randomizer for Pokemon games. 

## Awesome! I'd love to do a randomized run, any suggestions?

Yes! Thank you for asking. Below are some rulesets I am up in LaTeX that you might enjoy using:

# I like this but I think you should do/change xyz..

Thanks for your suggestion! If you think there's something I should change, feel free to submit an issue or email me.