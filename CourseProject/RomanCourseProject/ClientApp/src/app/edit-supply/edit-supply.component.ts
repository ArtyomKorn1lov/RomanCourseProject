import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupplyService } from '../services/supply.service';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';
import { Delivery } from '../dto/delivery';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-edit-supply',
  templateUrl: './edit-supply.component.html',
  styleUrls: ['./edit-supply.component.css']
})
export class EditSupplyComponent implements OnInit {

  public supply!: Delivery;
  private targetRoute: string = '/supply-info';
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private router: Router, private supplyService: SupplyService, private deliveryService: OrdersService) { }

  UpdateSupply(): void {
    if (this.supply.price == null) {
      alert("Выберете способ доставки");
      return;
    }
    if(this.supply.deliveryMethod == "По почте") this.supply.price = 300;
    if(this.supply.deliveryMethod == "Через курьера") this.supply.price = 500;
    if(this.supply.deliveryMethod == "Забрать в отделении") this.supply.price = 0;
    var date = new Date();
    this.supply.date = date;
    this.supplyService.updateSupply(this.supply).subscribe(x => console.log(x));
    this.router.navigateByUrl(this.targetRoute);
  }

  deleteSupply(id: number): void{
    if (confirm("Вы уверены, что хотите удалить данного заказчика?")) {
      this.deliveryService.checkBySupplyId(id).subscribe(data => {
        if(data != null)
        {
          alert("Удаление невозможно, данная поставка уже используется в заказе");
          return;
        }
        this.supplyService.deleteSupply(id).subscribe(x => console.log(x));
        this.router.navigateByUrl('/supply-list');
      });
    }
  }

  getUser() {
    this.user = this.userService.getDataFromService();
  }

  ngOnInit(): void {
    this.getUser();
    this.supplyService.getSupplyById(this.supplyService.getFromService()).subscribe(data => this.supply = data);
  }

}
