import "dotenv/config";

export default class ClasseService {
  private classeURI: RequestInfo | URL = `${process.env.classesURI}`;

  //constructor(classURI: String) {}

  fetchData = () => {
    return fetch(this.classeURI)
      .then((data) => data.json())
      .then((data) => data);
  };

  fetchListParIds = (ids: String) => {
    return fetch(`${this.classeURI}/listeIds?ids=${ids}`)
      .then((data) => data.json())
      .then((data) => data);
  };
}
