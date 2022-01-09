import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Delivery } from '../dto/delivery';
import { SupplyService } from '../services/supply.service';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-supply-info',
  templateUrl: './supply-info.component.html',
  styleUrls: ['./supply-info.component.css']
})
export class SupplyInfoComponent implements OnInit {

  private targetRoute: string = '/supply-list';
  public supply!: Delivery;
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private router: Router, private supplyService: SupplyService) { }

  getUser() {
    this.user = this.userService.getDataFromService();
  }
  
  ngOnInit(): void {
    this.getUser();
    this.supplyService.getSupplyById(this.supplyService.getFromService()).subscribe(data => this.supply = data);
  }

}
