import { Component } from '@angular/core';
import { ContatosDataBaseService } from './servicos/contatos-data-base.service';
import { ContatoModel } from './modelos/contatos-model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Projeto de Contatos com Angular 6';

  contatoclicado: ContatoModel;
  
  constructor(private dataBaseService: ContatosDataBaseService){}

  enviarDetalhe(id): void {
    this.contatoclicado = this.dataBaseService.getContato(id);
  }
}
