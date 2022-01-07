import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateOrdersDto } from '../dto/CreateOrdersDto';
import { Product } from '../dto/product';
import { Customer } from '../dto/customer';
import { OrdersService } from '../services/orders.service';
import { ProductService } from '../services/product.service';
import { CustomerService } from '../services/customer.service';
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
  count: number | undefined;
  public provider!: Customer;
  public detail!: Product;
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private router: Router, private deliveryService: OrdersService, private detailService: ProductService, private providerService: CustomerService) { }

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

  detailClick(): void{
    sessionStorage.setItem('DeliveryPage', 'create');
    this.router.navigateByUrl('/detail-choise');
  }

  providerClick(): void{
    sessionStorage.setItem('DeliveryPage', 'create');
    this.router.navigateByUrl('/provider-choise');
  }

  createDelivery(): void {
    if (this.providerId == undefined) {
      alert("Выберете поставщика");
      return;
    }
    if (this.detailId == undefined) {
      alert("Выберете деталь");
      return;
    }
    if (this.count == null || this.count == 0) {
      alert("Введите количество");
      this.count = 1;
      return;
    }
    if (this.count >= 100000) {
      alert("Слишком большое количество товара, поставщики не потянут такое");
      this.count = 1;
      return;
    }
    var date = new Date();
    var delivery = new CreateOrdersDto(this.providerId, this.detailId, this.count, date, this.detail.price*this.count);
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
    sessionStorage.setItem('DetailPage', '');
  }

}
