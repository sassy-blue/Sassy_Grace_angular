import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './home/components/contact/contact.component';
import { VehicleAssessmentComponent } from './home/components/projects/vehicle-assessment/vehicle-assessment.component';
import { QuotationComponent } from './home/components/projects/quotation/quotation.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contacts', component: ContactComponent },
    { path: 'assesssment', component: VehicleAssessmentComponent },
    { path: 'quotation', component: QuotationComponent },

];
