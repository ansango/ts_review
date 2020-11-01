"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, surname, nick, birthday, country, salary, cancellationClause, contractYears, team) {
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
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        return (this.name = name);
    };
    Person.prototype.getSurName = function () { };
    Person.prototype.setSurName = function () { };
    Person.prototype.getNick = function () { };
    Person.prototype.setNick = function () { };
    Person.prototype.getBirthday = function () { };
    Person.prototype.setBirthday = function () { };
    Person.prototype.getCountry = function () { };
    Person.prototype.setCountry = function () { };
    Person.prototype.getTeam = function () { };
    Person.prototype.setTeam = function () { };
    Person.prototype.toString = function () {
        return "";
    };
    return Person;
}());
exports.Person = Person;
