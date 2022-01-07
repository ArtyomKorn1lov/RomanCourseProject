import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../dto/product';
import { ProductService } from '../services/product.service';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-product-choise',
  templateUrl: './product-choise.component.html',
  styleUrls: ['./product-choise.component.css']
})
export class ProductChoiseComponent implements OnInit {

  search : string | undefined;
  private createDetailRoute: string = '/create-delivery';
  private updateDetailRoute: string = '/edit-delivery';
  public details: Product[] = [];
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private detailService: ProductService, private router: Router) { }

  routerBack(): void{
    if(sessionStorage.getItem('DeliveryPage') == 'create')
    {
      this.router.navigateByUrl(this.createDetailRoute);
      return;
    }
    this.router.navigateByUrl(this.updateDetailRoute);
  }

  getDetails(): void {
    this.detailService.getDetails().subscribe((data: Product[]) => this.details = data);  
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

  pushDataInService(id: number): void {
    this.detailService.pushInService(id);
  }

  getUser() {
    this.user = this.userService.getDataFromService();
  }

  ngOnInit(): void {
    this.getUser();
    this.getDetails();
  }
}
