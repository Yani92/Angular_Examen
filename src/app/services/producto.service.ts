import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url: string = "http://localhost:9898/api/v1/productos"

  constructor(
    private http: HttpClient
  ) { }


  async getProductos(): Promise<Producto[]> {
    const result = await this.http.get(this.url).toPromise()
    return result as Producto[]
  }

  async getProductoBy(id: number): Promise<Producto> {
    const result = await this.http.get(`${this.url}/${id}`).toPromise()
    return result as Producto
  }


  async saveProducto(producto: Producto) {
    const result = await this.http.post(this.url, producto).toPromise()
    return result as Producto
  }

  deleteProducto(id: number): void {
    const result = this.http.delete(`${this.url}/${id}`).toPromise()
    result.then(c => c)
  }


}
