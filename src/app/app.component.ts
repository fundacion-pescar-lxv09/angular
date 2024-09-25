import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [ HeaderComponent, FooterComponent ],
    template: `<app-header/><app-footer/>`,
})

export class AppComponent{
    title = "Fundacion Pescar"
    subtitle = "Capacitacion Angular 2"
}