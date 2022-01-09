import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Delivery } from '../dto/delivery';
import { SupplyService } from '../services/supply.service';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-supply-choise',
  templateUrl: './supply-choise.component.html',
  styleUrls: ['./supply-choise.component.css']
})
export class SupplyChoiseComponent implements OnInit {

  search: number | undefined;
  private createSupplyRoute: string = '/create-delivery';
  private updateSupplyRoute: string = '/edit-delivery';
  public supplies: Delivery[] = [];
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private router: Router, private supplyService: SupplyService) { }

  routerBack(): void{
    if(sessionStorage.getItem('DeliveryPage') == 'create')
    {
      this.router.navigateByUrl(this.createSupplyRoute);
      return;
    }
    this.router.navigateByUrl(this.updateSupplyRoute);
  }

  getSupplies(): void {
    this.supplyService.getSupplies().subscribe(data => this.supplies = data);
  }

  getSuppliesByPrice(): void {
    if(this.search != undefined){
      this.supplies = [];
      this.supplyService.getByPrice(this.search).subscribe(data => this.supplies = data);
    }
  }

  reloadList(): void {
    this.search = undefined;
    this.supplies = [];
    this.getSupplies();
  }

  pushDataInService(id: number): void {
    this.supplyService.pushInService(id);
  }

  getUser() {
    this.user = this.userService.getDataFromService();
  }

  ngOnInit(): void {
    this.getUser();
    this.getSupplies();
  }

}
