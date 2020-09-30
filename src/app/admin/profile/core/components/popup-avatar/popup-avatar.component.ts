import { Component, Inject, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditorFabricComponent } from 'src/app/admin/shared/components/editor-fabric/editor-fabric.component';
import { MeProfileComponent } from '../me-profile/me-profile.component';
import { UserI } from '../../../../../models/user.model';
import { UserService } from '../../../../../core/services/user.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { updateAvatar } from 'src/app/auth/store/auth.actions';


@Component({
  selector: 'app-popup-avatar',
  templateUrl: './popup-avatar.component.html',
  styleUrls: ['./popup-avatar.component.scss']
})
export class PopupAvatarComponent implements OnInit, OnDestroy {
  @ViewChild('canvas', { static: false }) canvas: EditorFabricComponent;
  mutationSubscription: Subscription = null;
  constructor(
    public dialogRef: MatDialogRef<MeProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserI, public _userService: UserService,public store:Store<AppState>) { }


  ngOnInit(): void {
    console.log('data from me-profile', this.data);
  }

  ngOnDestroy(): void {
    this.mutationSubscription && this.mutationSubscription.unsubscribe();
  }

  onNoClick() {
    this.dialogRef.close();
  }

  async rasterize() {
    const file = await this.canvas.rasterize();
    this.mutationSubscription = this._userService.mutationUpdateAvatar(file, this.data.username).subscribe((resp) => {
      console.log(resp.data.updateAvatar);
      let hack=resp.data.updateAvatar.urlAvatar+'?'+new Date().getTime()
      if (resp.data.updateAvatar.status) {
        this.onNoClick();
        this.store.dispatch(updateAvatar({avatar:hack}))
      }
    },
      (err) => {
        console.log(err);
      })
  }

  public getImgPolaroid(event) {
    this.canvas.getImgPolaroid(event);
  }

  public removeSelected() {
    this.canvas.removeSelected();
  }

  public readUrl(event) {
    this.canvas.readUrl(event);
  }
  //upload image
  public addImageOnCanvas(url) {
    this.canvas.addImageOnCanvas(url);
  }


}
