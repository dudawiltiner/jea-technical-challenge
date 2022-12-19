import { Project } from "../../store";

export interface ResponseCreateProject {
  createProject: Project;
}

export interface ProjectInput {
  title: string,
  zip_code: string,
  deadline: string,
  cost: number
}