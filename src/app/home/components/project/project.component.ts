import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  projects = [
    {
      title: 'Vehicle assessment and inspection',
      description: 'It is a project built to help assessor consolidate their assessment data and generate a comprehensive report for submission to insurance companies.',
      image: '/inspect.jpeg'
    },
    {
      title: 'Insurance quotation system',
      description: 'Its a system built to help insurance companies automate issuing of quotations to their clients. ',
      image: 'quot.png'
    },
    {
      title: 'Portfolio Template',
      description: 'Its a personal portfolio website that is built with all needed features for easy customization to specific requirements. ',
      image: 'portfolio.png'
    }
  
  ];
}
