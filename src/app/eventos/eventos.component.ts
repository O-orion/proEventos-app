import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any = [
    {
      tema: 'Encontro Jovem',
      local: 'Constantino Nery',
    },
    {
      tema: 'Mentoria Yachurch',
      local: 'Zoom - EAD'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
