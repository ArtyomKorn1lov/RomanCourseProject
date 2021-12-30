import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Provider } from '../dto/provider';
import { ProviderService } from '../services/provider.service';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-provider-choise',
  templateUrl: './provider-choise.component.html',
  styleUrls: ['./provider-choise.component.css']
})
export class ProviderChoiseComponent implements OnInit {

  search: string | undefined;
  private createProviderRoute: string = '/create-delivery';
  private updateProviderRoute: string = '/edit-delivery';
  public providers: Provider[] = [];
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private router: Router, private providerService: ProviderService) { }

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
