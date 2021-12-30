import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Provider } from '../dto/provider';
import { ProviderService } from '../services/provider.service';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-provider-info',
  templateUrl: './provider-info.component.html',
  styleUrls: ['./provider-info.component.css']
})
export class ProviderInfoComponent implements OnInit {

  private targetRoute: string = '/provider-list';
  public provider!: Provider;
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private router: Router, private providerService: ProviderService) { }

  getUser() {
    this.user = this.userService.getDataFromService();
  }
  
  ngOnInit(): void {
    this.getUser();
    this.providerService.getProviderById(this.providerService.getFromService()).subscribe(data => this.provider = data);
  }

}
