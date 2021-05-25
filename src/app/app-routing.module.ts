import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'splash-page',
    pathMatch: 'full'
  },
  {
    path: 'splash-page',
    loadChildren: () => import('./splash-page/splash-page.module').then( m => m.SplashPagePageModule)
  },
  {path: '**', redirectTo: 'splash-page'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true  })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
