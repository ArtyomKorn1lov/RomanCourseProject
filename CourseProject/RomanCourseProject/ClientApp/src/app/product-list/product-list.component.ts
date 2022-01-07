import { Component, OnInit } from '@angular/core';
import { Product } from '../dto/product';
import { ProductService } from '../services/product.service';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  search : string | undefined;
  public details: Product[] = [];
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private detailService: ProductService) { }

  getDetails(): void {
    this.detailService.getDetails().subscribe((data: Product[]) => this.details = data);  
  }

  pushDataInService(id: number): void {
    this.detailService.pushInService(id);
  }

  reloadList(): void {
    this.search = '';
    this.details = [];
    this.getDetails(); 
  }

  getDetailsByName(): void {
    if(this.search != undefined)
    {
      this.details = [];
      this.detailService.getByName(this.search).subscribe(data => this.details = data);
    }
  }

  getUser() {
    this.user = this.userService.getDataFromService();
  }

  ngOnInit(): void {
    this.getUser();
    this.getDetails();
  }
}
