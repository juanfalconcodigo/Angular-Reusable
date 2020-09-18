import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { AuthService } from 'src/app/core/services/auth.service';
import { MeProfileComponent } from '../me-profile/me-profile.component';

@Component({
  selector: 'app-popup-option',
  templateUrl: './popup-option.component.html',
  styleUrls: ['./popup-option.component.scss']
})
export class PopupOptionComponent implements OnInit {

  constructor(
    private _authService:AuthService,
    public dialogRef: MatDialogRef<MeProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  logout(){
    this.dialogRef.close();
    this._authService.logout();
  }

}
