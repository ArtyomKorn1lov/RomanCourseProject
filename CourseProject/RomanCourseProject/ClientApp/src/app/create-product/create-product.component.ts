import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateProductDto } from '../dto/createProductDto';
import { ProductService } from '../services/product.service';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  name: string | undefined;
  price: number | undefined;
  note: string = "";
  private targetRoute: string = '/detail-list';
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private router: Router, private detailService: ProductService) { }

  CreateDetail(): void {
    if (this.name == null || this.name.trim() == '') {
      alert("Введите наименование товара");
      this.name = '';
      return;
    }
    if (this.price == null || this.price == 0) {
      alert("Введите цену");
      this.price = 1;
      return;
    }
    if (this.price >= 2000000000) {
      alert("Слишком большое число для цены");
      this.price = 1;
      return;
    }
    var detail = new CreateProductDto(this.name, this.price, this.note);
    this.detailService.createDetail(detail).subscribe(x => console.log(x));
    this.router.navigateByUrl(this.targetRoute);
  }

  getUser() {
    this.user = this.userService.getDataFromService();
  }

  ngOnInit(): void {
    this.getUser();
  }

}
