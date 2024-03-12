import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AboutComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
  name = 'wrapper'
  number = 6
  isShow = false
  array = [1,2,3,4,5]
  users = [
    {id: 1, name: 'Alex', age: 18},
    {id: 2, name: 'Steven', age: 19},
    {id: 3, name: 'Dima', age: 17},
    {id: 4, name: 'Neena', age: 15},
  ]
  testimonials = [
    {id: 1, author: 'Michael Wong', spec: 'UI/UX Design Student', rating: '4.9', text: 'Empower yourself with the knowledge and skills gained through online education! Empower yourself with the knowledge and skills gained through online education!'},
    {id: 2, author: 'Avril Song', spec: 'Web Development Student', rating: '4.8', text: 'Empower yourself with the knowledge and skills gained through online education! Empower yourself with the knowledge and skills gained through online education!'},
    {id: 3, author: 'Jeane Wood', spec: 'Data Science Student', rating: '5.0', text: 'Empower yourself with the knowledge and skills gained through online education! Empower yourself with the knowledge and skills gained through online education!'}
]
  authors = [
    {id: 1, author: 'Tom Kennedy', imageSrc: './assets/Photo1', date: 'Feb 23, 2024', title: 'Lorem ipsum dolor sit amet consectetur.'},
    {id: 2, author: 'Tom Kennedy', imageSrc: './assets/Photo2', date: 'Feb 10, 2024', title: 'Lorem ipsum dolor sit amet consectetur.'},
    {id: 3, author: 'Tom Kennedy', imageSrc: './assets/Photo3', date: 'Feb 02, 2024', title: 'Lorem ipsum dolor sit amet consectetur.'}
]


}
