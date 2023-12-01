import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'About Us';
  aboutText = 'This site is all about music. Dont know what to listen to? Cant find your favourite song? This is the place to be!';
  navigateText = 'Navigate to the right to register or login now.';
}
