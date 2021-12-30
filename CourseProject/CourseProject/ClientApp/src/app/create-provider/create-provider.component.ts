import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateProviderDto } from '../dto/CreateProviderDto';
import { ProviderService } from '../services/provider.service';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-provider',
  templateUrl: './create-provider.component.html',
  styleUrls: ['./create-provider.component.css']
})
export class CreateProviderComponent implements OnInit {

  name: string | undefined;
  address: string | undefined;
  phone: string | undefined;
  private targetRoute: string = '/provider-list';
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private router: Router, private providerService: ProviderService) { }

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
    var provider = new CreateProviderDto(this.name, this.address, this.phone);
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
