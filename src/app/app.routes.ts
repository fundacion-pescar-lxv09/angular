import { Routes } from '@angular/router';
import { HomeComponent } from '../routes/home/home.component';
import { LoginComponent } from '../routes/login/login.component';
import { SigninComponent } from '../routes/signin/signin.component';
import { ChartComponent } from '../routes/chart/chart.component';
import { ProductsComponent } from '../routes/products/products.component';
import { ContactComponent } from '../routes/contact/contact.component';
import { NotFoundComponent } from '../routes/not-found/not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: "full" },
    { path: 'home',  component:HomeComponent },
    { path: 'login', component:LoginComponent },
    { path: 'signin', component:SigninComponent },
    { path: 'chart', component:ChartComponent },
    { path: 'products', component:ProductsComponent },
    { path: 'contact', component:ContactComponent },
    { path: '**', component:NotFoundComponent }
];
