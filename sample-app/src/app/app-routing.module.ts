import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { showComponent } from './show/show.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';



const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: 'new',  component: NewComponent}]},

  { path: 'pets/show/:id',  component: showComponent },
  { path: 'pets/edit/:id', component: EditComponent },
];

  
  
  
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
