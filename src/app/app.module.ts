import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaListComponent } from './components/area-list/area-list.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaListComponent,
    ReservationFormComponent,
    ThankYouComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // ← Here
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
