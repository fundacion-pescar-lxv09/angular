import { Routes } from '@angular/router';
import { CandidatesComponent } from './routes/candidates/candidates.component';
import { AboutComponent } from './routes/about/about.component';
import { ConfigComponent } from './routes/config/config.component';
import { SelectComponent } from './routes/select/select.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

export const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch:'full' },
    {path: 'home', component: CandidatesComponent },
    {path: 'about', component: AboutComponent },
    {path: 'config', component: ConfigComponent },
    {path: 'selection', component: SelectComponent },
    {path: 'user/:id', component: UserDetailsComponent },
    {path: '**', redirectTo: 'home'},
];
