import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Delivery } from '../dto/delivery';
import { Detail } from '../dto/detail';
import { Provider } from '../dto/provider';
import { DeliveryService } from '../services/delivery.service';
import { DetailService } from '../services/detail.service';
import { ProviderService } from '../services/provider.service';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-delivery',
  templateUrl: './edit-delivery.component.html',
  styleUrls: ['./edit-delivery.component.css']
})
export class EditDeliveryComponent implements OnInit {

  detailId: number | undefined;
  providerId: number | undefined;
  public delivery!: Delivery;
  public detail!: Detail;
  public provider!: Provider;
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private router: Router, private deliveryService: DeliveryService, private detailService: DetailService, private providerService: ProviderService) { }

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
    if (this.detailId != undefined) this.delivery.detailId = this.detailId;
    if (this.providerId != undefined) this.delivery.providerId = this.providerId;
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
