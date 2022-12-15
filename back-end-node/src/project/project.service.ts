import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { fetchFindCep } from 'services/api-viacep';
import { Repository } from 'typeorm';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Project } from './project.entity';
import { FoundProject } from './project.type';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  async findAllProjects(): Promise<FoundProject[]> {
    const projects = await this.projectRepository.find();
    console.log(projects);
    const list = [];
    let count = 0;
    while (count <= 3) {
      const project = projects[count];
      console.log(project);
      const adress = await fetchFindCep(project.zip_code);
      const newProject = { ...project, city: adress.logradouro };
      list.push(newProject);
      count += 1;
    }

    return list;
  }

  async findProjectById(id: string): Promise<FoundProject> {
    const project = await this.projectRepository.findOneBy({ id: id });

    if (!project) {
      throw new NotFoundException('Usuário não econtrado');
    }

    const adress = await fetchFindCep(project.zip_code);
    const newProject = { ...project, city: adress.logradouro };
    return newProject;
  }

  async createProject(data: CreateProjectInput): Promise<FoundProject> {
    const existedProject = await this.projectRepository.findOneBy({
      title: data.title,
    });

    if (existedProject) {
      const adress = await fetchFindCep(existedProject.zip_code);
      const newProject = { ...existedProject, city: adress.logradouro };
      return newProject;
    }

    const project = this.projectRepository.create(data);
    const projectSaved = await this.projectRepository.save(project);

    if (!projectSaved) {
      throw new InternalServerErrorException('Problema para criar um projeto');
    }

    const adress = await fetchFindCep(project.zip_code);
    const newProject = { ...projectSaved, city: adress.logradouro };
    return newProject;
  }

  async updateProject(
    id: string,
    data: UpdateProjectInput,
  ): Promise<FoundProject> {
    const project = await this.findProjectById(id);

    await this.projectRepository.update(project, { ...data });
    // gerar um valor que pode ser retornado
    const projectUpdated = this.projectRepository.create({
      ...project,
      ...data,
    });

    const adress = await fetchFindCep(project.zip_code);
    const newProject = { ...projectUpdated, city: adress.logradouro };
    return newProject;
  }

  async deleteProject(id: string): Promise<boolean> {
    const deleted = await this.projectRepository.delete({ id });

    if (deleted) {
      return true;
    }

    return false;
  }
}
