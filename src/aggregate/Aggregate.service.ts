import ClasseService from "../documentServices/Classes.service";
import ProfesseurService from "../documentServices/Professeur.service";
import ClasseDto from "../DTO/Classe.dto";
import ProfesseurDto from "../DTO/Professeur.dto";

export default class AggregateService {
  private classeService: ClasseService;
  private professeurService: ProfesseurService;

  constructor(classService: ClasseService, professeurService: ProfesseurService) {
    this.classeService = classService;
    this.professeurService = professeurService;
  }

  async getAllClasses() {
    const dataClasse = await this.classeService.fetchData();
    return dataClasse;
  }

  async getProfesseurAvecClassList(professeurID: String) {
    const dataProf = await this.professeurService.fetchParId(professeurID);
    const dataClasse = await this.classeService.fetchListParIds(dataProf.classesList.join());

    const classDotList = dataClasse.map((classe: any) => {
      return new ClasseDto(
        classe.id,
        classe.nom,
        classe.eleveList ? classe.eleveList : [],
        classe.salleList ? classe.eleveList : []
      );
    });
    const professeurDto = new ProfesseurDto(dataProf.id, dataProf.nom, dataProf.prenom, classDotList, dataProf.matiere);

    return professeurDto;
  }
}
