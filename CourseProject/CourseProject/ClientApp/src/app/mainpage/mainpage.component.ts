import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogAuthComponent } from '../dialog-auth/dialog-auth.component';
import { DialogRegComponent } from '../dialog-reg/dialog-reg.component';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  public user: User = new User(0, '', '', '', '');

  constructor(public dialog: MatDialog, private userService: UserService) { }

  openRegDialog() {
    const dialogRef = this.dialog.open(DialogRegComponent);
  }

  openAuthDialog() {
    const dialogRef = this.dialog.open(DialogAuthComponent);
  }

  getUser(): void {
    this.user = this.userService.getDataFromService()
  }

  ngOnInit(): void {
    this.getUser();
  }
}
