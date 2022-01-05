import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Detail } from '../dto/detail';
import { DetailService } from '../services/detail.service';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.css']
})
export class DetailInfoComponent implements OnInit {

  private targetRoute: string = '/detail-list';
  public detail!: Detail;
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private router: Router, private detailService: DetailService) { }

  getUser() {
    this.user = this.userService.getDataFromService();
  }

  ngOnInit(): void {
    this.getUser();
    this.detailService.getDetailById(this.detailService.getFromService()).subscribe(data => this.detail = data);
  }

}
