import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../../modules/modules';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseUrl = 'http://localhost:9090/api/tasks'
  constructor(private http: HttpClient) {

  }


  addTask(task: Task): Observable<Task> {

    return this.http.post<Task>(
      `${this.baseUrl}`, task
    )
  }


  getTaskById(id: number): Observable<Task> {

    return this.http.get<Task>(
      `${this.baseUrl}/${id}`,
    )
  }


  getAllTask(): Observable<Task[]> {

    return this.http.get<Task[]>(
      `${this.baseUrl}`,
    )
  }


  deleteTask(id: number): Observable<Task> {

    return this.http.delete<Task>(
      `${this.baseUrl}/${id}`
    )
  }


  updateTask(id: number, task: Task): Observable<Task> {

    return this.http.put<Task>(
      `${this.baseUrl}/${id}`, task
    )
  }

}
