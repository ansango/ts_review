import { Country } from "./Country";
import { Team } from "./Team";

export class Person {
  private name: string;
  private surname: string;
  private nick: string;
  birthday: Date;
  country: Country[];
  salary: number;
  cancellationClause: number;
  contractYears: number;
  team: Team[];

  constructor(
    name: string,
    surname: string,
    nick: string,
    birthday: Date,
    country: Country[],
    salary: number,
    cancellationClause: number,
    contractYears: number,
    team: Team[]
  ) {
    this.name = name;
    this.surname = surname;
    this.nick = nick;
    this.birthday = birthday;
    this.country = country;
    this.salary = salary;
    this.cancellationClause = cancellationClause;
    this.contractYears = contractYears;
    this.team = team;
  }

  getName() {
    return this.name;
  }
  setName(name: string) {
    return (this.name = name);
  }
  getSurName() {
    return this.surname;
  }
  setSurName(surname: string) {
    return (this.surname = surname);
  }
  getNick() {
    return this.nick;
  }
  setNick(nick: string) {
    return (this.nick = nick);
  }
  getBirthday() {
    return this.birthday;
  }
  setBirthday(birthday: Date) {
    return (this.birthday = birthday);
  }
  getCountry() {
    return this.country;
  }
  setCountry(country: Country[]) {
    return (this.country = country);
  }
  getTeam() {
    return this.team;
  }
  setTeam(team: Team[]) {
    return (this.team = team);
  }
  toString(): string {
    return "";
  }
}
