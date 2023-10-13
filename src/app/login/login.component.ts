import { Component , OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit, OnDestroy {
  constructor(
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
  
  }

  public signIn()
  {

  }

  public signUp()
  {
    this.router.navigate(['/create-account']);
  }
  
  ngOnDestroy(): void {
    
  }

}
