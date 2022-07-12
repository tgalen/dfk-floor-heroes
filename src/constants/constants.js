import { gql } from "@apollo/client/core";

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
    mythicCommonHmy: heroes(
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
    mythicCommonDfk: heroes(
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
    legendaryCommonHmy: heroes(
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
    legendaryCommonDfk: heroes(
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
    rareCommonHmy: heroes(
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
    rareCommonDfk: heroes(
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
