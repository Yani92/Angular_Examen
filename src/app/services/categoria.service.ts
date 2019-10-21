import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private url: string = "http://localhost:9898/api/v1/categorias"

  constructor(
    private http: HttpClient
  ) { }

  public async getCategorias(): Promise<Categoria[]> {

    const peticion = await this.http.get(this.url).toPromise()
    return peticion as Categoria[]
  }

  public async saveCategoria(categoria: Categoria): Promise<Categoria> {
    const result = await this.http.post(this.url, categoria).toPromise()
    return result as Categoria
  }

  public deleteCategoria(id: number): void {
    const result = this.http.delete(`${this.url}/${id}`).toPromise()
    result.then(c => c)
  }

}
