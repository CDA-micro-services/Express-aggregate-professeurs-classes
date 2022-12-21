class ClasseDto {
  id: string = "";
  nom: string = "";
  elevesList: string[] = [""];
  //professeursList: string[] = [""];
  sallesList: string[] = [""];

  /*  
    constructor(id: String, nom: String, elevesList: String[], professeursList: string[], sallesList: String[]) {
    this._id = id;
    this._nom = nom;
    this._elevesList = elevesList;
    this._professeursList = professeursList;
    this._sallesList = sallesList;
  }

  public get id() {
    return this._id;
  }

  public get nom() {
    return this._nom;
  }

  public get elevesList() {
    return this._elevesList;
  }

  public get professeursList() {
    return this._professeursList;
  }

  public get sallesList() {
    return this._sallesList;
  }

  public set id(id: String) {
    this._id = id;
  }

  public set nom(nom: String) {
    this._nom = nom;
  }

  public set elevesList(eleveList: String[]) {
    this._elevesList = eleveList;
  }

  public set professeursList(professeursList: String[]) {
    this._professeursList = professeursList;
  }

  public set sallesList(salleList: String[]) {
    this._sallesList = salleList;
  } 
  */
}

export default ClasseDto;
