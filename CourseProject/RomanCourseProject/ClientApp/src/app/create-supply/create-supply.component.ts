import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateDeliveryDto } from '../dto/CreateDeliveryDto';
import { SupplyService } from '../services/supply.service';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-supply',
  templateUrl: './create-supply.component.html',
  styleUrls: ['./create-supply.component.css']
})
export class CreateSupplyComponent implements OnInit {

  deliveryMethod: string = "По почте";
  price: number = 300;
  private targetRoute: string = '/supply-list';
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private router: Router, private supplyService: SupplyService) { }

  CreateSupply(): void {
    if (this.price == null) {
      alert("Выберете способ доставки");
      return;
    }
    if(this.deliveryMethod == "По почте") this.price = 300;
    if(this.deliveryMethod == "Через курьера") this.price = 500;
    if(this.deliveryMethod == "Забрать в отделении") this.price = 0;
    var date = new Date();
    var supply = new CreateDeliveryDto(this.deliveryMethod, this.price, date);
    this.supplyService.createSupply(supply).subscribe(x => console.log(x));
    this.router.navigateByUrl(this.targetRoute);
  }

  getUser() {
    this.user = this.userService.getDataFromService();
  }

  ngOnInit(): void {
    this.getUser();
  }

}
