import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogRegComponent } from '../dialog-reg/dialog-reg.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dialog-auth',
  templateUrl: './dialog-auth.component.html',
  styleUrls: ['./dialog-auth.component.css']
})
export class DialogAuthComponent implements OnInit {

  login: string | undefined;
  password: string | undefined;

  constructor(public dialogRef: MatDialogRef<DialogAuthComponent>, private userService: UserService, public dialog: MatDialog) { }

  authoriseUser(): void {
    if (this.login == undefined || this.login.trim() == '') {
      alert("Введите логин");
      this.login = '';
      return;
    }
    if (this.password == undefined || this.password.trim() == '') {
      alert("Введите пароль");
      this.password = '';
      return;
    }
    this.userService.authorise(this.login, this.password).subscribe(data => {
      if(data == null)
      {
        alert("Неверный логин или пароль");
        this.login = '';
        this.password = '';
        return;
      }
      this.dialogRef.close();
      this.userService.pushRegDataInService(data);
      location.reload();
    });
  }

  openRegDialog() {
    this.dialogRef.close();
    const newDialog = this.dialog.open(DialogRegComponent);
  }

  ngOnInit(): void {
  }

}
