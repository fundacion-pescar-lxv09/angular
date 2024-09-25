import { Component } from "@angular/core";

@Component({
    selector: 'app-footer',
    standalone: true,
    templateUrl: './footer.template.html',
    styleUrls: ['./footer.styles.css'],
})

export class FooterComponent {
    year = new Date().getFullYear()
    author = "cristiandracedo@hotmail.com"
}