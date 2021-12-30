import { Component, OnInit } from '@angular/core';
import { DeliveryDtoInfo } from '../dto/DeliveryInfoDto';
import { DeliveryService } from '../services/delivery.service';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.css']
})
export class DeliveryListComponent implements OnInit {

  searchDetail : string | undefined;
  searchProvider : string | undefined;
  public deliveries: DeliveryDtoInfo[] = [];
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private deliveryService: DeliveryService) { }

  clearDeliverySessionStorage(): void{
    this.deliveryService.clearSessionStorage();
  }

  reloadList(): void {
    this.searchDetail = '';
    this.searchProvider = '';
    this.deliveries = [];
    this.getDeliveries();
  }

  getDeliveriesByDetailName(): void {
    if(this.searchDetail != undefined)
    {
      this.searchProvider = '';
      this.deliveries = [];
      this.deliveryService.getByDetailName(this.searchDetail).subscribe(data => this.deliveries = data);
    }
  }

  getDeliveriesByProviderName(): void {
    if(this.searchProvider != undefined)
    {
      this.searchDetail = '';
      this.deliveries = [];
      this.deliveryService.getByProviderName(this.searchProvider).subscribe(data => this.deliveries = data);
    }
  }

  getDeliveries(): void{
    this.deliveryService.getDeliveries().subscribe(data => this.deliveries = data);
  }

  pushDataInService(id: number, providerId: number, detailId: number): void {
    this.deliveryService.pushInService(id, providerId, detailId);
  }

  getUser() {
    this.user = this.userService.getDataFromService();
  }

  ngOnInit(): void {
    this.getUser();
    this.clearDeliverySessionStorage();
    this.getDeliveries();
  }
}
