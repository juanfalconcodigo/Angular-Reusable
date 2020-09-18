import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PublicationService } from 'src/app/core/services/publication.service';
import { ToolbarComponent } from '../toolbar/toolbar.component';
interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
@Component({
  selector: 'app-popup-upload',
  templateUrl: './popup-upload.component.html',
  styleUrls: ['./popup-upload.component.scss']
})
export class PopupUploadComponent implements OnInit {
  photoSelected: string | ArrayBuffer;
  file: File = null;
  loading: boolean = false;

  constructor(public dialogRef: MatDialogRef<ToolbarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {username:string}, public _publicationService: PublicationService) { }

  ngOnInit(): void {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onPhotoSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  onPublication() {
    const formatValid = this.onValidationImage();
    if (!this.file || !formatValid) {
      console.log('Invalid image');
      return;
    }
    console.log(this.file);
    this.loading = true;
    this._publicationService.mutationUploadPublication(this.file).subscribe((resp: { status: boolean, urlPublish: string }) => {
      console.log(resp);
      this.loading = false;
      if (resp.status) {
        this.onNoClick();
      }
    }, (err) => {
      console.log(err);
      this.loading = false;
    })

  }


  onValidationImage(): boolean {
    const validateFormat = [
      'image/jpeg',
      'image/png',
      'image/jpg'
    ]
    return this.file ? (validateFormat.includes(this.file.type)) : false;
  }

}
