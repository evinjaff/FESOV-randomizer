# Fire Emblem Echoes: Shadows of Valentia Randomizer
Current Version: 1.0 (Beta)

##What is this for?
This is a randomizer tool for a randomized class run of Fire Emblem Echoes: Shadow of Valentia. Right now, this is just purely a web-based tool to generate random classlists, and is NOT an application that modifies 3DS saves or patches 3DS games (although I may spend some time developing this depending on reception). If you want to do a randomized run of Fire Emblem Echoes: Shadows of Valentia, you will also need 3DS-side tools to modify the game. I suggest Luma3DS or similar CFW with NTR's most recent cheat database (should come stock with Luma). With this on your system, you should be able to pull up the cheat menu in-game, and be able to use NTR's "All class selectable by class change" to hack the Mila altars to allow for the custom classes. Links will be provided below, and in addition, I am leaving a copy of the cheat that makes this possible:

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

##So how do I run a randomized game?
Well, assuming you have the aforementioned setup (Luma3DS/CFW, NTR cheats, as well as a digital/physical copy of Fire Emblem Echoes), you now have two options to randomnize your run. You have randomize-as-you go, where whenever you gain a new character/need to promote a character you randomize on the spot; or you can pre-randomize the entire game beforehand by using the "Randomize Party" feature. Examples of how both work are detailed below. I have also detailed a summary of what each option means after that.

###Randomize-as-You-Go-Example
You just recruited Silque in Act 1. You select Silque from the drop-down menu for characters, and then check the class tier (Silque starts as a tier 1 class, so you'll choose tier 1), then choose the conditions you want such as allowing Amiibo classes or Enemy Classes and then hit randomize. After you get Silque's class, (let's say she got Pegasus Knight) you load in the cheat code, and visit a Mila alter to IMMEDIATELY change Silque's class into its randomized option (in this case a Pegasus Knight).

###Pre-Randomized Example
Before the game starts, you visit the to randomize a class matrix for the entire game. After setting Amiibo/Enemy class conditions, you press "Randomize Both" to randomize Alm's Route and Celica's, and you save a copy of the exported class list. So now, whenever you recruit a new unit, such as Silque in the previous example, you cross-reference your character sheet to determine what class to change her into.

Visit [the website](https://evinjaff.github.io/FESOV-randomizer) to try it out.

###What do the randomization rules mean?
Here is a breakdown of all the randomization rules (In Progress):
Include Classes?
 Amiibo Classes?
 Enemy Classes?
 Broken/Ugly Classes?
Alm and Celica Classes?

* Allow Amiibo Classes?: This allows all Amiibo-exclusive classes to be options. Amiibo-exclusive classes were the classes of the illusory fighters that can be summoned via scanning Amiibos such as Lucina, Roy, and Robin. So, this means that you could be classed as Lucina, or Marth if you so pleased. In total, this allows these classes to be used:

Lord (Marth), Lord (F. Corrin), Lord (Roy),  Lord (Lucina),  Hero (Ike), Tactitian (Robin)


##What Are you up to/working on right now?
I'm working on two main things: One, I'm grabbing game asset data and sifting through the spritesheets to build animated GIFs of sprites that only have publicly available still images. Second, I'm going to focus on tweaks to make the tool more usable, such as making the site nicer-looking and adding links to links to install Luma3DS/FEST to actually run the randomization. It's unfortunate that at this current moment. Lastly, I'm also going to spend some time researching class compatibility to see if there are any additional classes that I may have overlooked when designing this. If I've overlooked any, they'll be swiftly added into the possible class arrays.

##Current/Upcoming Extra Features

* Randomly generates either a random class for an individual character or generates random classes for Alm's/Celica's party

* Ability to determine how to randomize 2-tier classes such as the Mage or Pegauss Knight. Gives the option to Randomize it such that (Mage: Tier 1 Sage: Tier 2, Tier 3) if you want it a little easier, and (Mage: Tier 1, Tier 2, Sage: Tier 3) if you want it a little bit harder.

* A near-entire library of animated GIFS of Fire Emblem Echoes map sprites (harder to find than you may think).

* Specific Character Sprites: Loads specific character sprites when possible to show you what you character will look like as that option. If a sprite can't be found a generic sprite will display instead. This only works on classes that are possibly through either regular gameplay/pitchfork method. This means that edge cases such as Female Barons, non-Alm Heroes, Male Pegasus Knights will still show generic sprites even though they do have an actual in-game sprites that are generated through the game's head-and-body system for generating map sprites. As time goes on, I am planning on trying to write a program that can mimic the head-and-body system and generate sprites for all possible options.

* Starting Items (In Progress!) Randomizes the starting item that a character will get.

* Starting class save editing (far future): In the far future, am intending on building an add-on for FEST or a save file generator to pre-randomize starting classes via Hex editing.
