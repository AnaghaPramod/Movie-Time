import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { HomeComponent } from './home/home.component';
import { WatclistComponent } from './watchlist/watchlist.component';
import { MoviesModule } from './movies.module';
import { YourShowsComponent } from './your-shows/your-shows.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: 'movies', component: AllMoviesComponent },
  { path: 'your-shows', component: YourShowsComponent },
  {path: 'home', component:HomeComponent},
  {path:'', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'watchlist', component:WatclistComponent},
  {path: 'details', component:DetailsComponent }


];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
