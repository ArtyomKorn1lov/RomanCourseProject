import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  public currentUser!: User;
  private targetRoute: string = '/user-info';
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private router: Router) { }

  updateUser(): void {
    if (this.currentUser.name == null || this.currentUser.name.trim() == '') {
      alert("Введите имя пользователя");
      this.currentUser.name = '';
      return;
    }
    if (this.currentUser.login == null || this.currentUser.login.trim() == '') {
      alert("Введите логин");
      this.currentUser.login = '';
      return;
    }
    if (this.currentUser.password == null || this.currentUser.password.trim() == '') {
      alert("Введите пароль");
      this.currentUser.password = '';
      return;
    }
    var user = this.currentUser;
    this.router.navigateByUrl(this.targetRoute);
    this.userService.updateUser(user).subscribe(x => console.log(x));
  }

  deleteUser(id: number): void {
    if (confirm("Вы уверены, что хотите удалить данного пользователя?")) {
      this.userService.getUserById(id).subscribe(data => {
        if (data.login == this.user.login) {
          alert("Данный пользователь авторизован, удаление невозможно");
          return;
        }
        this.router.navigateByUrl('/user-list');
        this.userService.deleteUser(id).subscribe(x => console.log(x));
      });
    }

  }

  getUser() {
    this.user = this.userService.getDataFromService();
  }

  ngOnInit(): void {
    this.getUser();
    this.userService.getUserById(this.userService.getCurrentUserId()).subscribe(data => this.currentUser = data);
  }

}
