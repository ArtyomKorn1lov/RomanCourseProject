import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateCustomerDto } from '../dto/CreateCustomerDto';
import { CustomerService } from '../services/customer.service';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  name: string | undefined;
  address: string | undefined;
  phone: string | undefined;
  contacts: string | undefined;
  private targetRoute: string = '/provider-list';
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private router: Router, private providerService: CustomerService) { }

  CreateProvider(): void {
    if (this.name == null || this.name.trim() == '') {
      alert("Введите наименование поставщика");
      this.name = '';
      return;
    }
    if (this.address == null || this.address.trim() == '') {
      alert("Введите адрес поставщика");
      this.address = '';
      return;
    }
    if (this.phone == null || this.phone.trim() == '') {
      alert("Введите телефон поставщика");
      this.phone = '';
      return;
    }
    if (this.contacts == null || this.contacts.trim() == '') {
      alert("Введите контакты поставщика");
      this.contacts = '';
      return;
    }
    var provider = new CreateCustomerDto(this.name, this.address, this.phone, this.contacts);
    this.providerService.createProvider(provider).subscribe(x => console.log(x));
    this.router.navigateByUrl(this.targetRoute);
  }

  getUser() {
    this.user = this.userService.getDataFromService();
  }

  ngOnInit(): void {
    this.getUser();
  }

}
