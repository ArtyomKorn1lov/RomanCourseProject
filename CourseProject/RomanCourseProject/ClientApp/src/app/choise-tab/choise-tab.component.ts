import { Component, OnInit } from '@angular/core';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-choise-tab',
  templateUrl: './choise-tab.component.html',
  styleUrls: ['./choise-tab.component.css']
})
export class ChoiseTabComponent implements OnInit {
  
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService) { }

  getUser(): void {
    this.user = this.userService.getDataFromService()
  }

  ngOnInit(): void {
    this.getUser();
  }

}
