import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../services/news.service';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.scss'
})
export class NewsListComponent implements OnInit{
  articles: any[] = [];
  query: string = '';

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.fetchNews();
    
  }

  fetchNews(): void {
    this.newsService.getNews().subscribe(response => {
      this.articles = response.news;
    });
  }
  searchNews(): void {
    debugger
    this.newsService.getNews().subscribe((response: any) => {
      this.articles = response.news;
    });
  }

}
