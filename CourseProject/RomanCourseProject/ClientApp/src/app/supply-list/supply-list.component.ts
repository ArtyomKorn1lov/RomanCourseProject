import { Component, OnInit } from '@angular/core';
import { Delivery } from '../dto/delivery';
import { SupplyService } from '../services/supply.service';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-supply-list',
  templateUrl: './supply-list.component.html',
  styleUrls: ['./supply-list.component.css']
})
export class SupplyListComponent implements OnInit {

  search: number | undefined;
  public supplies: Delivery[] = [];
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private supplyService: SupplyService) { }

  getSupplies(): void {
    this.supplyService.getSupplies().subscribe(data => this.supplies = data);
  }

  getSuppliesByPrice(): void {
    if(this.search != undefined){
      this.supplies = [];
      this.supplyService.getByPrice(this.search).subscribe(data => this.supplies = data);
    }
  }

  reloadList(): void {
    this.search = undefined;
    this.supplies = [];
    this.getSupplies();
  }

  pushDataInService(id: number): void {
    this.supplyService.pushInService(id);
  }

  getUser() {
    this.user = this.userService.getDataFromService();
  }

  ngOnInit(): void {
    this.getUser();
    this.getSupplies();
  }

}
