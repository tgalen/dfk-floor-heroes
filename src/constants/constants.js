import { gql } from "@apollo/client/core";

import DFK_CHAIN_ICON from "../assets/dfk.webp";
import HARMONY_CHAIN_ICON from "../assets/harmony.webp";
import KLAYTN_CHAIN_ICON from "../assets/klaytn.webp";
import LEGENDARY from "../assets/legendary.png";
import COMMON from "../assets/common.png";
import RARE from "../assets/rare.png";
import UNCOMMON from "../assets/uncommon.png";
import MYTHIC from "../assets/mythic.png";

export const GET_FLOOR_HERO_PRICES = gql`
query floorHeroPrices {
  gen0Hmy: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      generation_lte: 0
      salePrice_not: null
      network: "hmy"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  gen0Dfk: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      generation_lte: 0
      salePrice_not: null
      network: "dfk"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  gen0Kla: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      generation_lte: 0
      salePrice_not: null
      network: "kla"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  mythicBasicHmy: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Warrior"
        "Knight"
        "Archer"
        "Thief"
        "Pirate"
        "Monk"
        "Wizard"
        "Priest"
        "Berserker"
        "Seer"
      ]
      rarity: 4
      salePrice_not: null
      network: "hmy"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  mythicBasicDfk: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Warrior"
        "Knight"
        "Archer"
        "Thief"
        "Pirate"
        "Monk"
        "Wizard"
        "Priest"
        "Berserker"
        "Seer"
      ]
      rarity: 4
      salePrice_not: null
      network: "dfk"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  mythicBasicKla: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Warrior"
        "Knight"
        "Archer"
        "Thief"
        "Pirate"
        "Monk"
        "Wizard"
        "Priest"
        "Berserker"
        "Seer"
      ]
      rarity: 4
      salePrice_not: null
      network: "kla"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  mythicAdvancedHmy: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Ninja"
        "Summoner"
        "Paladin"
        "DarkKnight"
        "Shapeshifter"
      ]
      rarity: 4
      salePrice_not: null
      network: "hmy"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  mythicAdvancedDfk: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Ninja"
        "Summoner"
        "Paladin"
        "DarkKnight"
        "Shapeshifter"
      ]
      rarity: 4
      salePrice_not: null
      network: "dfk"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  mythicAdvancedKla: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Ninja"
        "Summoner"
        "Paladin"
        "DarkKnight"
        "Shapeshifter"
      ]
      rarity: 4
      salePrice_not: null
      network: "kla"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  mythicEliteHmy: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: ["Dragoon", "Sage"]
      rarity: 4
      salePrice_not: null
      network: "hmy"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  mythicEliteDfk: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: ["Dragoon", "Sage"]
      rarity: 4
      salePrice_not: null
      network: "dfk"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  mythicEliteKla: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: ["Dragoon", "Sage"]
      rarity: 4
      salePrice_not: null
      network: "kla"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  legendaryBasicHmy: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Warrior"
        "Knight"
        "Archer"
        "Thief"
        "Pirate"
        "Monk"
        "Wizard"
        "Priest"
        "Berserker"
        "Seer"
      ]
      rarity: 3
      salePrice_not: null
      network: "hmy"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  legendaryBasicDfk: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Warrior"
        "Knight"
        "Archer"
        "Thief"
        "Pirate"
        "Monk"
        "Wizard"
        "Priest"
        "Berserker"
        "Seer"
      ]
      rarity: 3
      salePrice_not: null
      network: "dfk"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  legendaryBasicKla: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Warrior"
        "Knight"
        "Archer"
        "Thief"
        "Pirate"
        "Monk"
        "Wizard"
        "Priest"
        "Berserker"
        "Seer"
      ]
      rarity: 3
      salePrice_not: null
      network: "kla"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  legendaryAdvancedHmy: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Ninja"
        "Summoner"
        "Paladin"
        "DarkKnight"
        "Shapeshifter"
      ]
      rarity: 3
      salePrice_not: null
      network: "hmy"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  legendaryAdvancedDfk: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Ninja"
        "Summoner"
        "Paladin"
        "DarkKnight"
        "Shapeshifter"
      ]
      rarity: 3
      salePrice_not: null
      network: "dfk"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  legendaryAdvancedKla: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Ninja"
        "Summoner"
        "Paladin"
        "DarkKnight"
        "Shapeshifter"
      ]
      rarity: 3
      salePrice_not: null
      network: "kla"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  legendaryEliteHmy: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: ["Dragoon", "Sage"]
      rarity: 3
      salePrice_not: null
      network: "hmy"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  legendaryEliteDfk: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: ["Dragoon", "Sage"]
      rarity: 3
      salePrice_not: null
      network: "dfk"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  legendaryEliteKla: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: ["Dragoon", "Sage"]
      rarity: 3
      salePrice_not: null
      network: "kla"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  rareBasicHmy: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Warrior"
        "Knight"
        "Archer"
        "Thief"
        "Pirate"
        "Monk"
        "Wizard"
        "Priest"
        "Berserker"
        "Seer"
      ]
      rarity: 2
      salePrice_not: null
      network: "hmy"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  rareBasicDfk: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Warrior"
        "Knight"
        "Archer"
        "Thief"
        "Pirate"
        "Monk"
        "Wizard"
        "Priest"
        "Berserker"
        "Seer"
      ]
      rarity: 2
      salePrice_not: null
      network: "dfk"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  rareBasicKla: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Warrior"
        "Knight"
        "Archer"
        "Thief"
        "Pirate"
        "Monk"
        "Wizard"
        "Priest"
        "Berserker"
        "Seer"
      ]
      rarity: 2
      salePrice_not: null
      network: "kla"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  rareAdvancedHmy: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Ninja"
        "Summoner"
        "Paladin"
        "DarkKnight"
        "Shapeshifter"
      ]
      rarity: 2
      salePrice_not: null
      network: "hmy"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  rareAdvancedDfk: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Ninja"
        "Summoner"
        "Paladin"
        "DarkKnight"
        "Shapeshifter"
      ]
      rarity: 2
      salePrice_not: null
      network: "dfk"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  rareAdvancedKla: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Ninja"
        "Summoner"
        "Paladin"
        "DarkKnight"
        "Shapeshifter"
      ]
      rarity: 2
      salePrice_not: null
      network: "kla"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  rareEliteHmy: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: ["Dragoon", "Sage"]
      rarity: 2
      salePrice_not: null
      network: "hmy"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  rareEliteDfk: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: ["Dragoon", "Sage"]
      rarity: 2
      salePrice_not: null
      network: "dfk"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  rareEliteKla: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: ["Dragoon", "Sage"]
      rarity: 2
      salePrice_not: null
      network: "kla"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  tentengen1CommonBasicHmy: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Warrior"
        "Knight"
        "Archer"
        "Thief"
        "Pirate"
        "Monk"
        "Wizard"
        "Priest"
        "Berserker"
        "Seer"
      ]
      rarity: 0
      summonsRemaining_gte: 10
      generation: 1
      salePrice_not: null
      network: "hmy"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  tentengen1CommonBasicDfk: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Warrior"
        "Knight"
        "Archer"
        "Thief"
        "Pirate"
        "Monk"
        "Wizard"
        "Priest"
        "Berserker"
        "Seer"
      ]
      rarity: 0
      summonsRemaining_gte: 10
      generation: 1
      salePrice_not: null
      network: "dfk"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  tentengen1CommonBasicKla: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Warrior"
        "Knight"
        "Archer"
        "Thief"
        "Pirate"
        "Monk"
        "Wizard"
        "Priest"
        "Berserker"
        "Seer"
      ]
      rarity: 0
      summonsRemaining_gte: 10
      generation: 1
      salePrice_not: null
      network: "kla"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  tentengen1UncommonBasicHmy: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Warrior"
        "Knight"
        "Archer"
        "Thief"
        "Pirate"
        "Monk"
        "Wizard"
        "Priest"
        "Berserker"
        "Seer"
      ]
      rarity: 1
      summonsRemaining_gte: 10
      generation: 1
      salePrice_not: null
      network: "hmy"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  tentengen1UncommonBasicDfk: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Warrior"
        "Knight"
        "Archer"
        "Thief"
        "Pirate"
        "Monk"
        "Wizard"
        "Priest"
        "Berserker"
        "Seer"
      ]
      rarity: 1
      summonsRemaining_gte: 10
      generation: 1
      salePrice_not: null
      network: "dfk"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  tentengen1UncommonBasicKla: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Warrior"
        "Knight"
        "Archer"
        "Thief"
        "Pirate"
        "Monk"
        "Wizard"
        "Priest"
        "Berserker"
        "Seer"
      ]
      rarity: 1
      summonsRemaining_gte: 10
      generation: 1
      salePrice_not: null
      network: "kla"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  tentengen1RareBasicHmy: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Warrior"
        "Knight"
        "Archer"
        "Thief"
        "Pirate"
        "Monk"
        "Wizard"
        "Priest"
        "Berserker"
        "Seer"
      ]
      rarity: 2
      summonsRemaining_gte: 10
      generation: 1
      salePrice_not: null
      network: "hmy"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  tentengen1RareBasicDfk: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Warrior"
        "Knight"
        "Archer"
        "Thief"
        "Pirate"
        "Monk"
        "Wizard"
        "Priest"
        "Berserker"
        "Seer"
      ]
      rarity: 2
      summonsRemaining_gte: 10
      generation: 1
      salePrice_not: null
      network: "dfk"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  tentengen1RareBasicKla: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Warrior"
        "Knight"
        "Archer"
        "Thief"
        "Pirate"
        "Monk"
        "Wizard"
        "Priest"
        "Berserker"
        "Seer"
      ]
      rarity: 2
      summonsRemaining_gte: 10
      generation: 1
      salePrice_not: null
      network: "kla"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  tentengen1LegendaryBasicHmy: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Warrior"
        "Knight"
        "Archer"
        "Thief"
        "Pirate"
        "Monk"
        "Wizard"
        "Priest"
        "Berserker"
        "Seer"
      ]
      rarity: 3
      summonsRemaining_gte: 10
      generation: 1
      salePrice_not: null
      network: "hmy"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  tentengen1LegendaryBasicDfk: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Warrior"
        "Knight"
        "Archer"
        "Thief"
        "Pirate"
        "Monk"
        "Wizard"
        "Priest"
        "Berserker"
        "Seer"
      ]
      rarity: 3
      summonsRemaining_gte: 10
      generation: 1
      salePrice_not: null
      network: "dfk"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  tentengen1LegendaryBasicKla: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Warrior"
        "Knight"
        "Archer"
        "Thief"
        "Pirate"
        "Monk"
        "Wizard"
        "Priest"
        "Berserker"
        "Seer"
      ]
      rarity: 3
      summonsRemaining_gte: 10
      generation: 1
      salePrice_not: null
      network: "kla"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  tentengen1MythicBasicHmy: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Warrior"
        "Knight"
        "Archer"
        "Thief"
        "Pirate"
        "Monk"
        "Wizard"
        "Priest"
        "Berserker"
        "Seer"
      ]
      rarity: 4
      summonsRemaining_gte: 10
      generation: 1
      salePrice_not: null
      network: "hmy"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  tentengen1MythicBasicDfk: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Warrior"
        "Knight"
        "Archer"
        "Thief"
        "Pirate"
        "Monk"
        "Wizard"
        "Priest"
        "Berserker"
        "Seer"
      ]
      rarity: 4
      summonsRemaining_gte: 10
      generation: 1
      salePrice_not: null
      network: "dfk"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  tentengen1MythicBasicKla: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Warrior"
        "Knight"
        "Archer"
        "Thief"
        "Pirate"
        "Monk"
        "Wizard"
        "Priest"
        "Berserker"
        "Seer"
      ]
      rarity: 4
      summonsRemaining_gte: 10
      generation: 1
      salePrice_not: null
      network: "kla"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  fivefivegen1CommonAdvancedHmy: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Ninja"
        "Summoner"
        "Paladin"
        "DarkKnight"
        "Shapeshifter"
      ]
      rarity: 0
      summonsRemaining_gte: 5
      generation: 1
      salePrice_not: null
      network: "hmy"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  fivefivegen1CommonAdvancedDfk: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Ninja"
        "Summoner"
        "Paladin"
        "DarkKnight"
        "Shapeshifter"
      ]
      rarity: 0
      summonsRemaining_gte: 5
      generation: 1
      salePrice_not: null
      network: "dfk"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  fivefivegen1CommonAdvancedKla: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Ninja"
        "Summoner"
        "Paladin"
        "DarkKnight"
        "Shapeshifter"
      ]
      rarity: 0
      summonsRemaining_gte: 5
      generation: 1
      salePrice_not: null
      network: "kla"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  fivefivegen1UncommonAdvancedHmy: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Ninja"
        "Summoner"
        "Paladin"
        "DarkKnight"
        "Shapeshifter"
      ]
      rarity: 1
      summonsRemaining_gte: 5
      generation: 1
      salePrice_not: null
      network: "hmy"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  fivefivegen1UncommonAdvancedDfk: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Ninja"
        "Summoner"
        "Paladin"
        "DarkKnight"
        "Shapeshifter"
      ]
      rarity: 1
      summonsRemaining_gte: 5
      generation: 1
      salePrice_not: null
      network: "dfk"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  fivefivegen1UncommonAdvancedKla: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Ninja"
        "Summoner"
        "Paladin"
        "DarkKnight"
        "Shapeshifter"
      ]
      rarity: 1
      summonsRemaining_gte: 5
      generation: 1
      salePrice_not: null
      network: "kla"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  fivefivegen1RareAdvancedHmy: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Ninja"
        "Summoner"
        "Paladin"
        "DarkKnight"
        "Shapeshifter"
      ]
      rarity: 2
      summonsRemaining_gte: 5
      generation: 1
      salePrice_not: null
      network: "hmy"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  fivefivegen1RareAdvancedDfk: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Ninja"
        "Summoner"
        "Paladin"
        "DarkKnight"
        "Shapeshifter"
      ]
      rarity: 2
      summonsRemaining_gte: 5
      generation: 1
      salePrice_not: null
      network: "dfk"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  fivefivegen1RareAdvancedKla: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Ninja"
        "Summoner"
        "Paladin"
        "DarkKnight"
        "Shapeshifter"
      ]
      rarity: 2
      summonsRemaining_gte: 5
      generation: 1
      salePrice_not: null
      network: "kla"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  fivefivegen1LegendaryAdvancedHmy: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Ninja"
        "Summoner"
        "Paladin"
        "DarkKnight"
        "Shapeshifter"
      ]
      rarity: 3
      summonsRemaining_gte: 5
      generation: 1
      salePrice_not: null
      network: "hmy"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  fivefivegen1LegendaryAdvancedDfk: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Ninja"
        "Summoner"
        "Paladin"
        "DarkKnight"
        "Shapeshifter"
      ]
      rarity: 3
      summonsRemaining_gte: 5
      generation: 1
      salePrice_not: null
      network: "dfk"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  fivefivegen1LegendaryAdvancedKla: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Ninja"
        "Summoner"
        "Paladin"
        "DarkKnight"
        "Shapeshifter"
      ]
      rarity: 3
      summonsRemaining_gte: 5
      generation: 1
      salePrice_not: null
      network: "kla"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  fivefivegen1MythicAdvancedHmy: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Ninja"
        "Summoner"
        "Paladin"
        "DarkKnight"
        "Shapeshifter"
      ]
      rarity: 4
      summonsRemaining_gte: 5
      generation: 1
      salePrice_not: null
      network: "hmy"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  fivefivegen1MythicAdvancedDfk: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Ninja"
        "Summoner"
        "Paladin"
        "DarkKnight"
        "Shapeshifter"
      ]
      rarity: 4
      summonsRemaining_gte: 5
      generation: 1
      salePrice_not: null
      network: "dfk"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  fivefivegen1MythicAdvancedKla: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: [
        "Ninja"
        "Summoner"
        "Paladin"
        "DarkKnight"
        "Shapeshifter"
      ]
      rarity: 4
      summonsRemaining_gte: 5
      generation: 1
      salePrice_not: null
      network: "kla"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  threethreeCommonEliteHmy: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: ["Dragoon", "Sage"]
      rarity: 0
      summonsRemaining_gte: 3
      salePrice_not: null
      network: "hmy"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  threethreeCommonEliteDfk: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: ["Dragoon", "Sage"]
      rarity: 0
      summonsRemaining_gte: 3
      salePrice_not: null
      network: "dfk"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  threethreeCommonEliteKla: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: ["Dragoon", "Sage"]
      rarity: 0
      summonsRemaining_gte: 3
      salePrice_not: null
      network: "kla"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  threethreeUncommonEliteHmy: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: ["Dragoon", "Sage"]
      rarity: 1
      summonsRemaining_gte: 3
      salePrice_not: null
      network: "hmy"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  threethreeUncommonEliteDfk: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: ["Dragoon", "Sage"]
      rarity: 1
      summonsRemaining_gte: 3
      salePrice_not: null
      network: "dfk"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  threethreeUncommonEliteKla: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: ["Dragoon", "Sage"]
      rarity: 1
      summonsRemaining_gte: 3
      salePrice_not: null
      network: "kla"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  threethreeRareEliteHmy: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: ["Dragoon", "Sage"]
      rarity: 2
      summonsRemaining_gte: 3
      salePrice_not: null
      network: "hmy"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  threethreeRareEliteDfk: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: ["Dragoon", "Sage"]
      rarity: 2
      summonsRemaining_gte: 3
      salePrice_not: null
      network: "dfk"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  threethreeRareEliteKla: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: ["Dragoon", "Sage"]
      rarity: 2
      summonsRemaining_gte: 3
      salePrice_not: null
      network: "kla"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  threethreeLegendaryEliteHmy: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: ["Dragoon", "Sage"]
      rarity: 3
      summonsRemaining_gte: 3
      salePrice_not: null
      network: "hmy"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  threethreeLegendaryEliteDfk: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: ["Dragoon", "Sage"]
      rarity: 3
      summonsRemaining_gte: 3
      salePrice_not: null
      network: "dfk"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  threethreeLegendaryEliteKla: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: ["Dragoon", "Sage"]
      rarity: 3
      summonsRemaining_gte: 3
      salePrice_not: null
      network: "kla"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  threethreeMythicEliteHmy: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: ["Dragoon", "Sage"]
      rarity: 4
      summonsRemaining_gte: 3
      salePrice_not: null
      network: "hmy"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  threethreeMythicEliteDfk: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: ["Dragoon", "Sage"]
      rarity: 4
      summonsRemaining_gte: 3
      salePrice_not: null
      network: "dfk"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  threethreeMythicEliteKla: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: ["Dragoon", "Sage"]
      rarity: 4
      summonsRemaining_gte: 3
      salePrice_not: null
      network: "kla"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  dreadknightHmy: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: ["DreadKnight"]
      salePrice_not: null
      network: "hmy"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  dreadknightDfk: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: ["DreadKnight"]
      salePrice_not: null
      network: "dfk"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  dreadknightKla: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: ["DreadKnight"]
      salePrice_not: null
      network: "kla"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  oneonedreadknightHmy: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: ["DreadKnight"]
      summonsRemaining: 1
      salePrice_not: null
      network: "hmy"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  oneonedreadknightDfk: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: ["DreadKnight"]
      summonsRemaining: 1
      salePrice_not: null
      network: "dfk"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  oneonedreadknightKla: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      mainClass_in: ["DreadKnight"]
      summonsRemaining: 1
      salePrice_not: null
      network: "kla"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  completeFloorHmy: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      salePrice_not: null
      network: "hmy"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  completeFloorDfk: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      salePrice_not: null
      network: "dfk"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
  completeFloorKla: heroes(
    first: 3
    orderBy: salePrice
    orderDirection: asc
    where: {
      salePrice_not: null
      network: "kla"
      privateAuctionProfile: null
    }
  ) {
    ...expandedHero
  }
}

fragment expandedHero on Hero {
  id
  level
  mainClass
  subClass
  rarity
  generation
  summonsRemaining
  maxSummons
  profession
  salePrice
  network
  active1
  active2
  passive1
  passive2
  statBoost1
  statBoost2
  pjStatus
  statGenes
  strengthGrowthP
  agilityGrowthP
  enduranceGrowthP
  wisdomGrowthP
  dexterityGrowthP
  vitalityGrowthP
  intelligenceGrowthP
  luckGrowthP
}
`;

export const HERO_CATEGORY_DISPLAY_NAME = {
  gen0: "Gen 0",
  mythicBasic: "Mythic Basic",
  mythicAdvanced: "Mythic Advanced",
  mythicElite: "Mythic Elite",
  legendaryBasic: "Legendary Basic",
  legendaryAdvanced: "Legendary Advanced",
  legendaryElite: "Legendary Elite",
  rareBasic: "Rare Basic",
  rareAdvanced: "Rare Advanced",
  rareElite: "Rare Elite",
  tentengen1CommonBasic: "10/10 Common Basic",
  tentengen1UncommonBasic: "10/10 Uncommon Basic",
  tentengen1RareBasic: "10/10 Rare Basic",
  tentengen1LegendaryBasic: "10/10 Legendary Basic",
  tentengen1MythicBasic: "10/10 Mythic Basic",
  fivefivegen1CommonAdvanced: "5/5 Gen 1 Common Advanced",
  fivefivegen1UncommonAdvanced: "5/5 Gen 1 Uncommon Advanced",
  fivefivegen1RareAdvanced: "5/5 Gen 1 Rare Advanced",
  fivefivegen1LegendaryAdvanced: "5/5 Gen 1 Legendary Advanced",
  fivefivegen1MythicAdvanced: "5/5 Gen 1 Mythic Advanced",
  threethreeCommonElite: "3/3 Common Elite",
  threethreeUncommonElite: "3/3 Uncommon Elite",
  threethreeRareElite: "3/3 Rare Elite",
  threethreeLegendaryElite: "3/3 Legendary Elite",
  threethreeMythicElite: "3/3 Mythic Elite",
  dreadknight: "Dreadknight",
  oneonedreadknight: "1/1 Dreadknight",
  completeFloor: "Complete Floor",
};

export const PRICE_MODIFIER = 1000000000000000000;

export const CRYSTAL_JEWEL_PAIR_ENDPOINT_URL =
  "https://api.dexscreener.com/latest/dex/pairs/avalanchedfk/0x48658e69d741024b4686c8f7b236d3f1d291f386";

export const JEWEL_JADE_PAIR_ENDPOINT_URL = 
  "https://api.dexscreener.com/latest/dex/pairs/klaytn/0x85DB3CC4BCDB8bffA073A3307D48Ed97C78Af0AE";

export const CHAIN_ICON = {
  dfk: DFK_CHAIN_ICON,
  hmy: HARMONY_CHAIN_ICON,
  kla: KLAYTN_CHAIN_ICON,
};

export const RARITY_ICON = {
  4: MYTHIC,
  3: LEGENDARY,
  2: RARE,
  1: UNCOMMON,
  0: COMMON,
};
