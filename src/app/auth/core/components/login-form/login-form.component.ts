import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  forma:FormGroup=null;
  constructor(private router:Router) {
    this.forma=new FormGroup({
      username:new FormControl('',[Validators.required]),
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
    this.router.navigate(['admin']);
  }

}
