import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './home/components/contact/contact.component';
import { ProjectComponent } from './home/components/project/project.component';
import { NewsListComponent } from './home/components/news-list/news-list.component';
import { StockComponent } from './home/components/stock/stock.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contacts', component: ContactComponent },
    { path: 'project', component: ProjectComponent },
    { path: 'news', component: NewsListComponent},
    { path: 'stock', component: StockComponent}


];
