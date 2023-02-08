import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies.component';
import { YourShowsComponent } from './your-shows/your-shows.component';

const routes: Routes = [
  { path: 'movies', component: AllMoviesComponent },
  { path: 'your-shows', component: YourShowsComponent },
  {path: 'home', component:HomeComponent},
  {path:'', component:LoginComponent},
  {path: 'register', component:RegisterComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
