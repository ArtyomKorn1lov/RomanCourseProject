import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../dto/customer';
import { CustomerService } from '../services/customer.service';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-customer-choise',
  templateUrl: './customer-choise.component.html',
  styleUrls: ['./customer-choise.component.css']
})
export class CustomerChoiseComponent implements OnInit {

  search: string | undefined;
  private createProviderRoute: string = '/create-delivery';
  private updateProviderRoute: string = '/edit-delivery';
  public providers: Customer[] = [];
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private router: Router, private providerService: CustomerService) { }

  routerBack(): void{
    if(sessionStorage.getItem('DeliveryPage') == 'create')
    {
      this.router.navigateByUrl(this.createProviderRoute);
      return;
    }
    this.router.navigateByUrl(this.updateProviderRoute);
  }

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
