import { Component } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';
import { CandidateService } from '../../providers/candidates.service';
import { UserCardComponent } from '../../components/user-card/user-card.component';

@Component({
  selector: 'app-candidates',
  standalone: true,
  imports: [
    UserCardComponent,
    MatProgressBar,
  ],
  providers: [CandidateService],
  templateUrl: './candidates.component.html',
  styleUrl: './candidates.component.css'
})
export class CandidatesComponent {
  candidates:any = []
  constructor(private app:CandidateService){}
  ngOnInit(){
    this.app.getCandidates().subscribe({
      next: (res:any) => { this.candidates = res.results },
      error: (err) => { this.candidates = err}
    })
  }
}