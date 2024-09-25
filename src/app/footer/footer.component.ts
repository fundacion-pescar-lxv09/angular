import { Component } from "@angular/core";
import { SocialComponent } from "../social/social.component";

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [ SocialComponent ],
    templateUrl: './footer.template.html',
    styleUrls: ['./footer.styles.css'],
})

export class FooterComponent {
    year = new Date().getFullYear()
    author = "cristiandracedo@hotmail.com"
}