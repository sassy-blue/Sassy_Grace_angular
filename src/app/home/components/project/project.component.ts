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
      title: 'Project 1',
      description: 'Description of project 1.',
      image: '/inspect.jpeg'
    },
    {
      title: 'Project 2',
      description: 'Description of project 2.',
      image: 'quot.png'
    }
  
  ];
}
