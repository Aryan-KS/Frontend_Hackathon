import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../modules/modules';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) {

  }
  ngOnInit(): void {

    this.getAllUserCall();

  }
  id: number = 0

  newUser: User = {
    name: '',
    email: ''
  }
  updatedUser: User = {
    id: 0,
    name: '',
    email: ''
  }
  defaultUser: User = {
    name: '',
    email: ''
  }


  userList: User[] = []

  userById?: User

  resetUser() {
    this.newUser = { ...this.defaultUser }
    this.updatedUser = { ...this.defaultUser }

  }


  addUserCall() {
    this.userService.addUser(this.newUser).subscribe(
      data => {
        this.userList.push(data);
        this.resetUser();
      }
    )
  }
  getAllUserCall() {
    this.userService.getAllUser().subscribe(
      data => {
        this.userList = data;
      }
    )
  }
  getUserByIdCall() {
    this.userService.getUserById(this.id).subscribe(
      data => {
        this.userById = data;
      }
    )
  }
  deleteUserCall(curr_id: number) {
    this.userService.deleteUser(curr_id).subscribe(
      () => {
        this.ngOnInit();
      }
    )
  }
  updateUserCall() {

    if (this.updatedUser != null) {


      this.userService.updateUser(this.updatedUser.id!, this.updatedUser).subscribe(
        () => {

          this.ngOnInit();
          this.resetUser();
        }
      )
    }

  }
  populateUpdateForm(user: User) {

    this.updatedUser = { ...user }
  }
}
