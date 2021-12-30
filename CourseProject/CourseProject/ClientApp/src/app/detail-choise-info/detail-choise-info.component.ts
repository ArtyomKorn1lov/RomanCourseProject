import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Detail } from '../dto/detail';
import { DeliveryService } from '../services/delivery.service';
import { DetailService } from '../services/detail.service';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-detail-choise-info',
  templateUrl: './detail-choise-info.component.html',
  styleUrls: ['./detail-choise-info.component.css']
})
export class DetailChoiseInfoComponent implements OnInit {

  private createDetailRoute: string = '/create-delivery';
  private updateDetailRoute: string = '/edit-delivery';
  public detail!: Detail;
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private router: Router, private detailService: DetailService, private deliveryService: DeliveryService) { }

  choiseDetail(id: number): void {
    this.deliveryService.pushChoiseDetailId(id);
    if(sessionStorage.getItem('DeliveryPage') == 'create')
    {
      this.router.navigateByUrl(this.createDetailRoute);
      return;
    }
    this.router.navigateByUrl(this.updateDetailRoute);
  }

  getUser() {
    this.user = this.userService.getDataFromService();
  }

  ngOnInit(): void {
    this.getUser();
    this.detailService.getDetailById(this.detailService.getFromService()).subscribe(data => this.detail = data);
  }

}
