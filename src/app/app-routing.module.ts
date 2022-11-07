import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BirthdayComponent } from './birthday/birthday.component';
import { ConcertComponent } from './concert/concert.component';
import { HomeComponent } from './home/home.component';
import { WeddingComponent } from './wedding/wedding.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'birthday',component:BirthdayComponent},
  {path:'wedding',component:WeddingComponent},
  {path:'concert',component:ConcertComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
