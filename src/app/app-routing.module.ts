import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesModule } from './movies/movies.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'/movies',pathMatch:'full'},
  {path: 'movies', loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule) },
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MoviesModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
