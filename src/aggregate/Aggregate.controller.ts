import AggregateService from "./Aggregate.service";
import express, {Request, Response} from "express";

export default class AggregateController {
  private service: AggregateService;

  constructor(service: AggregateService) {
    this.service = service;
  }

  public getAllClasses = async (req: Request, res: Response) => {
    const data = await this.service.getAllClasses().then((data) => data);
    res.send(data);
  };

  public getProfesseurAvecClassList = async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = await this.service.getProfesseurAvecClassList(id).then((data) => data);
    res.send(data);
  };
}
