import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any = []
  public eventosFiltro: any = []

  private _filtroEventos:string = ""

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEventos()
  }

  public getEventos(): void{
    this.http.get('https://localhost:5001/Evento').subscribe({
      next:(eventos) => {
        this.eventos = eventos
        //inicializando nosso array eventosfiltro com todos os eventos já cadastrados no banco
        this.eventosFiltro = eventos
      }
    })
  }

  public get filtroEventos(): string{
    return this._filtroEventos
  }

  public set filtroEventos(valor:string){
    this._filtroEventos = valor;
    //nosso array eventosfiltros ou recebe alguns eventos filtrados ou a propria lista de eventos
    this.eventosFiltro = this.filtroEventos ? this.filtraLista(this.filtroEventos) : this.eventos // exisste alguma coisa no filtroEventos ? se existe passo
    //como parâmetro para o método filtraLista caso não tenha nada apenas retornamos os eventos.

  }

  filtraLista(valor:string):any{
    valor = valor.toLowerCase()
    return this.eventos.filter((evento:any) => evento.nomeEvento.toLowerCase().indexOf(valor) !== -1)
    //caso queira adiciona outro filtro basta colocar o connectivo 'ou' é mudar o nomeEvento para outro valor.
  }

}
