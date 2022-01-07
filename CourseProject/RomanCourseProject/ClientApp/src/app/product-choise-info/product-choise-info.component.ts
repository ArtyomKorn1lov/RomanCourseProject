import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../dto/product';
import { OrdersService } from '../services/orders.service';
import { ProductService } from '../services/product.service';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-product-choise-info',
  templateUrl: './product-choise-info.component.html',
  styleUrls: ['./product-choise-info.component.css']
})
export class ProductChoiseInfoComponent implements OnInit {

  private createDetailRoute: string = '/create-delivery';
  private updateDetailRoute: string = '/edit-delivery';
  public detail!: Product;
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private router: Router, private detailService: ProductService, private deliveryService: OrdersService) { }

  choiseDetail(id: number): void {
    this.deliveryService.pushChoiseDetailId(id);
    if(sessionStorage.getItem('DeliveryPage') == 'create')
    {
      this.router.navigateByUrl(this.createDetailRoute);
      return;
    }
    this.router.navigateByUrl(this.updateDetailRoute);
  }

  getUser() {
    this.user = this.userService.getDataFromService();
  }

  ngOnInit(): void {
    this.getUser();
    this.detailService.getDetailById(this.detailService.getFromService()).subscribe(data => this.detail = data);
  }

}
