import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteB } from './components/componente-b/componente-b';

@Component({
  selector: 'app-root',
  imports: [ComponenteB],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Blog');
}
