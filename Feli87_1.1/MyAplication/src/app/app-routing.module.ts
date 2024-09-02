import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ln',
    loadChildren: () => import('./ln/ln.module').then( m => m.LNPageModule)
  },
  {
    path: 're',
    loadChildren: () => import('./re/re.module').then( m => m.RePageModule)
  },
  {
    path: 'le',
    loadChildren: () => import('./le/le.module').then( m => m.LePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
