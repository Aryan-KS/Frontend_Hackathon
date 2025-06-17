import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../modules/modules';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  baseUrl = 'http://localhost:9090/api/users'
  constructor(private http: HttpClient) {

  }


  addUser(user: User): Observable<User> {

    return this.http.post<User>(
      `${this.baseUrl}`, user
    )
  }


  getUserById(id: number): Observable<User> {

    return this.http.get<User>(
      `${this.baseUrl}/${id}`,
    )
  }


  getAllUser(): Observable<User[]> {

    return this.http.get<User[]>(
      `${this.baseUrl}`,
    )
  }


  deleteUser(id: number): Observable<void> {

    return this.http.delete<void>(
      `${this.baseUrl}/${id}`
    )
  }


  updateUser(id: number, user: User): Observable<User> {

    return this.http.put<User>(
      `${this.baseUrl}/${id}`, user
    )
  }

}
