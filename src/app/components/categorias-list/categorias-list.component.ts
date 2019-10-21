import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../models/models';

@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.scss']
})
export class CategoriasListComponent implements OnInit {

  //ESTA VARIABLE TRABAJA CON LA TABLA
  public categorias: Categoria[]

  //ESTA VARIABLE TRABAJA CON EL FORMULARIO
  public categoria: Categoria = {}

  constructor(
    private srv: CategoriaService
  ) { }

  async ngOnInit() {
    this.categorias = await this.srv.getCategorias()
  }


  async guardar() {
    await this.srv.saveCategoria(this.categoria);
    this.categorias = await this.srv.getCategorias()
    this.categoria = {}
  }


  editarTable(categoria: Categoria) {
    this.categoria = categoria
  }

  delete(categoria: Categoria) {
    this.srv.deleteCategoria(categoria.id)
    const index = this.categorias.indexOf(categoria)

    this.categorias.splice(index, 1)

  }



}
