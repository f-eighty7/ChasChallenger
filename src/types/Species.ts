enum Species {
    human = "human",
    elf = "elf",
    goblin = "goblin",
  }

export const SpeciesArray = (): Species[] => {
    return Object.values(Species);
}

export default Species;