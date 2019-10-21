import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductosListComponent } from './components/productos-list/productos-list.component';
import { CategoriasListComponent } from './components/categorias-list/categorias-list.component';
import { ProductosFormComponent } from './components/productos-form/productos-form.component';


const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'categorias', component: CategoriasListComponent },
  { path: 'productos', component: ProductosListComponent },
  { path: 'productos-form', component: ProductosFormComponent },
  { path: 'productos-form/:id', component: ProductosFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
