import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../dto/product';
import { ProductService } from '../services/product.service';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  public detail!: Product;
  private targetRoute: string = '/detail-info';
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private router: Router, private detailService: ProductService, private deliveryService: OrdersService) { }

  UpdateDetail(): void {
    if (this.detail.name == null || this.detail.name.trim() == '') {
      alert("Введите наименование товара");
      this.detail.name = '';
      return;
    }
    if (this.detail.price == null || this.detail.price == 0) {
      alert("Введите цену");
      this.detail.price = 1;
      return;
    }
    if (this.detail.price >= 2000000000) {
      alert("Слишком большое число для цены");
      this.detail.price = 1;
      return;
    }
    this.detailService.updateDetail(this.detail).subscribe(x => console.log(x));
    this.router.navigateByUrl(this.targetRoute);
  }

  deleteDetail(id: number): void {
    if (confirm("Вы уверены, что хотите удалить данный товар?")) {
      this.deliveryService.checkByDetailId(id).subscribe(data => {
        if (data != null) {
          alert("Удаление невозможно, данный товар уже используется в заказе");
          return;
        }
        this.detailService.deleteDetail(id).subscribe(x => console.log(x));
        this.router.navigateByUrl('/detail-list');
      });
    }
  }

  getUser() {
    this.user = this.userService.getDataFromService();
  }

  ngOnInit(): void {
    this.getUser();
    this.detailService.getDetailById(this.detailService.getFromService()).subscribe(data => this.detail = data);
  }

}
