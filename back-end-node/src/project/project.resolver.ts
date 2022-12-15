import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { ProjectService } from './project.service';
import { FoundProject } from './project.type';

@Resolver()
export class ProjectResolver {
  constructor(private projectService: ProjectService) {}

  @Query(() => FoundProject)
  async project(@Args('id') id: string): Promise<FoundProject> {
    const oneProject = await this.projectService.findProjectById(id);
    return oneProject;
  }

  @Query(() => [FoundProject])
  async projects(): Promise<FoundProject[]> {
    const projects = await this.projectService.findAllProjects();
    return projects;
  }

  @Mutation(() => FoundProject)
  async createProject(
    @Args('data') data: CreateProjectInput,
  ): Promise<FoundProject> {
    const project = await this.projectService.createProject(data);
    return project;
  }

  @Mutation(() => FoundProject)
  async updateProject(
    @Args('id') id: string,
    @Args('data') data: UpdateProjectInput,
  ): Promise<FoundProject> {
    const project = await this.projectService.updateProject(id, data);
    return project;
  }

  @Mutation(() => Boolean)
  async deleteProject(@Args('id') id: string): Promise<boolean> {
    const deleted = await this.projectService.deleteProject(id);
    return deleted;
  }
}
