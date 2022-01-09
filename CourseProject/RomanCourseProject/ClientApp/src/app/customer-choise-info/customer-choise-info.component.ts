import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../dto/customer';
import { CustomerService } from '../services/customer.service';
import { OrdersService } from '../services/orders.service';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-customer-choise-info',
  templateUrl: './customer-choise-info.component.html',
  styleUrls: ['./customer-choise-info.component.css']
})
export class CustomerChoiseInfoComponent implements OnInit {

  private createProviderRoute: string = '/create-delivery';
  private updateProviderRoute: string = '/edit-delivery';
  public provider!: Customer;
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private router: Router, private providerService: CustomerService, private deliveryService: OrdersService) { }

  choiseProvider(id: number): void{
    this.deliveryService.pushChoiseProviderId(id);
    if(sessionStorage.getItem('DeliveryPage') == 'create') {
      this.router.navigateByUrl(this.createProviderRoute);
      return;
    }
    this.router.navigateByUrl(this.updateProviderRoute);
  }

  getUser() {
    this.user = this.userService.getDataFromService();
  }

  ngOnInit(): void {
    this.getUser();
    this.providerService.getProviderById(this.providerService.getFromService()).subscribe(data => this.provider = data);
  }

}
