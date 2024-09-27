import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { NavComponent } from "./nav/nav.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [ 
        RouterOutlet,
        HeaderComponent, 
        NavComponent,
        FooterComponent,
    ],
    template: `
        <app-nav [appname]="title" (useLink)="handleLink($event)"/>
        <app-header [title]="title" [subtitle]="subtitle"/>
        <main class="container">
            <p>{{title}} @if (current){ > {{current}} }</p>
            <router-outlet></router-outlet>
        </main>
        <app-footer/>`
})
export class AppComponent{
    title = "Fundacion Pescar"
    subtitle = "Capacitacion Angular 2"
    current = "pagina principal"
    handleLink(link:string){ this.current = link }
}