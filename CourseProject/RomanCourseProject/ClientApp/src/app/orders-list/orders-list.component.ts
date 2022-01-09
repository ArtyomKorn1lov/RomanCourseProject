import { Component, OnInit } from '@angular/core';
import { OrdersDtoInfo } from '../dto/OrdersInfoDto';
import { OrdersService } from '../services/orders.service';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  searchDetail : string | undefined;
  searchProvider : string | undefined;
  public deliveries: OrdersDtoInfo[] = [];
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private deliveryService: OrdersService) { }

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

  pushDataInService(id: number, customerId: number, productId: number, deliveryId: number): void {
    this.deliveryService.pushInService(id, customerId, productId, deliveryId);
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
