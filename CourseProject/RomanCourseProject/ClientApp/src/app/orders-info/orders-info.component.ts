import { Component, OnDestroy, OnInit } from '@angular/core';
import { Orders } from '../dto/orders';
import { Product } from '../dto/product';
import { Customer } from '../dto/customer';
import { ProductService } from '../services/product.service';
import { CustomerService } from '../services/customer.service';
import { OrdersService } from '../services/orders.service';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-orders-info',
  templateUrl: './orders-info.component.html',
  styleUrls: ['./orders-info.component.css']
})
export class OrdersInfoComponent implements OnInit {

  public delivery!: Orders;
  public detail!: Product;
  public provider!: Customer;
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private deliveryService: OrdersService, private detailService: ProductService, private providerService: CustomerService) { }

  getUser() {
    this.user = this.userService.getDataFromService();
  }

  ngOnInit() {
    this.getUser();
    this.deliveryService.getDeliveryById(this.deliveryService.getDeliveryIdFromService()).subscribe(data => this.delivery = data);
    this.detailService.getDetailById(this.deliveryService.getDeliveryDetailIdFromService()).subscribe(data => this.detail = data);
    this.providerService.getProviderById(this.deliveryService.getDeliveryProviderIdFromService()).subscribe(data => this.provider = data);
  }
}
