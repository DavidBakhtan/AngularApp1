import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../../services/reservation.service';
import { Area } from '../../models/area.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  reservationForm!: FormGroup;
  areas: Area[] = [];
  timeSlots: string[] = [ '9:00 AM - 12:00 PM', '12:00 PM - 3:00 PM', '3:00 PM - 6:00 PM' ];

  constructor(
    private fb: FormBuilder,
    private reservationService: ReservationService,
    private http: HttpClient,
    private router: Router
  ) {}
  

  ngOnInit(): void {
    this.loadAreas();
    this.reservationForm = this.fb.group({
      areaId: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  loadAreas(): void {
    this.http.get<Area[]>('http://localhost:3000/areas').subscribe(data => {
      this.areas = data;
      console.log('✅ areas loaded', data);
    });    
  }
  

  submit(): void {
    if (this.reservationForm.valid) {
      this.reservationService.addReservation(this.reservationForm.value).subscribe(() => {
        this.reservationForm.reset();
        this.router.navigate(['/thank-you']);
      });
    }
  }

}
