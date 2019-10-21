import { Component, OnInit } from '@angular/core';
import { Producto, Categoria } from 'src/app/models/models';
import { ProductoService } from '../../services/producto.service';
import { CategoriaService } from '../../services/categoria.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos-form',
  templateUrl: './productos-form.component.html',
  styleUrls: ['./productos-form.component.scss']
})
export class ProductosFormComponent implements OnInit {

  public producto: Producto = {
    categoria: {}
  }

  public categorias: Categoria[]

  public id: number

  constructor(
    private srv: ProductoService,
    private categoriaSrv: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {

    this.categorias = await this.categoriaSrv.getCategorias()
    this.id = this.route.snapshot.params['id']

    if (this.id) {
      this.producto = await this.srv.getProductoBy(this.id)
      this.producto.categoria = {}
    }
  }

  async guardar() {
    console.log(this.producto);
    await this.srv.saveProducto(this.producto)
    this.router.navigate(['/productos'])
  }

}
