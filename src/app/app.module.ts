import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { HttpClientModule} from '@angular/common/http';
import { MovieModule } from './pages/movie/movie.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MovieModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
