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
    const list = [];
    let count = 0;
    while (count < projects.length) {
      const project = projects[count];
      const adress = await fetchFindCep(project.zip_code);
      const newProject = { ...project, city: `${adress.city}/${adress.state}` };
      list.push(newProject);
      count += 1;
    }

    return list;
  }

  async findAllProjectsByUser(username: string): Promise<FoundProject[]> {
    const projects = await this.projectRepository.findBy({ username });
    const list = [];
    let count = 0;
    while (count < projects.length) {
      const project = projects[count];
      const adress = await fetchFindCep(project.zip_code);
      const newProject = { ...project, city: `${adress.city}/${adress.state}` };
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
    const newProject = { ...project, city: `${adress.city}/${adress.state}` };
    return newProject;
  }

  async createProject(data: CreateProjectInput): Promise<FoundProject> {
    const existedProject = await this.projectRepository.findOneBy({
      title: data.title,
    });

    if (existedProject) {
      throw new InternalServerErrorException('Projeto já existe');
    }
    const adress = await fetchFindCep(data.zip_code);

    const project = this.projectRepository.create(data);
    const projectSaved = await this.projectRepository.save(project);

    if (!projectSaved) {
      throw new InternalServerErrorException('Problema para criar um projeto');
    }

    const newProject = {
      ...projectSaved,
      city: `${adress.city}/${adress.state}`,
    };
    return newProject;
  }

  async updateProject(
    id: string,
    data: UpdateProjectInput,
  ): Promise<FoundProject> {
    const project = await this.projectRepository.findOneBy({ id });
    const adress = await fetchFindCep(data.zip_code);

    await this.projectRepository.update({ id: project.id }, data);
    // gerar um valor que pode ser retornado
    const projectUpdated = this.projectRepository.create({
      ...project,
      ...data,
    });

    const newProject = {
      ...projectUpdated,
      city: `${adress.city}/${adress.state}`,
    };
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
