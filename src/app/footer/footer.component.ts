import { Component } from '@angular/core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin,faGithub,faTwitter,faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  filmIcon = faFilm;
  linkedinIcon = faLinkedin;
  githubIcon = faGithub;
  twitterIcon = faTwitter;
  facebookIcon = faFacebook;
}
