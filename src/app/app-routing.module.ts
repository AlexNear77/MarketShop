import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',redirectTo: 'inicio',pathMatch: 'full'},
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'secciones',
    loadChildren: () => import('./pages/secciones/secciones.module').then( m => m.SeccionesPageModule)
  },
  {
    path: 'secciones-b',
    loadChildren: () => import('./pages/secciones-b/secciones-b.module').then( m => m.SeccionesBPageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./pages/productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'carro',
    loadChildren: () => import('./pages/carro/carro.module').then( m => m.CarroPageModule)
  },
  {
    path: 'detergentes',
    loadChildren: () => import('./pages/detergentes/detergentes.module').then( m => m.DetergentesPageModule)
  },
  {
    path: 'todolimp',
    loadChildren: () => import('./pages/todolimp/todolimp.module').then( m => m.TodolimpPageModule)
  },
  {
    path: 'electrodomesticos',
    loadChildren: () => import('./pages/electrodomesticos/electrodomesticos.module').then( m => m.ElectrodomesticosPageModule)
  },
  {
    path: 'vinos',
    loadChildren: () => import('./pages/vinos/vinos.module').then( m => m.VinosPageModule)
  },
  {
    path: 'politicas',
    loadChildren: () => import('./pages/politicas/politicas.module').then( m => m.PoliticasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
