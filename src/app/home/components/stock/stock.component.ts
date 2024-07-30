import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { StockService } from '../../../services/stock.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatCardModule],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.scss'
})
export class StockComponent implements OnInit{
  newsData: any[] = [];

  constructor(private newsService: StockService) {}

  ngOnInit() {
    this.newsService.getNewsData().subscribe(data => {
      this.newsData = data.feed;
    });
  }

}
