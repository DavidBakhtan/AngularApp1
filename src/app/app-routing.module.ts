import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaListComponent } from './components/area-list/area-list.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  { path: 'areas', component: AreaListComponent },
  { path: 'reserve', component: ReservationFormComponent },
  { path: 'thank-you', component: ThankYouComponent },
  { path: '', redirectTo: '/areas', pathMatch: 'full' }, // Default home redirect
  { path: '**', component: NotFoundComponent } // 404 for any unknown route
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
