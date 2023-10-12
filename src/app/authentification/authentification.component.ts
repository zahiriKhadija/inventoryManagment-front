import { Component , OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent  implements OnInit, OnDestroy {
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
    this.router.navigate(['/signup']);
  }
  
  ngOnDestroy(): void {
    
  }

}
