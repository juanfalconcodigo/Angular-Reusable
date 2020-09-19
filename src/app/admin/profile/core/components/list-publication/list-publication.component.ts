import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { PublicationService } from '../../../../../core/services/publication.service';
import { Subscription } from 'rxjs';
import { UserI } from '../../../../../models/user.model';

@Component({
  selector: 'app-list-publication',
  templateUrl: './list-publication.component.html',
  styleUrls: ['./list-publication.component.scss']
})
export class ListPublicationComponent implements OnInit, OnDestroy,OnChanges {
  @Input('username')  username:string;
  listPublicationsSubscription: Subscription = null;
  listPublications: any[] = [];
  /* userSubscription: Subscription = null; */
  userProfile: UserI = null;
  constructor(private _publicationService: PublicationService) { }

  ngOnInit(): void {
    /* this.userSubscription = this.store.select('auth').subscribe(({ user }) => {
      console.log('Info de usuario en la lista');
      this.userProfile=user;
      (this.userProfile!==null)?this.getPublications(this.userProfile?.username):null;
    }); */
    /* this.getPublications(this.username); */
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if(changes.username.previousValue!==changes.username.currentValue){
      console.log(changes.username);
      this.getPublications(changes.username.currentValue);
    }
  }

  getPublications(username) {
    this.listPublicationsSubscription = this._publicationService.queryPublicationUsername(username).subscribe((resp:any) => {
      this.listPublications=resp;
      console.log(this.listPublications)
    });
  }

  ngOnDestroy() {
    this.listPublicationsSubscription.unsubscribe();
    /* this.userSubscription.unsubscribe(); */
  }

}
