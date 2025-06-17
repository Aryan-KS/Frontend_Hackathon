import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../../modules/modules';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  baseUrl = 'http://localhost:9090/api/projects'
  constructor(private http: HttpClient) {

  }


  addProject(project: Project): Observable<Project> {

    return this.http.post<Project>(
      `${this.baseUrl}`, project
    )
  }


  getProjectById(id: number): Observable<Project> {

    return this.http.get<Project>(
      `${this.baseUrl}/${id}`,
    )
  }


  getAllProject(): Observable<Project[]> {

    return this.http.get<Project[]>(
      `${this.baseUrl}`,
    )
  }


  deleteProject(id: number): Observable<Project> {

    return this.http.delete<Project>(
      `${this.baseUrl}/${id}`
    )
  }


  updateProject(id: number, project: Project): Observable<Project> {

    return this.http.put<Project>(
      `${this.baseUrl}/${id}`, project
    )
  }

}
