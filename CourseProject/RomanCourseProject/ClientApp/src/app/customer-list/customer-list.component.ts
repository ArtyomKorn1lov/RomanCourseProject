import { Component, OnInit } from '@angular/core';
import { Customer } from '../dto/customer';
import { CustomerService } from '../services/customer.service';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  search: string | undefined;
  public providers: Customer[] = [];
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private providerService: CustomerService) { }

  getProviders(): void {
    this.providerService.getProviders().subscribe(data => this.providers = data);
  }

  getProvidersByName(): void {
    if(this.search != undefined){
      this.providers = [];
      this.providerService.getByName(this.search).subscribe(data => this.providers = data);
    }
  }

  reloadList(): void {
    this.search = '';
    this.providers = [];
    this.getProviders();
  }

  pushDataInService(id: number): void {
    this.providerService.pushInService(id);
  }

  getUser() {
    this.user = this.userService.getDataFromService();
  }

  ngOnInit(): void {
    this.getUser();
    this.getProviders();
  }

}
