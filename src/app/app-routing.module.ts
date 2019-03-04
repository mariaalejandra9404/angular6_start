import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: "about", component : AboutComponent},
  { path: "home", component : HomeComponent},
  { path: "services", component : ServicesComponent},
  { path: "gallery", component : GalleryComponent},
  { path: "testimonials", component : TestimonialsComponent},
  { path: "contact", component : ContactComponent},
];

@NgModule({
  imports: 
    [
      RouterModule.forRoot(routes)
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
