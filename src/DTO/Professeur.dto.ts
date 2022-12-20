import ClasseDto from "./Classe.dto";

class ProfesseurDto {
  private _id: String;
  private _nom: String;
  private _prenom: String;
  private _classesList: ClasseDto[];
  private _matiere: String;

  constructor(id: String, nom: String, prenom: String, classesList: ClasseDto[], matiere: String) {
    this._id = id;
    this._nom = nom;
    this._prenom = prenom;
    this._classesList = classesList;
    this._matiere = matiere;
  }

  public get id() {
    return this._id;
  }
  public get nom() {
    return this._nom;
  }

  public get prenom() {
    return this._prenom;
  }

  public get classeList() {
    return this._classesList;
  }

  public get matiere() {
    return this._matiere;
  }

  public set id(id: String) {
    this._id = id;
  }

  public set nom(nom: String) {
    this._nom = nom;
  }

  public set prenom(prenom: String) {
    this._prenom = prenom;
  }

  public set classeList(classeList: ClasseDto[]) {
    this._classesList = classeList;
  }

  public set matiere(matiere: String) {
    this._matiere = matiere;
  }
}

export default ProfesseurDto;
