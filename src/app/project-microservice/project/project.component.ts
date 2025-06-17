import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Project, Status } from '../../modules/modules';
import { ProjectService } from '../project/service/project.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  constructor(private projectService: ProjectService) {

  }
  ngOnInit(): void {

    this.getAllProjectCall();

  }
  id: number = 0

  statusList: Status[] = Object.values(Status);

  newProject: Project = {
    title: '',
    description: '',
    endDate: new Date(),
    userList: [],
    startDate: new Date(),
  }
  updatedProject: Project = {
    title: '',
    description: '',
    endDate: new Date(),
    userList: [],
    startDate: new Date(),
  }
  defaultProject: Project = {
    title: '',
    description: '',
    endDate: new Date(),
    userList: [],
    startDate: new Date(),
  }


  projectList: Project[] = []

  projectById?: Project

  resetProject() {
    this.newProject = { ...this.defaultProject }
    // this.updatedProject = { ...this.defaultProject }

  }


  addProjectCall() {
    this.projectService.addProject(this.newProject).subscribe(
      data => {
        this.projectList.push(data);
        this.resetProject();
      }
    )
  }
  getAllProjectCall() {
    this.projectService.getAllProject().subscribe(
      data => {
        this.projectList = data;
      }
    )
  }
  getProjectByIdCall() {
    this.projectService.getProjectById(this.id).subscribe(
      data => {
        this.projectById = data;
      }
    )
  }
  deleteProjectCall(curr_id: number) {
    this.projectService.deleteProject(curr_id).subscribe(
      () => {
        this.ngOnInit();
      }
    )
  }
  updateProjectCall() {
    this.projectService.updateProject(this.updatedProject.id!, this.updatedProject).subscribe(
      () => {
        this.resetProject();
        this.ngOnInit();
      }
    )
  }
  populateUpdateForm(project: Project) {
    this.updatedProject = { ...project }
  }
}
