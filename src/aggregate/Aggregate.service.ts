import ClasseService from "../documentServices/Classes.service";
import ProfesseurService from "../documentServices/Professeur.service";
import ClasseDto from "../DTO/Classe.dto";
import ClasseDtoIn from "../DTO/Classes.dto.in";
import ProfesseurDto from "../DTO/Professeur.dto";
import ProfesseurDtoIn from "../DTO/Professeur.dto.in";

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
    const dataProf: ProfesseurDtoIn = await this.professeurService.fetchParId(professeurID);
    const dataClasse: ClasseDtoIn[] = await this.classeService.fetchListParIds(dataProf.classesList.join());

    const classDtoList = dataClasse.map((classe: ClasseDtoIn) => {
      const classedto: ClasseDto = new ClasseDto();

      for (const attribute in classe) {
        if (classedto.hasOwnProperty(attribute)) {
          const prop: any = classe[attribute as keyof ClasseDto];
          classedto[attribute as keyof ClasseDto] = prop;
        }
      }
      return classedto;
    });

    const professeurDto = new ProfesseurDto();

    for (const attribute in dataProf) {
      if (professeurDto.hasOwnProperty(attribute)) {
        if (attribute === "classesList") {
          professeurDto["classesList"] = classDtoList;
        } else {
          professeurDto[attribute as keyof ProfesseurDto] = dataProf[attribute as keyof ProfesseurDto];
        }
      }
    }

    return professeurDto;
  }
}

// OLD WAY
/*
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
    */
