import { Component, OnInit } from '@angular/core';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  public currentUser!: User;
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService) { }

  getUser() {
    this.user = this.userService.getDataFromService();
  }

  getCurrentUser(): void {
    this.userService.getUserById(this.userService.getCurrentUserId()).subscribe(data => this.currentUser = data);
  }

  ngOnInit(): void {
    this.getUser();
    this.getCurrentUser();
  }

}
