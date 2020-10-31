export enum CountryEnum {
  AR,
  BR,
  DE,
  DK,
  FI,
  FR,
  GB,
  GR,
  HT,
  IT,
  JP,
  LTU,
  MX,
  NL,
  TR,
  US,
  YUG,
}

export class Country {
  country: CountryEnum;
  description: string;
  constructor(country: CountryEnum) {
    this.country = country;
  }
  public isEuropean() {
    return true;
  }
  public toString() {
    return "";
  }
}
