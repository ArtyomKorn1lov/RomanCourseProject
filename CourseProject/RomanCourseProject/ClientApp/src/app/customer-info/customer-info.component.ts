import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../dto/customer';
import { CustomerService } from '../services/customer.service';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  private targetRoute: string = '/provider-list';
  public provider!: Customer;
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private router: Router, private providerService: CustomerService) { }

  getUser() {
    this.user = this.userService.getDataFromService();
  }
  
  ngOnInit(): void {
    this.getUser();
    this.providerService.getProviderById(this.providerService.getFromService()).subscribe(data => this.provider = data);
  }

}
