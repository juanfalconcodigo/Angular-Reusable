import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  error:boolean=false;
  forma:FormGroup=null;
  constructor(private router:Router,public _authService:AuthService) {
    this.forma=new FormGroup({
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    });
   }

  ngOnInit(): void {
   
  }

  onSubmit(){
    if(this.forma.invalid){
      console.log('Form invalid');
      return null;
    }
    console.log(this.forma.value);
    this._authService.mutationLogin(this.forma.value).subscribe((resp:any)=>{
       console.log(resp.data?.login);
       if(resp.data?.login?.status){
        this.error=false;
        this.router.navigate(['admin']);
       }
    },
    (err)=>{
      console.log(err);
      this.error=true;
    })
    

  }

}
