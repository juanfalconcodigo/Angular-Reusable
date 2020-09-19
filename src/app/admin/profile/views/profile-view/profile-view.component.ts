import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { Subscription } from 'rxjs';
import { UserI } from '../../../../models/user.model';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit,OnDestroy {
   
  userSubscription:Subscription=null;
  routeSubscription:Subscription=null;
  error:boolean=null;
  user:UserI=null;
  constructor(private route:ActivatedRoute,public _userService:UserService) { }
  
  ngOnInit(): void {
    this.routeSubscription=this.route.params.subscribe((data:{username:string})=>{
      this.getUser(data.username);
    });
  }

  getUser(username){
    this.userSubscription=this._userService.queryGetUser(username).subscribe((resp)=>{
      console.log(resp);
      this.user=resp;
      this.error=false;
    },
    (err)=>{
      console.log(err);
      this.user=null;
      this.error=true;
    });
  }

  ngOnDestroy(){
    this.routeSubscription.unsubscribe();
    this.userSubscription.unsubscribe()
  }

}
