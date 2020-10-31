import { Team } from "./team";
import { Country } from "./country";

export class League {
  shortName: string;
  longName: string;
  team: Team[];
  country: Country[];

  constructor(shortName: string, longName: string, country: Country) {
    this.shortName = shortName;
    this.longName = longName;
    this.country = country;
  }

  getShortName() {}
  setShortName(shortName: string) {}
  getLongName() {}
  setLongName(longName: string) {}
  getCountry() {}
  setCountry() {}
  getTeams() {}
  addTeam(team: Team) {}
  removeTeam(team: Team) {}
  toString() {}
}
