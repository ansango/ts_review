export class Team {
  private shortName: string;
  private longName: string;
  private imgSrc: string;
  private president: string;
  private sponsor: string;
  private members: number;
  private budget: number = 0;
  private founded: number;

  constructor(
    shortName?: string,
    longName?: string,
    imageSrc?: string,
    president?: string,
    sponsor?: string,
    members?: number,
    budget?: number,
    founded?: number
  ) {
    this.shortName = shortName;
    this.longName = longName;
    this.imgSrc = imageSrc;
    this.president = president;
    this.sponsor = sponsor;
    this.members = members;
    this.budget = budget;
    this.founded = founded;
  }

  getShortName() {
    return this.shortName;
  }
  setShortName(shortName: string) {
    return (this.shortName = shortName);
  }
  getLongName() {
    return this.longName;
  }
  setLongName(longName: string) {
    return (this.longName = longName);
  }
  getImgSrc() {}
  setImgSrc() {}
  getPresident() {}
  setPresident() {}
  getSponsor() {}
  settSponsor() {}
  getMembers() {}
  setMembers() {}
  getBudget() {}
  setBudget() {}
  getBounded() {}
  setBounded() {}
}
