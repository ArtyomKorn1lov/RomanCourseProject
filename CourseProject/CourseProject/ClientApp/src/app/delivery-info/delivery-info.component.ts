import { Component, OnDestroy, OnInit } from '@angular/core';
import { Delivery } from '../dto/delivery';
import { Detail } from '../dto/detail';
import { Provider } from '../dto/provider';
import { DetailService } from '../services/detail.service';
import { ProviderService } from '../services/provider.service';
import { DeliveryService } from '../services/delivery.service';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-delivery-info',
  templateUrl: './delivery-info.component.html',
  styleUrls: ['./delivery-info.component.css']
})
export class DeliveryInfoComponent implements OnInit {

  public delivery!: Delivery;
  public detail!: Detail;
  public provider!: Provider;
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private deliveryService: DeliveryService, private detailService: DetailService, private providerService: ProviderService) { }

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
