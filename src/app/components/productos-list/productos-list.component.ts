import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from 'src/app/models/models';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.scss']
})
export class ProductosListComponent implements OnInit {

  public productos: Producto[]

  constructor(
    private srv: ProductoService
  ) { }

  async ngOnInit() {

    this.productos = await this.srv.getProductos()

  }


  async delete(producto: Producto) {
    this.srv.deleteProducto(producto.id)
    const index = this.productos.indexOf(producto)
    this.productos.splice(index, 1)

  }

}
