import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fem-stats-preview-card-component';
  protected readonly ikBaseURL = `https://ik.imagekit.io/jgerard/${this.title}`;
}
