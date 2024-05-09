enum Profession {
    profession1 = "profession1",
    profession2 = "profession2",
    profession3 = "profession3",
  }

export const ProfessionsArray = (): Profession[] => {
    return Object.values(Profession);
}

export default Profession;