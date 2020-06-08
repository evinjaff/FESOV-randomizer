# Fire Emblem Echoes: Shadows of Valentia Randomizer
Current Version: 1.0 (Beta)

## What is this for?
This is a randomizer tool for a randomized class run of Fire Emblem Echoes: Shadow of Valentia. Right now, this is just purely a web-based tool to randomize the class of a player; to actually affect the in-game class system, Luma3DS or similar CFW with NTR cheats will be required to be able to hack the Mila Altars to allow for illegal class changes.

## So how do I use this?
Visit [the website](https://evinjaff.github.io/FESOV-randomizer) to try it out. There are two ways to use this. One, you can prerandomize the full run (still in progress). Two, you can randomnize on a "when you get there" model, where you randomize the class for a character when you need to figure out what class they should be when newly promoted/what class they need to be . I will be including a LaTeX docuemnt of how to do that below.

##What Are you up to/working on right now?
I'm working on two main things: One, I'm grabbing game asset data and sifting through the spritesheets to build animated GIFs of sprites that only have publicly available still images. Second, I'm going to focus on tweaks to make the tool more usable, such as making the site nicer-looking and adding links to links to install Luma3DS/FEST to actually run the randomization. It's unfortunate that at this current moment. Lastly, I'm also going to spend some time researching class compatibility to see if there are any additional classes that I may have overlooked when designing this. If I've overlooked any, they'll be swiftly added into the possible class arrays.

##Current/Upcoming Extra Features

* Randomly generates either a random class for an individual character or generates random classes for Alm's/Celica's party

* Ability to determine how to randomize 2-tier classes such as the Mage or Pegauss Knight. Gives the option to Randomize it such that (Mage: Tier 1 Sage: Tier 2, Tier 3) if you want it a little easier, and (Mage: Tier 1, Tier 2, Sage: Tier 3) if you want it a little bit harder.

* A near-entire library of animated GIFS of Fire Emblem Echoes map sprites (harder to find than you may think).

* Specific Character Sprites: Loads specific character sprites when possible to show you what you character will look like as that option. If a sprite can't be found a generic sprite will display instead. This only works on classes that are possibly through either regular gameplay/pitchfork method. This means that edge cases such as Female Barons, non-Alm Heroes, Male Pegasus Knights will still show generic sprites even though they do have an actual in-game sprites that are generated through the game's head-and-body system for generating map sprites. As time goes on, I am planning on trying to write a program that can mimic the head-and-body system and generate sprites for all possible options.

* Starting Items (In Progress!) Randomizes the starting item that a character will get.

* Starting class save editing (far future): In the far future, am intending on building an add-on for FEST or a save file generator to pre-randomize starting classes via Hex editing.
