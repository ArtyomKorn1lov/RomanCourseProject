import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Delivery } from '../dto/delivery';
import { SupplyService } from '../services/supply.service';
import { OrdersService } from '../services/orders.service';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-supply-choise-info',
  templateUrl: './supply-choise-info.component.html',
  styleUrls: ['./supply-choise-info.component.css']
})
export class SupplyChoiseInfoComponent implements OnInit {

  private createProviderRoute: string = '/create-delivery';
  private updateProviderRoute: string = '/edit-delivery';
  public supply!: Delivery;
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private router: Router, private supplyService: SupplyService, private deliveryService: OrdersService) { }

  choiseSupply(id: number): void {
    this.deliveryService.pushChoiseSupplyId(id);
    if(sessionStorage.getItem('DeliveryPage') == 'create') {
      this.router.navigateByUrl(this.createProviderRoute);
      return;
    }
    this.router.navigateByUrl(this.updateProviderRoute);
  }

  getUser() {
    this.user = this.userService.getDataFromService();
  }

  ngOnInit(): void {
    this.getUser();
    this.supplyService.getSupplyById(this.supplyService.getFromService()).subscribe(data => this.supply = data);
  }

}
