import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orders } from '../dto/orders';
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
  selector: 'app-edit-orders',
  templateUrl: './edit-orders.component.html',
  styleUrls: ['./edit-orders.component.css']
})
export class EditOrdersComponent implements OnInit {

  detailId: number | undefined;
  providerId: number | undefined;
  supplyId: number | undefined;
  public delivery!: Orders;
  public detail!: Product;
  public provider!: Customer;
  public supply!: Delivery;
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private router: Router, private deliveryService: OrdersService, private detailService: ProductService, private providerService: CustomerService, private supplyService: SupplyService) { }

  detailClick(): void {
    sessionStorage.setItem('DeliveryPage', 'edit');
    this.router.navigateByUrl('/detail-choise');
  }

  providerClick(): void {
    sessionStorage.setItem('DeliveryPage', 'edit');
    this.router.navigateByUrl('/provider-choise');
  }

  supplyClick(): void {
    sessionStorage.setItem('DeliveryPage', 'edit');
    this.router.navigateByUrl('/supply-choise');
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

  getSupply(): void {
    this.supplyId = this.deliveryService.getChoiseSupplyId();
    if (this.supplyId == -1 || this.supplyId == undefined) {
      this.supplyId = undefined;
    }
    else this.supplyService.getSupplyById(this.supplyId).subscribe(data => this.supply = data);
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
        alert("Выберете заказчика");
        return;
      }
      this.providerId = this.provider.id;
    }
    if (this.detailId == undefined) {
      if (this.detail.id == undefined) {
        alert("Выберете товар");
        return;
      }
      this.detailId = this.detail.id;
    }
    if (this.supplyId == undefined) {
      if (this.supply.id == undefined) {
        alert("Выберете поставку");
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
      alert("Слишком большое количество товара, невозможно осуществить заказ");
      this.delivery.count = 1;
      return;
    }
    if (this.detailId != undefined) this.delivery.productId = this.detailId;
    if (this.providerId != undefined) this.delivery.customerId = this.providerId;
    if (this.supplyId != undefined) this.delivery.deliveryId = this.supplyId;
    this.delivery.date = new Date();
    this.delivery.price = this.detail.price*this.delivery.count+this.supply.price;
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
    this.getSupply();
    if (this.detailId == undefined) {
      this.detailService.getDetailById(this.deliveryService.getDeliveryDetailIdFromService()).subscribe(data => this.detail = data);
    }
    if (this.providerId == undefined) {
      this.providerService.getProviderById(this.deliveryService.getDeliveryProviderIdFromService()).subscribe(data => this.provider = data);
    }
    if (this.supplyId == undefined) {
      this.supplyService.getSupplyById(this.deliveryService.getDeliverySupplyIdFromService()).subscribe(data => this.supply = data);
    } 
    sessionStorage.setItem('DeliveryPage', '');
  }
}
