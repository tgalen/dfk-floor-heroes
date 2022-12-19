const { decodeRecessiveGeneAndNormalize } = require('./recessive-genes');

/**
 * Produce a normalized, JS Native representation of the hero object.
 *
 * @param {Object} hero GraphQL originated hero.
 * @param {string=} source The source of the data.
 * @return {Object} Normalized hero.
 */
exports.normalizeGqlHero = (hero, source = 'graphql') => {
  const normalizedHero = {
    rawHero: hero,
    source,
    id: Number(hero.id),
    ownerName: hero.owner?.name,
    ownerAddress: hero.owner?.owner?.toLowerCase(),
    mainClass: hero.mainClass,
    subClass: hero.subClass,
    profession: hero.profession,
    generation: hero.generation,
    summons: hero.summons,
    maxSummons: hero.maxSummons,
    statBoost1: hero.statBoost1,
    statBoost2: hero.statBoost2,
    active1: hero.active1,
    active2: hero.active2,
    passive1: hero.passive1,
    passive2: hero.passive2,
    rarity: hero.rarity,
    rarityStr: Rarity[hero.rarity],
    mining: hero.mining === 0 ? 0 : hero.mining / 10,
    gardening: hero.gardening === 0 ? 0 : hero.gardening / 10,
    foraging: hero.foraging === 0 ? 0 : hero.foraging / 10,
    fishing: hero.fishing === 0 ? 0 : hero.fishing / 10,
    shiny: hero.shiny,
    xp: Number(hero.xp),
    level: hero.level,

    statGenes: hero.statGenes,
    visualGenes: hero.visualGenes,
    statGenesRaw: hero.statGenes,
    visualGenesRaw: hero.visualGenes,
    summonedTime: new Date(hero.summonedTime),
    nextSummonTime: new Date(hero.nextSummonTime),
    summonerId: hero.summonerId.id,
    assistantId: hero.assistantId.id,
    staminaFullAt: unixToJsDate(hero.staminaFullAt),
    hpFullAt: unixToJsDate(hero.hpFullAt),
    mpFullAt: unixToJsDate(hero.mpFullAt),
    currentQuest: hero.currentQuest,
    isQuesting: hero.currentQuest !== ZERO_ADDRESS,
    sp: hero.sp,
    status: hero.status,

    intelligence: hero.intelligence,
    luck: hero.luck,
    vitality: hero.vitality,
    dexterity: hero.dexterity,
    strength: hero.strength,
    wisdom: hero.wisdom,
    agility: hero.agility,
    endurance: hero.endurance,

    statsSum:
      hero.intelligence +
      hero.luck +
      hero.vitality +
      hero.dexterity +
      hero.strength +
      hero.wisdom +
      hero.agility +
      hero.endurance,

    hp: hero.hp,
    mp: hero.mp,
    stamina: hero.stamina,

    onSale: null,
    auctionId: null,
    seller: null,
    startingPrice: null,
    endingPrice: null,
    startingPriceFormatted: null,
    endingPriceFormatted: null,
    duration: null,
    startedAt: null,
    onRent: null,
    rentalData: {
      auctionId: null,
      owner: null,
      startingPrice: null,
      endingPrice: null,
      startingPriceFormatted: null,
      endingPriceFormatted: null,
      duration: null,
      startedAt: null,
    },
  };

  const { mainClassGenes, subClassGenes, professionGenes, a1Genes, a2Genes, p1Genes, p2Genes, statBoost1Genes, statBoost2Genes, elementGenes } =
    decodeRecessiveGeneAndNormalize(hero.statGenes);

  normalizedHero.mainClassGenes = mainClassGenes;
  normalizedHero.subClassGenes = subClassGenes;
  normalizedHero.professionGenes = professionGenes;
  normalizedHero.a1Genes = a1Genes;
  normalizedHero.a2Genes = a2Genes;
  normalizedHero.p1Genes = p1Genes;
  normalizedHero.p2Genes = p2Genes;
  normalizedHero.statBoost1Genes = statBoost1Genes;
  normalizedHero.statBoost2Genes = statBoost2Genes;
  normalizedHero.elementGenes = elementGenes;

  return normalizedHero;
};
