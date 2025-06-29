import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Area } from '../../models/area.model';

@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.css']
})
export class AreaListComponent implements OnInit {
  areas: Area[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Area[]>('http://localhost:3000/areas')
      .subscribe(data => this.areas = data);
  }
}
