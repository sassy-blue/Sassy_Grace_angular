import { Component } from '@angular/core';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectComponent } from "./components/project/project.component";
import { NewsListComponent } from "./components/news-list/news-list.component";
import { StockComponent } from "./components/stock/stock.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [ContactComponent, ProjectComponent, NewsListComponent, StockComponent]
})
export class HomeComponent {

}
