import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  private targetRoute: string = '/';
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private router: Router) { }

  exitUser() {
    sessionStorage.clear();
    this.router.navigateByUrl(this.targetRoute);
    location.reload();
  }

  getUser() {
    this.user = this.userService.getDataFromService();
  }

  ngOnInit(): void {
    this.getUser();
    if(this.user.id == 0)
    {
      this.router.navigateByUrl(this.targetRoute);
    }
  }
}
