import { Project } from '../../store';

export interface ResponseGetProjects {
  projectsByUser: Project[] | never[];
}