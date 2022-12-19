import { Project } from '../../store';

export interface ResponseGetProjects {
  projects: Project[] | never[];
}