import { Component, OnInit } from '@angular/core';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  search : string | undefined;
  public users: User[] = [];
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService) { }

  getUsers(): void {
    this.userService.getUsers().subscribe(data => this.users = data);
  }

  pushDataInService(id: number): void {
    this.userService.pushCurrentUserId(id);
  }

  reloadList(): void {
    this.search = '';
    this.users = [];
    this.getUsers(); 
  }

  getUsersByName(): void {
    if(this.search != undefined)
    {
      this.users = [];
      this.userService.getUserByName(this.search).subscribe(data => this.users = data);
    }
  }

  getUser() {
    this.user = this.userService.getDataFromService();
  }

  ngOnInit(): void {
    this.getUser();
    this.getUsers();
  }

}
