import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogAuthComponent } from '../dialog-auth/dialog-auth.component';
import { User } from '../dto/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-headbar',
  templateUrl: './headbar.component.html',
  styleUrls: ['./headbar.component.css']
})
export class HeadbarComponent implements OnInit {

  public user: User = new User(0, '', '', '', '');

  constructor(public dialog: MatDialog, private userService: UserService) { }

  openAuthDialog() {
    const dialogRef = this.dialog.open(DialogAuthComponent);
  }

  getUser() {
    this.user = this.userService.getDataFromService();
  }

  ngOnInit(): void {
    this.getUser();
  }

}
