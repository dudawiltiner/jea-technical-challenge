import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Context } from '@nestjs/graphql';
import { AuthGuard } from 'src/auth.guard';
import { CreateProjectWithHeaderInput } from './dto/create-project-with-header.input';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { ProjectService } from './project.service';
import { FoundProject } from './project.type';

@Resolver()
export class ProjectResolver {
  constructor(private projectService: ProjectService) {}

  @Query(() => FoundProject)
  @UseGuards(new AuthGuard())
  async project(@Args('id') id: string): Promise<FoundProject> {
    const oneProject = await this.projectService.findProjectById(id);
    return oneProject;
  }

  @Query(() => [FoundProject])
  @UseGuards(new AuthGuard())
  async projects(): Promise<FoundProject[]> {
    const projects = await this.projectService.findAllProjects();
    return projects;
  }

  @Mutation(() => FoundProject)
  @UseGuards(new AuthGuard())
  async createProject(
    @Args('data') data: CreateProjectWithHeaderInput,
    @Context() context,
  ): Promise<FoundProject> {
    const project = await this.projectService.createProject({
      ...data,
      username: context.req.headers.username,
    });
    return project;
  }

  @Mutation(() => FoundProject)
  @UseGuards(new AuthGuard())
  async updateProject(
    @Args('id') id: string,
    @Args('data') data: UpdateProjectInput,
  ): Promise<FoundProject> {
    const project = await this.projectService.updateProject(id, data);
    return project;
  }

  @Mutation(() => Boolean)
  @UseGuards(new AuthGuard())
  async deleteProject(@Args('id') id: string): Promise<boolean> {
    const deleted = await this.projectService.deleteProject(id);
    return deleted;
  }
}
