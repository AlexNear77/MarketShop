import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  nombre: string; 
  code: string;
  email: string;
  adrress: string;
  zipcode: string;
  colonia: string;

  constructor() { }

  ngOnInit() {
  }

}
