import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Detail } from '../dto/detail';
import { DetailService } from '../services/detail.service';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';
import { DeliveryService } from '../services/delivery.service';

@Component({
  selector: 'app-edit-detail',
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.css']
})
export class EditDetailComponent implements OnInit {

  public detail!: Detail;
  private targetRoute: string = '/detail-info';
  public user: User = new User(0, '', '', '', '');

  constructor(private userService: UserService, private router: Router, private detailService: DetailService, private deliveryService: DeliveryService) { }

  UpdateDetail(): void {
    if (this.detail.name == null || this.detail.name.trim() == '') {
      alert("Введите наименование товара");
      this.detail.name = '';
      return;
    }
    if (this.detail.articleNumber == null) {
      alert("Введите артикль");
      this.detail.articleNumber = 0;
      return;
    }
    if (this.detail.price == null || this.detail.price == 0) {
      alert("Введите цену");
      this.detail.price = 1;
      return;
    }
    if (this.detail.articleNumber >= 2000000000) {
      alert("Слишком большое число для артикля");
      this.detail.articleNumber = 0;
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
    if (confirm("Вы уверены, что хотите удалить данную деталь?")) {
      this.deliveryService.checkByDetailId(id).subscribe(data => {
        if (data != null) {
          alert("Удаление невозможно, данная деталь уже используется в поставке");
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
