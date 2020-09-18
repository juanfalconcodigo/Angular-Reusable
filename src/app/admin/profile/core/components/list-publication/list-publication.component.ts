import { Component, OnDestroy, OnInit } from '@angular/core';
import { PublicationService } from '../../../../../core/services/publication.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { UserI } from '../../../../../models/user.model';

@Component({
  selector: 'app-list-publication',
  templateUrl: './list-publication.component.html',
  styleUrls: ['./list-publication.component.scss']
})
export class ListPublicationComponent implements OnInit, OnDestroy {
  listPublicationsSubscription: Subscription = null;
  listPublications: any[] = [];
  userSubscription: Subscription = null;
  userProfile: UserI = null;
  constructor(private _publicationService: PublicationService, public store: Store<AppState>) { }

  ngOnInit(): void {
    this.userSubscription = this.store.select('auth').subscribe(({ user }) => {
      console.log('Info de usuario en la lista');
      this.userProfile=user;
      (this.userProfile!==null)?this.getPublications(this.userProfile?.username):null;
    });
  }

  getPublications(username) {
    this.listPublicationsSubscription = this._publicationService.queryPublicationUsername(username).subscribe((resp:any) => {
      this.listPublications=resp;
      console.log(this.listPublications)
    });
  }

  ngOnDestroy() {
    this.listPublicationsSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

}
