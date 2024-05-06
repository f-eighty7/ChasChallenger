enum Profession {
    profression1 = "profression1",
    profression2 = "profression2",
    profression3 = "profression3",
  }

export const ProfessionsArray = (): Profession[] => {
    return Object.values(Profession);
}

export default Profession;