import React from "react";
import PvpDragon from "../../../assets/images/pvp/pvpDragon.png";
import SizeIcon from "../../../assets/icons/sizeIcon";
import Interioricon from "../../../assets/icons/InteriorIcon";
import SallerIcon from "../../../assets/icons/SallerIcon";
import PriceIcon from "../../../assets/icons/PriceIcon";

type CaracteristicsType = {
  id: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
};

export type ListType = {
  id: number;
  name: string;
  image: string;
  listImage: string[];
  category: number;
  theme: "End" | "Halloween" | "Fantasy" | "Greek / Roman";
  description: string;
  overViewText: string;
  carecteristics?: CaracteristicsType[];
};

export const ListProducts: ListType[] = [
  {
    id: 1,
    name: "Ender Dragon Arena Pvp",
    category: 1,
    theme: "End",
    image: PvpDragon,
    listImage: [
      "https://netherixstudios.com/wp-content/uploads/2022/02/WEB-build-75-render-web.webp",
      "https://netherixstudios.com/wp-content/uploads/2022/02/WEB-build-75-1.webp",
      "https://netherixstudios.com/wp-content/uploads/2022/02/WEB-build-75-2.webp",
      "https://netherixstudios.com/wp-content/uploads/2022/02/WEB-build-75-3.webp",
      "https://netherixstudios.com/wp-content/uploads/2022/02/WEB-build-75-4.webp",
    ],
    description:
      "If you are a Minecraft fan and you like challenges, Ender dragon arena pvp is for you. It is a PvP arena inspired by the End, the most mysterious and dangerous dimension in the game. In this map, you will have to fight against your opponents in an epic scenario, surrounded by characteristic elements of the End, such as the End dragon, dragon eggs, dead trees and tentacles.",
    overViewText:
      "Engage in intense PvP battles on our “End”-themed Floating Island map with a dragon sculpture, dead trees, and embracing tentacles. Check out the 3D model before you buy!",

    carecteristics: [
      {
        id: 1,
        title: "Size in blocks",
        description: "100x100",
        icon: <SizeIcon />,
      },
      {
        id: 1,
        title: "Interiors",
        description: "Not apply",
        icon: <Interioricon />,
      },
      {
        id: 1,
        title: "Seller",
        description: " PhoenixSoldier",
        icon: <SallerIcon />,
      },
      {
        id: 1,
        title: "Price",
        description: "$8,99",
        icon: <PriceIcon />,
      },
    ],
  },
  {
    id: 2,
    name: "NATURAL MYSTIC DRAGON MAP ",
    category: 1,
    theme: "Halloween",
    image:
      "https://netherixstudios.com/wp-content/uploads/2024/09/build89-marcadeagua-OPTI-844x506.webp",
    listImage: [
      "https://netherixstudios.com/wp-content/uploads/2024/09/build89-marcadeagua-OPTI-844x506.webp",
      "https://netherixstudios.com/wp-content/uploads/2024/09/build89-2-OPTI.webp",
      "https://netherixstudios.com/wp-content/uploads/2024/09/build89-13-OPTI.webp",
    ],
    description:
      "Welcome to our fascinating map “Natural Mystic Dragon”, a fantasy-themed creation designed especially for Minecraft servers. Enter a draconic world and discover the majesty of this unique work. This map offers a vast fantasy landscape, with multiple areas to explore, including serene rivers, mushroom valleys, imposing bridges and an elevation perfect for “King of the Hill” (KOTH) events. As a highlight, you will find a majestic mountain in the shape of a dragon’s head, from whose mouth flows a mystical river of lava that spreads across the terrain, providing a magical and epic atmosphere.",
    overViewText:
      "Welcome to our fascinating map “Natural Mystic Dragon”, a fantasy-themed creation designed especially for Minecraft servers. Enter a draconic world and discover the majesty of this unique work",
    carecteristics: [
      {
        id: 1,
        title: "Size in blocks",
        description: "480 x 480",
        icon: <SizeIcon />,
      },
      {
        id: 1,
        title: "Interiors",
        description: "No",
        icon: <Interioricon />,
      },
      {
        id: 1,
        title: "Seller",
        description: " PhoenixSoldier",
        icon: <SallerIcon />,
      },
      {
        id: 1,
        title: "Price",
        description: "$15,99",
        icon: <PriceIcon />,
      },
    ],
  },
  {
    id: 3,
    name: "Fantasy Faction Spawn Dragon Lair’s ",
    category: 2,
    theme: "Fantasy",
    image:
      "https://netherixstudios.com/wp-content/uploads/2024/07/Fantasy-Dragons-Lairs-1-OPTI.webp",
    listImage: [
      "https://netherixstudios.com/wp-content/uploads/2024/07/Fantasy-Dragons-Lairs-1-OPTI.webp",
      "https://netherixstudios.com/wp-content/uploads/2024/07/Fantasy-Dragons-Lairs-3-OPTI-460x460.webp",
      "https://netherixstudios.com/wp-content/uploads/2024/07/Fantasy-Dragons-Lairs-2-OPTI-1500x844.webp",
    ],
    description:
      "Spawn For Faction Spawn A Castle in a Fantasy Land protected by a Mythical Beast. This castle is located on a hidden sacred land and mystery far from human civilization. Or you can call it Dragon Lair’s. Version:1.16+ Spawn Size:200×200 This build is perfect for Faction Spawn on your server. Here are some things in this build including Includes:10 NPC Spot, Portal, Enchantment Area,Mob Area,Crates Area,BlackMarket Warzone:500×500, KOTH(King Of The Hill) This build does not contain interiors in its structure like inside the towers that are in the spawn. This Fantasy Faction Spawn brings players into a fantasy atmosphere that is very pleasing to the eye and with a gallant dragon protecting the spawn (castle). This build measures 500×500 in total. The 200×200 block in the middle is the spawn, while outside the 200×200 block area the rest is a warzone for players to compete with each other. This Fantasy Faction Spawn was made in about 8 days. This build has quite complex details, and quite complex colors.",
    overViewText:
      "Fantasy Faction Spawn | Dragon Lair’s is Hub/Spawn for Minecraft Spawn Lobby Skyblock/Faction Lobby. Include 10 Npc Spot,Crates,Blackmarket,Mob Area,Warzone,KOTH,Enchantment Area,Leaderboard,Portal.",
    carecteristics: [
      {
        id: 1,
        title: "Size in blocks",
        description: "500  x 500 ",
        icon: <SizeIcon />,
      },
      {
        id: 1,
        title: "Interiors",
        description: "No",
        icon: <Interioricon />,
      },
      {
        id: 1,
        title: "Seller",
        description: "SukaYTStore",
        icon: <SallerIcon />,
      },
      {
        id: 1,
        title: "Price",
        description: "$14,99",
        icon: <PriceIcon />,
      },
    ],
  },
  {
    id: 4,
    name: "HALLOWEEN HAUNTED CASTLE",
    category: 2,
    theme: "Halloween",
    image:
      "https://netherixstudios.com/wp-content/uploads/2023/10/render-nanilum-scaled-844x506.webp",
    listImage: [
      "https://netherixstudios.com/wp-content/uploads/2023/10/render-nanilum-scaled-844x506.webp",
      "https://netherixstudios.com/wp-content/uploads/2023/10/halloween-naninum-3-460x460.webp",
    ],
    description:
      "Spawn For Faction Spawn A Castle in a Fantasy Land protected by a Mythical Beast. This castle is located on a hidden sacred land and mystery far from human civilization. Or you can call it Dragon Lair’s. Version:1.16+ Spawn Size:200×200 This build is perfect for Faction Spawn on your server. Here are some things in this build including Includes:10 NPC Spot, Portal, Enchantment Area,Mob Area,Crates Area,BlackMarket Warzone:500×500, KOTH(King Of The Hill) This build does not contain interiors in its structure like inside the towers that are in the spawn. This Fantasy Faction Spawn brings players into a fantasy atmosphere that is very pleasing to the eye and with a gallant dragon protecting the spawn (castle). This build measures 500×500 in total. The 200×200 block in the middle is the spawn, while outside the 200×200 block area the rest is a warzone for players to compete with each other. This Fantasy Faction Spawn was made in about 8 days. This build has quite complex details, and quite complex colors.",
    overViewText:
      "Fantasy Faction Spawn | Dragon Lair’s is Hub/Spawn for Minecraft Spawn Lobby Skyblock/Faction Lobby. Include 10 Npc Spot,Crates,Blackmarket,Mob Area,Warzone,KOTH,Enchantment Area,Leaderboard,Portal.",
    carecteristics: [
      {
        id: 1,
        title: "Size in blocks",
        description: "480 x 480",
        icon: <SizeIcon />,
      },
      {
        id: 1,
        title: "Interiors",
        description: "No",
        icon: <Interioricon />,
      },
      {
        id: 1,
        title: "Seller",
        description: " PhoenixSoldier",
        icon: <SallerIcon />,
      },
      {
        id: 1,
        title: "Price",
        description: "$15,99",
        icon: <PriceIcon />,
      },
    ],
  },
  {
    id: 5,
    name: "Magic Village Halloween Edition",
    category: 3,
    theme: "Halloween",
    image:
      "https://netherixstudios.com/wp-content/uploads/2022/10/WEB-build-78-2-2.webp",
    listImage: [
      "https://netherixstudios.com/wp-content/uploads/2022/10/WEB-build-78-2-2.webp",
      "https://netherixstudios.com/wp-content/uploads/2022/10/WEB-build-78-2-13-460x460.webp",
      "https://netherixstudios.com/wp-content/uploads/2022/10/WEB-build-78-2-14-460x460.webp",
    ],
    description:
      "This map is a version of the original map 🔹 Blue Magic Village ⛅. Experience the awe-inspiring Halloween-themed spawn, perfect for various game modes like survival or skyblock, in this amazing Minecraft map. Immerse yourself in a meticulously crafted village that caters to every player’s needs. Explore the vast landscape filled with intricate details, from the spacious port and bustling stores to cozy houses and well-placed spawnpoints. Discover hidden treasures in the crates, sail across the seas on magnificent ships, and tend to bountiful crops. Before you buy, remember to see the 3D model of this build, so you can explore every corner and see it as it would look in-game.",
    overViewText:
      "Discover the breathtaking Winter-themed spawn for your Minecraft server. NPC area, port, stores, houses, spawnpoint, crates, ships, crops, and more.",
    carecteristics: [
      {
        id: 1,
        title: "Size in blocks",
        description: "500 x 500",
        icon: <SizeIcon />,
      },
      {
        id: 1,
        title: "Interiors",
        description: "No",
        icon: <Interioricon />,
      },
      {
        id: 1,
        title: "Seller",
        description: " PhoenixSoldier",
        icon: <SallerIcon />,
      },
      {
        id: 1,
        title: "Price",
        description: "$7,99",
        icon: <PriceIcon />,
      },
    ],
  },
  {
    id: 6,
    name: "Magic Village Halloween Edition",
    category: 3,
    theme: "Halloween",
    image:
      "https://netherixstudios.com/wp-content/uploads/2024/08/phoenix-r9-OPTI-844x506.webp",
    listImage: [
      "https://netherixstudios.com/wp-content/uploads/2024/08/phoenix-r9-OPTI-844x506.webp",
      "https://netherixstudios.com/wp-content/uploads/2024/08/Space-Dome-Skyblock-5-OPTI-460x460.webp",
      "https://netherixstudios.com/wp-content/uploads/2022/10/WEB-build-78-2-14-460x460.webp",
    ],
    description:
      "Spawn For Skyblock Server! a space ship or a place in outer space where great humans are housed protected by a very large dome and turret. Or u can call it “Space Dome” Version:1.16+ Spawn Size:250×250 Interior: Full Interior In All Structure. This build is perfect for Skyblock Spawn on your server. Here are some things in this build including Includes: 10 NPC spots, Crate area, Enchantment area, Cobblestone farm, Animal area, Farm area, Leaderboards area, Warzone dropzone, 2 Scoring This build is complete with full interior in all its structures. This build spoils the player’s eyes with a space nuance that amazes the player when they first spawn, and is presented directly with a view of the plane, structure and extra details behind the npc selector This build measures 250×250 in total. This build was made in 10 days and has complex details, colors that are not plain and are pleasing to the player’s Let’s buy this build to add impression and color to your server. Make your players feel the splendor of being in outer space in the world of minecraft!",
    overViewText:
      "Spawn For Skyblock Server a space ship or a place in outer space where great humans are housed protected by a very large dome and turret. Or u can call it “Space Dome”",
    carecteristics: [
      {
        id: 1,
        title: "Size in blocks",
        description: "500 x 500",
        icon: <SizeIcon />,
      },
      {
        id: 1,
        title: "Interiors",
        description: "No",
        icon: <Interioricon />,
      },
      {
        id: 1,
        title: "Seller",
        description: " PhoenixSoldier",
        icon: <SallerIcon />,
      },
      {
        id: 1,
        title: "Price",
        description: "$7,99",
        icon: <PriceIcon />,
      },
    ],
  },
  {
    id: 7,
    name: "Fantasy Faction Spawn Dragon Lair’s",
    category: 4,
    theme: "Fantasy",
    image:
      "https://netherixstudios.com/wp-content/uploads/2024/07/Fantasy-Dragons-Lairs-1-OPTI.webp",
    listImage: [
      "https://netherixstudios.com/wp-content/uploads/2024/07/Fantasy-Dragons-Lairs-1-OPTI.webp",
      "https://netherixstudios.com/wp-content/uploads/2024/07/Fantasy-Dragons-Lairs-3-OPTI-460x460.webp",
      "https://netherixstudios.com/wp-content/uploads/2024/07/Fantasy-Dragons-Lairs-2-OPTI-1500x844.webp",
    ],
    description:
      "Spawn For Faction Spawn A Castle in a Fantasy Land protected by a Mythical Beast. This castle is located on a hidden sacred land and mystery far from human civilization. Or you can call it Dragon Lair’s. Version:1.16+ Spawn Size:200×200 This build is perfect for Faction Spawn on your server. Here are some things in this build including Includes:10 NPC Spot, Portal, Enchantment Area,Mob Area,Crates Area,BlackMarket Warzone:500×500, KOTH(King Of The Hill) This build does not contain interiors in its structure like inside the towers that are in the spawn. This Fantasy Faction Spawn brings players into a fantasy atmosphere that is very pleasing to the eye and with a gallant dragon protecting the spawn (castle). This build measures 500×500 in total. The 200×200 block in the middle is the spawn, while outside the 200×200 block area the rest is a warzone for players to compete with each other. This Fantasy Faction Spawn was made in about 8 days. This build has quite complex details, and quite complex colors.",
    overViewText:
      "Fantasy Faction Spawn | Dragon Lair’s is Hub/Spawn for Minecraft Spawn Lobby Skyblock/Faction Lobby. Include 10 Npc Spot,Crates,Blackmarket,Mob Area,Warzone,KOTH,Enchantment Area,Leaderboard,Portal.",
    carecteristics: [
      {
        id: 1,
        title: "Size in blocks",
        description: "500  x 500 ",
        icon: <SizeIcon />,
      },
      {
        id: 1,
        title: "Interiors",
        description: "No",
        icon: <Interioricon />,
      },
      {
        id: 1,
        title: "Seller",
        description: "SukaYTStore",
        icon: <SallerIcon />,
      },
      {
        id: 1,
        title: "Price",
        description: "$14,99",
        icon: <PriceIcon />,
      },
    ],
  },
  {
    id: 8,
    name: "Magic Village Halloween Edition",
    category: 4,
    theme: "Greek / Roman",
    image:
      "https://netherixstudios.com/wp-content/uploads/2022/02/WEB-build-70-render1-844x506.webp",
    listImage: [
      "https://netherixstudios.com/wp-content/uploads/2022/02/WEB-build-70-render1-844x506.webp",
      "https://netherixstudios.com/wp-content/uploads/2022/02/WEB-build-70-render2.webp",
      "https://netherixstudios.com/wp-content/uploads/2022/02/WEB-build-70-12.webp",
    ],
    description:
      "Welcome to Spawn Red City, the perfect map for your server’s spawn area. This semi-medieval themed map is designed with vibrant red colors that will captivate players from the moment they step foot in it. Explore the intricately designed structures and captivating surroundings that await you. While the interior decoration is not included, the exterior design will leave players in awe. This map offers numerous places to discover and create immersive experiences for your server community. Before you buy, remember to see the 3D model of this build, so you can explore every corner and see it as it would look in-game.",
    overViewText:
      "Spawn Red City, a semi-medieval themed map in vibrant red colors. Explore the exterior design and numerous places. Check the 3D model for a closer look. Perfect for your server’s spawn area!",
    carecteristics: [
      {
        id: 1,
        title: "Size in blocks",
        description: "350 x 250 ",
        icon: <SizeIcon />,
      },
      {
        id: 1,
        title: "Interiors",
        description: "No",
        icon: <Interioricon />,
      },
      {
        id: 1,
        title: "Seller",
        description: "SukaYTStore",
        icon: <SallerIcon />,
      },
      {
        id: 1,
        title: "Price",
        description: "$9,99",
        icon: <PriceIcon />,
      },
    ],
  },
];
