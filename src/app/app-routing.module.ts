import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"movie",loadChildren:()=>import('./pages/movie/movie.module').then(m=>m.MovieModule)},
  {path:"**",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
