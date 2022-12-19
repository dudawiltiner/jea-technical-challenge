import { Project } from "../../store";

export interface ResponseCreateProject {
  updateProject: Project;
}

export interface ProjectInput {
  title: string,
  zip_code: string,
  deadline: string,
  cost: number,
}