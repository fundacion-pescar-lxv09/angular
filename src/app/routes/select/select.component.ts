import { Component } from '@angular/core';
import { SelectService } from '../../providers/select.service';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [],
  providers: [SelectService],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
  constructor(private selection:SelectService){}
  selected:any = []
  ngOnInit(){
    this.selected = this.selection.getUsers()
  }
}
