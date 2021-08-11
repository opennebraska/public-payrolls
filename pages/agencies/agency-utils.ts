export const getStyledAgencyShortName = (agencyName: string): string => {
  return agencyName.toLowerCase().split("-")[0].trim().split(" ").join("-");
};

export const getAgencyNameWithoutNumber = (agencyName) => {
  return agencyName.split("-")[0];
};
