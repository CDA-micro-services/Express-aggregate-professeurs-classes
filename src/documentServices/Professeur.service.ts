import "dotenv/config";

export default class ProfesseurService {
  private professeurURI: RequestInfo | URL = `${process.env.professeurURI}`;

  fetchParId = (id: String) => {
    return fetch(`${this.professeurURI}/${id}`)
      .then((data) => data.json())
      .then((data) => data);
  };
}
