import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { YourShowsComponent } from './your-shows/your-shows.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { WatclistComponent  } from './watchlist/watchlist.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    MoviesComponent,
    AllMoviesComponent,
    YourShowsComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    WatclistComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    HttpClientModule
  ]
})
export class MoviesModule { }
