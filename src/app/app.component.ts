import { Component } from '@angular/core';
import { ShortenURL } from '../services/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShortenURL]
})
export class AppComponent {
  userLink = '';
  newURL = '';
  display = ''
  title = 'linkshortener';

  constructor(private shortener: ShortenURL) {}

  onSubmit() {
    let me = this;
    this.display = 'Fething shorten URL....';
    this.shortener.getURL(this.userLink).subscribe((res) => {
      me.display = 'Your shortened URL is: ';
      me.newURL = res.link;
    });
}
}
