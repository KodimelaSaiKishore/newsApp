import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  techNews: any = [];
  newsHeading: any = [];
  headingLength = 60;

  ngOnInit(): void {
    this.apiService.headLineNews().subscribe((res) => {
      this.techNews = res;
    });
  }
}
