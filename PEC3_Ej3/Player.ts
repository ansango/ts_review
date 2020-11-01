import { Person } from "./Person";
import { Country } from "./Country";
import { Team } from "./Team";
import { Position } from "./Position";

export class Player extends Person {
  number: number;
  height: number;
  weight: number;
  numInternational: number = 0;
  position: Position;
  injuredWeeks: number = 0;

  constructor(
    name: string,
    surName: string,
    nick: string,
    birthday: Date,
    //country: Country, // ? duda enum
    salary: number,
    cancellationClause: number,
    contractYears: number,
    //team: Team[],
    number: number,
    height: number,
    weight: number,
    position: Position,
    numInternational: number,
    injuredWeeks: number
  ) {
    super(
      name,
      surName,
      nick,
      birthday,
      //country,
      salary,
      cancellationClause,
      contractYears
      //team
    );

    this.number = number;
    this.height = height;
    this.weight = weight;
    this.position = position;
    this.numInternational = numInternational;
  }

  getNumber(): number {
    return this.number;
  }
  setNumber(number: number): number {
    return (this.number = number);
  }
  getNumInternational(): number {
    return this.numInternational;
  }
  setNumInternational(numInternational: number): number {
    return (this.numInternational = numInternational);
  }

  // TODO: 
  getPosition() {}
  setPosition() {}
  isInjured() {}
  getInjuredWeeks() {}
  setInjuredWeeks() {}
  getTraining() {}
  setTraining() {}

  toString(): string {
    return "";
  }
}
