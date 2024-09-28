import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.scss'],
})
export class QRComponent  implements OnInit {
  loginError: string = '';
  constructor(private router: Router) { }

  ngOnInit() {''}

  volver() {
    this.router.navigate(['/pantalla-principal']);
  }
}
