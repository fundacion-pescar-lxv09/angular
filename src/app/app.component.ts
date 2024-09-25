import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [ 
        RouterOutlet,
        HeaderComponent, 
        FooterComponent,
    ],
    template: `
        <app-header/>
        <router-outlet></router-outlet>
        <app-footer/>
        `,
})

export class AppComponent{
    title = "Fundacion Pescar"
    subtitle = "Capacitacion Angular 2"
}