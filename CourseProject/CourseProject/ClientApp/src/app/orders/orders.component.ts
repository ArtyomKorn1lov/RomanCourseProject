import { Component, OnInit } from '@angular/core';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService) { }

  getUser(): void {
    this.user = this.userService.getDataFromService()
  }

  ngOnInit(): void {
    this.getUser();
  }

}
