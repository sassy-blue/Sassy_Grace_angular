import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contacts = [
    {
      link: 'https://x.com/G9teru',
      image: '/twitter.png',
      name: 'Twitter',
      message: 'Follow me on X'

    },
    {
      link: 'https://www.linkedin.com/in/manases-mutembei-49b011201',
      image: '/link.png',
      name: 'LinkedIn',
      message: 'Follow me on LinkedIn'
    },
    {
      link: 'https://github.com/manasesmutembei11',
      image: '/git.jpeg',
      name: 'Github',
      message: 'Follow me on Github'
    },
    {
      link: 'https://wa.me/+254768802661',
      image: '/whatsap.png',
      name: 'Whatsapp',
      message: 'Lets chat on whatsapp'
    },
    {
      link: 'mailto:manasesmutembei11@gmail.com',
      image: '/gmail.png',
      name: 'Mail',
      message: 'Send an email'
    }
  
  ];

}
