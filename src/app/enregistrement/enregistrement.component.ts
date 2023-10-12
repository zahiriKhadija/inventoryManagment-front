import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enregistrement',
  templateUrl: './enregistrement.component.html',
  styleUrls: ['./enregistrement.component.scss']
})
export class EnregistremenComponent implements OnInit, OnDestroy {

  constructor(
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    
  }

public cancel(){
  this.router.navigate(['/authentification']);
}

ngOnDestroy(): void {
  
}

}
