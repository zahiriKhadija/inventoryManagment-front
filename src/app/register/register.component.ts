import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  constructor(
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    
  }

public cancel(){
  this.router.navigate(['/login']);
}

ngOnDestroy(): void {
  
}

}
