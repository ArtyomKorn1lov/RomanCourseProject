import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateOrdersDto } from '../dto/CreateOrdersDto';
import { Product } from '../dto/product';
import { Customer } from '../dto/customer';
import { Delivery } from '../dto/delivery';
import { OrdersService } from '../services/orders.service';
import { ProductService } from '../services/product.service';
import { CustomerService } from '../services/customer.service';
import { SupplyService } from '../services/supply.service';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-orders',
  templateUrl: './create-orders.component.html',
  styleUrls: ['./create-orders.component.css']
})
export class CreatOrdersComponent implements OnInit {

  detailId: number | undefined;
  providerId: number | undefined;
  supplyId: number | undefined;
  count: number | undefined;
  public provider!: Customer;
  public detail!: Product;
  public supply!: Delivery;
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private router: Router, private deliveryService: OrdersService, private detailService: ProductService, private providerService: CustomerService, private supplyService: SupplyService) { }

  getDetail(): void {
    this.detailId = this.deliveryService.getChoiseDetailId();
    if (this.detailId == -1 || this.detailId == undefined) {
      this.detailId = undefined;
    }
    else this.detailService.getDetailById(this.detailId).subscribe(data => this.detail = data);
  }

  getProvider(): void {
    this.providerId = this.deliveryService.getChoiseProviderId();
    if (this.providerId == -1 || this.providerId == undefined) {
      this.providerId = undefined;
    }
    else this.providerService.getProviderById(this.providerId).subscribe(data => this.provider = data);
  }

  getSupply(): void {
    this.supplyId = this.deliveryService.getChoiseSupplyId();
    if (this.supplyId == -1 || this.supplyId == undefined) {
      this.supplyId = undefined;
    }
    else this.supplyService.getSupplyById(this.supplyId).subscribe(data => this.supply = data);
  }

  detailClick(): void{
    sessionStorage.setItem('DeliveryPage', 'create');
    this.router.navigateByUrl('/detail-choise');
  }

  providerClick(): void{
    sessionStorage.setItem('DeliveryPage', 'create');
    this.router.navigateByUrl('/provider-choise');
  }

  supplyClick(): void {
    sessionStorage.setItem('DeliveryPage', 'create');
    this.router.navigateByUrl('/supply-choise');
  }

  createDelivery(): void {
    if (this.providerId == undefined) {
      alert("Выберете заказчика");
      return;
    }
    if (this.detailId == undefined) {
      alert("Выберете товар");
      return;
    }
    if (this.supplyId == undefined) {
      alert("Выберете поставку");
      return;
    }
    if (this.count == null || this.count == 0) {
      alert("Введите количество");
      this.count = 1;
      return;
    }
    if (this.count >= 100000) {
      alert("Слишком большое количество товара, невозможно осуществить заказ");
      this.count = 1;
      return;
    }
    var date = new Date();
    var delivery = new CreateOrdersDto(this.providerId, this.detailId, this.count, date, this.supplyId, this.detail.price*this.count+this.supply.price);
    this.deliveryService.createDelivery(delivery).subscribe(x => console.log(x));
    this.router.navigateByUrl('/delivery-list');
  }

  getUser() {
    this.user = this.userService.getDataFromService();
  }

  ngOnInit() {
    this.getUser();
    this.getDetail();
    this.getProvider();
    this.getSupply();
    sessionStorage.setItem('DeliveryPage', '');
  }

}
