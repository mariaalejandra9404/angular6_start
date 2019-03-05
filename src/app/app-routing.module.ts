import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';




const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: "about", component : AboutComponent},
  { path: "home", component : HomeComponent},
  { path: "gallery", component : GalleryComponent},

];

@NgModule({
  imports: 
    [
      RouterModule.forRoot(routes)
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
