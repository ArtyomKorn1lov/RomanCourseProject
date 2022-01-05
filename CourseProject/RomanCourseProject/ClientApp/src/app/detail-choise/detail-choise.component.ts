import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Detail } from '../dto/detail';
import { DetailService } from '../services/detail.service';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-detail-choise',
  templateUrl: './detail-choise.component.html',
  styleUrls: ['./detail-choise.component.css']
})
export class DetailChoiseComponent implements OnInit {

  search : string | undefined;
  private createDetailRoute: string = '/create-delivery';
  private updateDetailRoute: string = '/edit-delivery';
  public details: Detail[] = [];
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private detailService: DetailService, private router: Router) { }

  routerBack(): void{
    if(sessionStorage.getItem('DeliveryPage') == 'create')
    {
      this.router.navigateByUrl(this.createDetailRoute);
      return;
    }
    this.router.navigateByUrl(this.updateDetailRoute);
  }

  getDetails(): void {
    this.detailService.getDetails().subscribe((data: Detail[]) => this.details = data);  
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
