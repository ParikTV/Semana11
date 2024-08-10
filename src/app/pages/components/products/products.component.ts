import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Productos } from '../../../models/Producto';

import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  lista:Productos[]=[];

  constructor(private productosSrv:ProductsService){}


  ngOnInit(){

    this.productosSrv.getProducts().subscribe((datos)=>{

      this.lista=datos;

      console.log(...datos);
    })
  }

  verDetalle(){
    alert('aqui en el detalle del producto...');
  }
}
