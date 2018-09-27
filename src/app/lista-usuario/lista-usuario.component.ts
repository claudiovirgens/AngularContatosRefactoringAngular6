import { Component, OnInit, Output } from '@angular/core';
import { ContatoModel } from '../modelos/contatos-model';
import { ContatosDataBaseService } from './../servicos/contatos-data-base.service';
import { EventEmitter } from 'events';


@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  listaDeContatos: ContatoModel[] = [];
  @Output() idClicado = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
