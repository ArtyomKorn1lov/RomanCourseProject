import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orders } from '../dto/orders';
import { Product } from '../dto/product';
import { Customer } from '../dto/customer';
import { OrdersService } from '../services/orders.service';
import { ProductService } from '../services/product.service';
import { CustomerService } from '../services/customer.service';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-orders',
  templateUrl: './edit-orders.component.html',
  styleUrls: ['./edit-orders.component.css']
})
export class EditOrdersComponent implements OnInit {

  detailId: number | undefined;
  providerId: number | undefined;
  public delivery!: Orders;
  public detail!: Product;
  public provider!: Customer;
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private router: Router, private deliveryService: OrdersService, private detailService: ProductService, private providerService: CustomerService) { }

  detailClick(): void {
    sessionStorage.setItem('DeliveryPage', 'edit');
    this.router.navigateByUrl('/detail-choise');
  }

  providerClick(): void {
    sessionStorage.setItem('DeliveryPage', 'edit');
    this.router.navigateByUrl('/provider-choise');
  }

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

  deleteDelivery(): void {
    if (confirm("Вы уверены, что хотите удалить данную деталь?")) {
      this.deliveryService.deleteDelivery(this.delivery.id).subscribe(x => console.log(x));
      this.router.navigateByUrl('/delivery-list');
    }
  }

  editDelivery(): void {
    if (this.providerId == undefined) {
      if (this.provider.id == undefined) {
        alert("Выберете поставщика");
        return;
      }
      this.providerId = this.provider.id;
    }
    if (this.detailId == undefined) {
      if (this.detail.id == undefined) {
        alert("Выберете деталь");
        return;
      }
      this.detailId = this.detail.id;
    }
    if (this.delivery.count == null) {
      alert("Введите количество");
      this.delivery.count = 1;
      return;
    }
    if (this.delivery.count >= 100000) {
      alert("Слишком большое количество товара, поставщики не потянут такое");
      this.delivery.count = 1;
      return;
    }
    if (this.detailId != undefined) this.delivery.productId = this.detailId;
    if (this.providerId != undefined) this.delivery.customerId = this.providerId;
    this.delivery.date = new Date();
    this.delivery.price = this.detail.price * this.delivery.count;
    this.deliveryService.updateDelivery(this.delivery).subscribe(x => console.log(x));
    this.router.navigateByUrl('/delivery-info');
  }

  getUser() {
    this.user = this.userService.getDataFromService();
  }

  ngOnInit(): void {
    this.getUser();
    this.deliveryService.getDeliveryById(this.deliveryService.getDeliveryIdFromService()).subscribe(data => this.delivery = data);
    this.getDetail();
    this.getProvider();
    if (this.detailId == undefined) {
      this.detailService.getDetailById(this.deliveryService.getDeliveryDetailIdFromService()).subscribe(data => this.detail = data);
    }
    if (this.providerId == undefined) {
      this.providerService.getProviderById(this.deliveryService.getDeliveryProviderIdFromService()).subscribe(data => this.provider = data);
    }
  }
}
