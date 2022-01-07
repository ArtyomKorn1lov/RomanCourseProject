import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../dto/customer';
import { CustomerService } from '../services/customer.service';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  public provider!: Customer;
  private targetRoute: string = '/provider-info';
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private router: Router, private providerService: CustomerService, private deliveyService: OrdersService) { }

  UpdateProvider(): void {
    if (this.provider.name == null || this.provider.name.trim() == '') {
      alert("Введите наименование поставщика");
      this.provider.name = '';
      return;
    }
    if (this.provider.address == null || this.provider.address.trim() == '') {
      alert("Введите адрес");
      this.provider.address = '';
      return;
    }
    if (this.provider.phone == null || this.provider.phone.trim() == '') {
      alert("Введите телефон");
      this.provider.phone = '';
      return;
    }
    this.providerService.updateProvider(this.provider).subscribe(x => console.log(x));
    this.router.navigateByUrl(this.targetRoute);
  }

  deleteProvider(id: number): void{
    if (confirm("Вы уверены, что хотите удалить данного поставщика?")) {
      this.deliveyService.checkByProviderId(id).subscribe(data => {
        if(data != null)
        {
          alert("Удаление невозможно, данный поставщик уже используется в поставке");
          return;
        }
        this.providerService.deleteProvider(id).subscribe(x => console.log(x));
        this.router.navigateByUrl('/provider-list');
      });
    }
    
  }

  getUser() {
    this.user = this.userService.getDataFromService();
  }

  ngOnInit(): void {
    this.getUser();
    this.providerService.getProviderById(this.providerService.getFromService()).subscribe(data => this.provider = data);
  }
}
