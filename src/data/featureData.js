/* Template & Notes:

{
    id: "",
    title: "",
    stage: "",
    description: "",
    category: "",
    image: "",
    target: "",
    assigned: "",
    priority: "",
    difficulty: "",
},

id must be unique
title is limited to ~30 characters
stages: concept, requirements, analysis, design, build, SIT, UAT, Implemented
description is limited to ~100 words?
image: place in image folder, use placeholder.png if no image yet
target: release number if known, otherwise alpha/beta/launch/postlaunch
assigned must use this format: 
["img1"], 

or 

["img1", "img2", "img3"],

    pip_time.png = unassigned
    pip_fire.png = sabrael
    pip_earth.png = kerden
    pip_water.png = dalta
priority: 1-5, 1 being low, 5 being high
difficulty: 1-10, 1 being low, 10 being high
*/

const featureData = [
    {
        id: "1",
        title: "Hot Reloading",
        stage: "Analysis",
        description: "Expand ability to reload xml/lua/etc on demand to immediately implement updates, bypassing server restart",
        category: "Architecture",
        image: "placeholder.png",
        target: "0.9.x",
        assigned: ["pip_earth.png"],
        priority: "4",
        difficulty: "5",
    },
    {
        id: "2",
        title: "LUA Refactoring",
        stage: "Implemented",
        description: "Unify LUA object hierarchy to match existing Hybrasyl structures, and improve functionality",
        category: "Implemented",
        image: "placeholder.png",
        target: "0.9.3",
        assigned: ["pip_earth.png"],
        priority: "4",
        difficulty: "5",
    },
    {
        id: "3",
        title: "Asynchronous Dialogs",
        stage: "Implemented",
        description: "Improve asynchronous dialogs (dialogs a player shows to another). Mainly, they barely work currently.",
        category: "Architecture",
        image: "placeholder.png",
        target: "0.9.3",
        assigned: ["pip_earth.png"],
        priority: "4",
        difficulty: "5",
    },
    {
        id: "4",
        title: "Multi-Threaded Game Logic",
        stage: "Concept",
        description: "Allow certain game logic to run concurrently, increasing Hybrasyl's scalability.",
        category: "Architecture",
        image: "placeholder.png",
        target: "1.0.x",
        assigned: ["pip_earth.png"],
        priority: "3",
        difficulty: "10",
    },
    {
        id: "5",
        title: "Server Federation Protocol",
        stage: "Concept",
        description: "Protocol to allow characters to move between linked instances of Hybrasyl.",
        category: "Architecture",
        image: "placeholder.png",
        target: "Post-launch",
        assigned: ["pip_earth.png"],
        priority: "1",
        difficulty: "10",
    },
    {
        id: "6",
        title: "Instancing",
        stage: "Concept",
        description: "Implement instancing for usage in dungeons/scenarios.",
        category: "Architecture",
        image: "placeholder.png",
        target: "Beta",
        assigned: ["pip_earth.png", "pip_fire.png", "pip_water.png"],
        priority: "4",
        difficulty: "9",
    },
    {
        id: "7",
        title: "Player Housing",
        stage: "Concept",
        description: "Implement neighborhoods in cities, allowing players to purchase apartments/homes. Needs Instancing completed.",
        category: "Player Systems",
        image: "placeholder.png",
        target: "Beta",
        assigned: ["pip_earth.png", "pip_fire.png", "pip_water.png"],
        priority: "3",
        difficulty: "8",
    },
    {
        id: "8",
        title: "Guild Housing",
        stage: "Concept",
        description: "Implement guild housing, allowing for events, upgrades, etc. Needs instancing completed.",
        category: "Player Systems",
        image: "placeholder.png",
        target: "Beta",
        assigned: ["pip_earth.png", "pip_fire.png", "pip_water.png"],
        priority: "3",
        difficulty: "8",
    },
    {
        id: "9",
        title: "Cults",
        stage: "Design",
        description: "Create system to allow players to establish new religions, build new temples",
        category: "Player Systems",
        image: "placeholder.png",
        target: "Beta",
        assigned: ["pip_earth.png", "pip_fire.png", "pip_water.png"],
        priority: "3",
        difficulty: "6",
    },
    {
        id: "10",
        title: "Religion",
        stage: "Design",
        description: "Refresh and implement religion system, allow for expansion",
        category: "Player Systems",
        image: "placeholder.png",
        target: "Beta",
        assigned: ["pip_earth.png", "pip_fire.png", "pip_water.png"],
        priority: "4",
        difficulty: "4",
    },
    {
        id: "11",
        title: "Politics",
        stage: "Design",
        description: "Overhaul political system and implement",
        category: "Player Systems",
        image: "placeholder.png",
        target: "Beta",
        assigned: ["pip_earth.png", "pip_fire.png", "pip_water.png"],
        priority: "4",
        difficulty: "4",
    },
    {
        id: "12",
        title: "College",
        stage: "Design",
        description: "Refresh and implement college system, allow for expansion",
        category: "Player Systems",
        image: "college.png",
        target: "Beta",
        assigned: ["pip_earth.png", "pip_fire.png", "pip_water.png"],
        priority: "4",
        difficulty: "4",
    },
    {
        id: "13",
        title: "Theater",
        stage: "Concept",
        description: "Create system for hosting theatrical elements",
        category: "Player Systems",
        image: "theater.png",
        target: "Beta",
        assigned: ["pip_earth.png", "pip_fire.png", "pip_water.png"],
        priority: "4",
        difficulty: "5",
    },
    {
        id: "14",
        title: "Horizontal Master Progression",
        stage: "Concept",
        description: "Implement specialization categories to allow players to gain bonuses for preferred play-style and unlock perks",
        category: "Player Systems",
        image: "placeholder.png",
        target: "Post-Launch",
        assigned: ["pip_earth.png", "pip_fire.png", "pip_water.png"],
        priority: "2",
        difficulty: "8",
    },
    {
        id: "15",
        title: "Account Manager Overhaul",
        stage: "Analysis",
        description: "Implement character password resets, mail notifications, and more in HAM, with game server support",
        category: "UI/UX",
        image: "placeholder.png",
        target: "0.9.X",
        assigned: ["pip_earth.png"],
        priority: "4",
        difficulty: "5",
    },
    {
        id: "16",
        title: "Character Linking",
        stage: "Design",
        description: "Create accounts and allow 10+ characters to be linked to them.",
        category: "UI/UX",
        image: "placeholder.png",
        target: "0.9.X",
        assigned: ["pip_earth.png"],
        priority: "4",
        difficulty: "2",
    },
    {
        id: "17",
        title: "Website 2.0",
        stage: "Design",
        description: "Rebuild website from ground up to support more modern (post 2008) features",
        category: "UI/UX",
        image: "placeholder.png",
        target: "TBD",
        assigned: ["pip_fire.png"],
        priority: "1",
        difficulty: "3",
    },
    {
        id: "18",
        title: "Website - Game Knowledge",
        stage: "Design",
        description: 'Create "da-wizard" style info pages, autogenerated from world data',
        category: "UI/UX",
        image: "placeholder.png",
        target: "TBD",
        assigned: ["pip_fire.png", "pip_water.png"],
        priority: "1",
        difficulty: "2",
    },
    {
        id: "19",
        title: "Website - Loures Library",
        stage: "Design",
        description: "Integrate loures library github into website via forestry",
        category: "UI/UX",
        image: "placeholder.png",
        target: "TBD",
        assigned: ["pip_earth.png", "pip_fire.png", "pip_water.png"],
        priority: "1",
        difficulty: "2",
    },
    {
        id: "20",
        title: "Website - Other Pages",
        stage: "Concept",
        description: "Flesh out website to include more info about the game, history, etc.",
        category: "UI/UX",
        image: "placeholder.png",
        target: "TBD",
        assigned: ["pip_fire.png"],
        priority: "1",
        difficulty: "2",
    },
    {
        id: "21",
        title: "Implement 2FA for HAM",
        stage: "Concept",
        description: "Add multi-factor authentication to HAM accounts",
        category: "UI/UX",
        image: "placeholder.png",
        target: "TBD",
        assigned: ["pip_earth.png"],
        priority: "1",
        difficulty: "5",
    },
    {
        id: "22",
        title: "GitHub Board Integrations",
        stage: "Concept",
        description: "Create functionality to allow read only boards which are autogenerated from a GitHub repository (think Loures Library)",
        category: "UI/UX",
        image: "placeholder.png",
        target: "Beta",
        assigned: ["pip_earth.png"],
        priority: "2",
        difficulty: "5",
    },
    {
        id: "23",
        title: "Periodic Mail Digest",
        stage: "Concept",
        description: "Create optional functionality to allow ingame mail & subscribed boards to be forwarded to a player's email on a periodic basis",
        category: "UI/UX",
        image: "placeholder.png",
        target: "Beta",
        assigned: ["pip_earth.png"],
        priority: "2",
        difficulty: "2",
    },
    {
        id: "24",
        title: "Internal/External Cutscenes",
        stage: "Concept",
        description: "Create functionality to allow ingame cutscenes, and discrete linking to optional external cutscenes",
        category: "UI/UX",
        image: "placeholder.png",
        target: "TBD",
        assigned: ["pip_fire.png", "pip_water.png"],
        priority: "2",
        difficulty: "8",
    },
    {
        id: "25",
        title: "Launcher 2.0",
        stage: "Concept",
        description: "Burn existing launcher to ground and redo in electron/maui",
        category: "Support Programs",
        image: "placeholder.png",
        target: "TBD",
        assigned: ["pip_fire.png"],
        priority: "3",
        difficulty: "10",
    },
    {
        id: "26",
        title: "Public XML Editor",
        stage: "Build",
        description: "Create graphical UI to assist in managing XML files",
        category: "Support Programs",
        image: "creidhne.png",
        target: "Beta",
        assigned: ["pip_fire.png"],
        priority: "4",
        difficulty: "7",
    },
    {
        id: "27",
        title: "Client 2.0",
        stage: "Concept",
        description: "Burn existing client to the ground, kick, and then redo in C# / Unity",
        category: "Support Programs",
        image: "placeholder.png",
        target: "Post-launch",
        assigned: ["pip_earth.png","pip_fire.png"],
        priority: "1",
        difficulty: "10",
    },
    {
        id: "28",
        title: "Public Map Editor",
        stage: "Concept",
        description: "Create new map editor with fuller function set",
        category: "Support Programs",
        image: "placeholder.png",
        target: "TBD",
        assigned: ["pip_fire.png"],
        priority: "4",
        difficulty: "7",
    },
    {
        id: "29",
        title: "Public Asset Editor",
        stage: "Concept",
        description: "Create graphical UI to assist with importing/exporting assets",
        category: "Support Programs",
        image: "placeholder.png",
        target: "TBD",
        assigned: ["pip_fire.png"],
        priority: "1",
        difficulty: "10",
    },
    {
        id: "30",
        title: "New/Refreshed Assets",
        stage: "Concept",
        description: "Deep dive on existing assets to cleanup/expand/replace, and add new assets",
        category: "UI/UX",
        image: "placeholder.png",
        target: "TBD",
        assigned: ["pip_fire.png", "pip_water.png"],
        priority: "2",
        difficulty: "10",
    },
    {
        id: "31",
        title: "Dungeons",
        stage: "Concept",
        description: "Implement and create dark ages-style multi-player, instanced dungeons",
        category: "World",
        image: "placeholder.png",
        target: "1.0.X",
        assigned: ["pip_earth.png", "pip_fire.png", "pip_water.png"],
        priority: "3",
        difficulty: "8",
    },
    {
        id: "32",
        title: "Conquest System",
        stage: "Concept",
        description: "Create mixed pve/pvp game mode to capture territory (and gain bonuses) for your nation",
        category: "World",
        image: "placeholder.png",
        target: "Beta",
        assigned: ["pip_earth.png", "pip_fire.png", "pip_water.png"],
        priority: "1",
        difficulty: "8",
    },
    {
        id: "33",
        title: "Storyline Campaign",
        stage: "Concept",
        description: "Create functionality/clear markers for a storyline campaign",
        category: "World",
        image: "placeholder.png",
        target: "Beta",
        assigned: ["pip_earth.png", "pip_fire.png", "pip_water.png"],
        priority: "1",
        difficulty: "5",
    },
    {
        id: "34",
        title: "Tutorial",
        stage: "Concept",
        description: "Create an actual tutorial for the game, to highlight differences",
        category: "World",
        image: "placeholder.png",
        target: "Beta",
        assigned: ["pip_fire.png", "pip_water.png"],
        priority: "4",
        difficulty: "2",
    },
    {
        id: "35",
        title: "Subpathing",
        stage: "Concept",
        description: "Implement subclasses for each path (Paladin, Ranger, etc), and system to support",
        category: "World",
        image: "placeholder.png",
        target: "Beta",
        assigned: ["pip_earth.png", "pip_fire.png", "pip_water.png"],
        priority: "3",
        difficulty: "5",
    },
    {
        id: "36",
        title: "Status 3.0",
        stage: "Build",
        description: "Add more complex statuses/conditions, such as Fear/Charm/Confusion",
        category: "World",
        image: "placeholder.png",
        target: "1.0.0",
        assigned: ["pip_earth.png", "pip_fire.png"],
        priority: "4",
        difficulty: "7",
    },
    {
        id: "37",
        title: "Status 2.0",
        stage: "Implemented",
        description: "Overhaul and expand stat system - includes dodge/crit/lifesteal/etc",
        category: "Implemented",
        image: "placeholder.png",
        target: "0.8.1",
        assigned: ["pip_earth.png", "pip_fire.png"],
        priority: "4",
        difficulty: "5",
    },
    {
        id: "38",
        title: "Combat state support",
        stage: "Concept",
        description: "Allow method to determine if character is in or out of combat",
        category: "World",
        image: "placeholder.png",
        target: "0.9.X",
        assigned: ["pip_earth.png"],
        priority: "4",
        difficulty: "6",
    },
    {
        id: "39",
        title: "Class Abilities 2.0",
        stage: "Implemented",
        description: "After review, some classes are short abilities, and priest/wizard have many ranked abilities that are unnecessary due to scaling.  Add 16 warrior, 14 monk, and 6 rogue abilities.  Refactor priest/wizard and add abilities where needed",
        category: "Implemented",
        image: "placeholder.png",
        target: "0.9.3",
        assigned: ["pip_fire.png"],
        priority: "3",
        difficulty: "4",
    },
    {
        id: "40",
        title: "Ability Balancing",
        stage: "Implemented",
        description: "Review and balance class abilities",
        category: "Implemented",
        image: "placeholder.png",
        target: "0.9.3",
        assigned: ["pip_fire.png"],
        priority: "4",
        difficulty: "8",
    },
    {
        id: "41",
        title: "Player Crafting",
        stage: "Design",
        description: "Create and implement player crafting systems",
        category: "Player Systems",
        image: "placeholder.png",
        target: "Beta",
        assigned: ["pip_earth.png", "pip_fire.png", "pip_water.png"],
        priority: "4",
        difficulty: "10",
    },
    {
        id: "42",
        title: "Hairstyling",
        stage: "Implemented",
        description: "Move hairstyling to NPCs",
        category: "Implemented",
        image: "placeholder.png",
        target: "Implemented",
        assigned: ["pip_earth.png", "pip_fire.png", "pip_water.png"],
        priority: "2",
        difficulty: "1",
    },
    {
        id: "43",
        title: "Ability Trainers 2.0",
        stage: "Implemented",
        description: "Consolidate all class abilities, assign to class specific trainers.  Add monk trainers.  Add trainer for shared skills/spells",
        category: "Implemented",
        image: "placeholder.png",
        target: "0.9.0",
        assigned: ["pip_fire.png"],
        priority: "3",
        difficulty: "2",
    },
    {
        id: "44",
        title: "PVP Abilities",
        stage: "Concept",
        description: "Create and implement pvp only abilities/skills, limit pve abilities to pve",
        category: "World",
        image: "placeholder.png",
        target: "Beta",
        assigned: ["pip_fire.png"],
        priority: "1",
        difficulty: "9",
    },
    {
        id: "45",
        title: "Rucesion Revamp",
        stage: "Implemented",
        description: "Combine town/politics/threshold maps into one, expand and beautify",
        category: "Implemented",
        image: "rucesion.png",
        target: "Beta",
        assigned: ["pip_fire.png"],
        priority: "4",
        difficulty: "7",
    },
    {
        id: "46",
        title: "Mileth Revamp",
        stage: "Implemented",
        description: "Combine town/politics/threshold maps into one, expand and beautify",
        category: "Implemented",
        image: "mileth.png",
        target: "Beta",
        assigned: ["pip_water.png"],
        priority: "4",
        difficulty: "7",
    },
    {
        id: "47",
        title: "Piet Revamp",
        stage: "Implemented",
        description: "Combine town/threshold maps into one, expand and beautify",
        category: "Implemented",
        image: "piet.png",
        target: "Beta",
        assigned: ["pip_fire.png"],
        priority: "4",
        difficulty: "7",
    },
    {
        id: "48",
        title: "Loures Revamp",
        stage: "Implemented",
        description: "Create actual town for Loures",
        category: "Implemented",
        image: "loures.png",
        target: "Beta",
        assigned: ["pip_fire.png", "pip_water.png"],
        priority: "3",
        difficulty: "7",
    },
    {
        id: "49",
        title: "Abel Revamp",
        stage: "Implemented",
        description: "Combine town/threshold maps into one, expand and beautify",
        category: "Implemented",
        image: "abel.png",
        target: "Beta",
        assigned: ["pip_fire.png"],
        priority: "2",
        difficulty: "7",
    },
    {
        id: "50",
        title: "Undine Revamp",
        stage: "Implemented",
        description: "Combine town/threshold maps into one, expand and beautify",
        category: "Implemented",
        image: "undine.png",
        target: "Beta",
        assigned: ["pip_water.png"],
        priority: "1",
        difficulty: "8",
    },
    {
        id: "51",
        title: "Suomi Revamp",
        stage: "Design",
        description: "Combine town/threshold maps into one, expand and beautify",
        category: "Maps",
        image: "placeholder.png",
        target: "Beta",
        assigned: ["pip_earth.png"],
        priority: "1",
        difficulty: "8",
    },
    {
        id: "52",
        title: "Tagor Revamp",
        stage: "Concept",
        description: "Combine town/politics/threshold maps into one, expand and beautify",
        category: "Maps",
        image: "placeholder.png",
        target: "Beta",
        assigned: ["pip_fire.png", "pip_water.png"],
        priority: "1",
        difficulty: "8",
    },
    {
        id: "53",
        title: "Oren Revamp",
        stage: "Concept",
        description: "Burn to the ground and start over",
        category: "Maps",
        image: "oren.png",
        target: "Beta",
        assigned: ["pip_water.png"],
        priority: "1",
        difficulty: "8",
    },
    {
        id: "54",
        title: "Piet (Mileth) Crypt Revamp",
        stage: "Implemented",
        description: "Relocate crypt to piet, refactor into less of a walking simulator, give story",
        category: "Implemented",
        image: "crypt.png",
        target: "Beta",
        assigned: ["pip_fire.png"],
        priority: "4",
        difficulty: "7",
    },
    {
        id: "55",
        title: "Mileth Warehouse",
        stage: "Implemented",
        description: "Create new dungeon for Mileth to replace crypt, give story",
        category: "Implemented",
        image: "warehouse.png",
        target: "Beta",
        assigned: ["pip_water.png"],
        priority: "4",
        difficulty: "7",
    },
    {
        id: "56",
        title: "Rucesion Asylum",
        stage: "Concept",
        description: "Create dungeon for Rucesion",
        category: "Maps",
        image: "placeholder.png",
        target: "Beta",
        assigned: ["pip_fire.png", "pip_water.png"],
        priority: "3",
        difficulty: "7",
    },
    {
        id: "57",
        title: "Abel Grotto",
        stage: "Implemented",
        description: "Revamp Abel dungeon into something that makes sense",
        category: "Implemented",
        image: "placeholder.png",
        target: "Beta",
        assigned: ["pip_fire.png"],
        priority: "3",
        difficulty: "7",
    },
    {
        id: "58",
        title: "Mehadi Overhaul",
        stage: "Concept",
        description: "Retile completely, expand on mukul race",
        category: "Maps",
        image: "placeholder.png",
        target: "Beta",
        assigned: ["pip_fire.png"],
        priority: "3",
        difficulty: "7",
    },
    {
        id: "59",
        title: "Pravat Overhaul",
        stage: "Concept",
        description: "Retile completely, expand on grimlok vs. goblin",
        category: "Maps",
        image: "placeholder.png",
        target: "Beta",
        assigned: ["pip_fire.png"],
        priority: "3",
        difficulty: "7",
    },
    {
        id: "60",
        title: "Eastern Woodlands Refresh",
        stage: "Concept",
        description: "Redo maps, give better story",
        category: "Maps",
        image: "placeholder.png",
        target: "Beta",
        assigned: ["pip_fire.png"],
        priority: "4",
        difficulty: "7",
    },
    {
        id: "61",
        title: "Chateau Ealagad",
        stage: "Implemented",
        description: "Burn loures castle to the ground, create new home for emperor",
        category: "Implemented",
        image: "ealagad.png",
        target: "Beta",
        assigned: ["pip_water.png", "pip_fire.png"],
        priority: "3",
        difficulty: "7",
    },
    {
        id: "62",
        title: "Dubhaim Castle Refresh",
        stage: "Analysis",
        description: "Combine town/politics/threshold maps into one, expand and beautify",
        category: "Maps",
        image: "dubhaim.png",
        target: "Beta",
        assigned: ["pip_fire.png"],
        priority: "3",
        difficulty: "7",
    },
/*
    {
        id: "63",
        title: "Repeatable Town Quests",
        stage: "Concept",
        description: "Create small task quests for NPCs in each of the towns",
        category: "World",
        image: "placeholder.png",
        target: "Beta",
        assigned: ["pip_water.png"],
        priority: "5",
    },
*/
    {
        id: "64",
        title: "Town Reputation",
        stage: "Concept",
        description: "Create small task quests for NPCs in each of the towns",
        category: "Scripting",
        image: "placeholder.png",
        target: "Beta",
        assigned: ["pip_water.png"],
        priority: "3",
        difficulty: "7",
    },
    {
        id: "65",
        title: "Contests",
        stage: "Requirements",
        description: "Create ability and support for player contests (Lore, History, Art, Literature, Philosophy)",
        category: "Player Systems",
        image: "placeholder.png",
        target: "Beta",
        assigned: ["pip_earth.png", "pip_fire.png", "pip_water.png"],
        priority: "1",
        difficulty: "2",
    },
    {
        id: "66",
        title: "New Contests",
        stage: "Concept",
        description: "Add additional contest categories - Armor Design, Weapon Design, Quest Design, Map Design, Poetry, Event Host, etc",
        category: "Player Systems",
        image: "placeholder.png",
        target: "Launch",
        assigned: ["pip_earth.png", "pip_fire.png", "pip_water.png"],
        priority: "1",
        difficulty: "2",
    },
    {
        id: "67",
        title: "Lineage System",
        stage: "Concept",
        description: 'Implement ability to establish intra/inter account "families".  Also implement surnames as a way to help with character name availability.',
        category: "Player Systems",
        image: "placeholder.png",
        target: "Launch",
        assigned: ["pip_earth.png", "pip_fire.png", "pip_water.png"],
        priority: "1",
        difficulty: "6",
    },
    {
        id: "68",
        title: "Nobility System",
        stage: "Concept",
        description: "Implement method for characters/families to be granted peerage, for inclusion in loures senate government",
        category: "Player Systems",
        image: "placeholder.png",
        target: "Launch",
        assigned: ["pip_earth.png", "pip_fire.png", "pip_water.png"],
        priority: "1",
        difficulty: "6",
    },
    {
        id: "69",
        title: "Cthonic Remains",
        stage: "Design",
        description: "Rework CR to winged dungeon with lobby and unlockable portals",
        category: "Maps",
        image: "placeholder.png",
        target: "Beta",
        assigned: ["pip_earth.png", "pip_fire.png", "pip_water.png"],
        priority: "2",
        difficulty: "5",
    },
    {
        id: "70",
        title: "Abel Repeatable Quests",
        stage: "Requirements",
        description: "Create small task quests for the npcs of Abel to assign",
        category: "Scripting",
        image: "placeholder.png",
        target: "Beta",
        assigned: ["pip_water.png"],
        priority: "3",
        difficulty: "7",
    },
    {
        id: "71",
        title: "Loures Repeatable Quests",
        stage: "Requirements",
        description: "Create small task quests for the npcs of Loures to assign",
        category: "Scripting",
        image: "placeholder.png",
        target: "Beta",
        assigned: ["pip_water.png"],
        priority: "3",
        difficulty: "7",
    },
    {
        id: "72",
        title: "Mileth Repeatable Quests",
        stage: "Build",
        description: "Create small task quests for the npcs of Mileth to assign",
        category: "Scripting",
        image: "placeholder.png",
        target: "Beta",
        assigned: ["pip_water.png"],
        priority: "4",
        difficulty: "5",
    },
    {
        id: "73",
        title: "Oren Repeatable Quests",
        stage: "Concept",
        description: "Create small task quests for the npcs of Oren to assign",
        category: "Scripting",
        image: "placeholder.png",
        target: "Beta",
        assigned: ["pip_water.png"],
        priority: "1",
        difficulty: "7",
    },
    {
        id: "74",
        title: "Piet Repeatable Quests",
        stage: "Build",
        description: "Create small task quests for the npcs of Piet to assign",
        category: "Scripting",
        image: "placeholder.png",
        target: "Beta",
        assigned: ["pip_water.png"],
        priority: "4",
        difficulty: "1",
    },
    {
        id: "75",
        title: "Rucesion Repeatable Quests",
        stage: "Design",
        description: "Create small task quests for the npcs of Rucesion to assign",
        category: "Scripting",
        image: "placeholder.png",
        target: "Beta",
        assigned: ["pip_water.png"],
        priority: "3",
        difficulty: "7",
    },
    {
        id: "76",
        title: "Suomi Repeatable Quests",
        stage: "Concept",
        description: "Create small task quests for the npcs of Suomi to assign",
        category: "Scripting",
        image: "placeholder.png",
        target: "Beta",
        assigned: ["pip_water.png"],
        priority: "1",
        difficulty: "7",
    },
    {
        id: "77",
        title: "Tagor Repeatable Quests",
        stage: "Concept",
        description: "Create small task quests for the npcs of Tagor to assign",
        category: "Scripting",
        image: "placeholder.png",
        target: "Beta",
        assigned: ["pip_water.png"],
        priority: "1",
        difficulty: "7",
    },
    {
        id: "78",
        title: "Undine Repeatable Quests",
        stage: "Concept",
        description: "Create small task quests for the npcs of Undine to assign",
        category: "Scripting",
        image: "placeholder.png",
        target: "Beta",
        assigned: ["pip_water.png"],
        priority: "1",
        difficulty: "7",
    },
    {
        id: "79",
        title: "Quest Controller",
        stage: "Requirements",
        description: "Create functionality for mundane burgess (e.g., Cedric, Eduardo, Tancreid, etc), to select active repeatable quests for the day.",
        category: "Scripting",
        image: "placeholder.png",
        target: "Beta",
        assigned: ["pip_water.png", "pip_fire.png"],
        priority: "4",
        difficulty: "8",
    },
    {
        id: "80",
        title: "Ability Scripts",
        stage: "Build",
        description: "Create scripts for advanced player skills/spells",
        category: "Scripting",
        image: "placeholder.png",
        target: "Beta",
        assigned: ["pip_water.png", "pip_fire.png"],
        priority: "4",
        difficulty: "3",
    },
    {
      id: "81",
      title: "Loures Catacombs",
      stage: "Concept",
      description: "Dark Maze replacement",
      category: "Maps",
      image: "placeholder.png",
      target: "Beta",
      assigned: ["pip_water.png", "pip_fire.png"],
      priority: "4",
      difficulty: "3",
  },
]

export default featureData
