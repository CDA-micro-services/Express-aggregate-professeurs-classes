import {idText} from "typescript";

class ClasseDto {
  private _id: String;
  private _nom: String;
  private _elevelList: String[];
  private _salleList: String[];

  constructor(id: String, nom: String, eleveList: String[], salleList: String[]) {
    this._id = id;
    this._nom = nom;
    this._elevelList = eleveList;
    this._salleList = salleList;
  }

  public get id() {
    return this._id;
  }

  public get nom() {
    return this._nom;
  }

  public get eleveList() {
    return this._elevelList;
  }

  public get salleList() {
    return this._salleList;
  }

  public set id(id: String) {
    this._id = id;
  }

  public set nom(nom: String) {
    this._nom = nom;
  }

  public set eleveList(eleveList: String[]) {
    this._elevelList = eleveList;
  }

  public set salleList(salleList: String[]) {
    this._salleList = salleList;
  }
}

export default ClasseDto;
