import { ContatoModel } from './../modelos/contatos-model';
import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class ContatosDataBaseService{

    meusContatos: ContatoModel[] = [];
    enviarContato = new EventEmitter();

    constructor(){}

    setContato(novoContato: ContatoModel): void {
        this.meusContatos.push(novoContato);
        this.enviarContato.emit(this.meusContatos);

    }

    getContato(id: number): ContatoModel {
        let contato: ContatoModel;
        contato = this.meusContatos[id];
        return contato;
    }

}