import { Component, OnInit } from '@angular/core';
import { Detail } from '../dto/detail';
import { DetailService } from '../services/detail.service';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.css']
})
export class DetailListComponent implements OnInit {

  search : string | undefined;
  public details: Detail[] = [];
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private detailService: DetailService) { }

  getDetails(): void {
    this.detailService.getDetails().subscribe((data: Detail[]) => this.details = data);  
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
