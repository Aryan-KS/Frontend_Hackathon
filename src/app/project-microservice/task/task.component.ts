import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Status, User, Project, Task } from "../../modules/modules";
import { ProjectService } from "../project/service/project.service";
import { UserService } from "../user/service/user.service";
import { TaskService } from "./service/task.service";


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  constructor(private taskService: TaskService, private projectService: ProjectService, private userService: UserService) {

  }
  ngOnInit(): void {

    this.getAllTaskCall();
    this.populateAllProjectCall();
    this.populateAllUserCall();

  }
  id: number = 0

  statusList: Status[] = Object.values(Status);

  newTask: Task = {
    title: '',
    description: '',
    status: Status.TODO,
    assignedTo: {
      name: '',
      email: ''
    },
    project: {
      title: '',
      description: '',
      endDate: new Date(),
      userList: [],
      startDate: new Date(),
    }
  }
  updatedTask: Task = {
    title: '',
    description: '',
    status: Status.TODO,
    assignedTo: {
      name: '',
      email: ''
    },
    project: {
      title: '',
      description: '',
      endDate: new Date(),
      userList: [],
      startDate: new Date(),
    }
  }
  defaultTask: Task = {
    title: '',
    description: '',
    status: Status.TODO,
    assignedTo: {
      name: '',
      email: ''
    },
    project: {
      title: '',
      description: '',
      endDate: new Date(),
      userList: [],
      startDate: new Date(),
    }
  }


  taskList: Task[] = []
  userList: User[] = []
  projectList: Project[] = []

  taskById?: Task

  resetTask() {
    this.newTask = { ...this.defaultTask }
    // this.updatedTask = { ...this.defaultTask }

  }


  addTaskCall() {
    this.taskService.addTask(this.newTask).subscribe(
      data => {
        this.taskList.push(data);
        this.resetTask();
      }
    )
  }
  getAllTaskCall() {
    this.taskService.getAllTask().subscribe(
      data => {
        this.taskList = data;
      }
    )
  }
  getTaskByIdCall() {
    this.taskService.getTaskById(this.id).subscribe(
      data => {
        this.taskById = data;
      }
    )
  }
  deleteTaskCall(curr_id: number) {
    this.taskService.deleteTask(curr_id).subscribe(
      () => {
        this.ngOnInit();
      }
    )
  }
  updateTaskCall() {
    this.taskService.updateTask(this.updatedTask.id!, this.updatedTask).subscribe(
      () => {
        this.resetTask();
        this.ngOnInit();
      }
    )
  }
  populateUpdateForm(task: Task) {
    this.updatedTask = { ...task }
  }
  populateAllUserCall() {
    this.userService.getAllUser().subscribe(
      data => {
        this.userList = data;
      }
    )
  }
  populateAllProjectCall() {
    this.projectService.getAllProject().subscribe(
      data => {
        this.projectList = data;
      }
    )
  }
}
