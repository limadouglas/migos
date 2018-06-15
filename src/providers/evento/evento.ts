import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";
import { Evento } from '../../models/evento.model';
import { FirebaseApp } from "angularfire2";
import * as firebase from 'firebase/app';

@Injectable()
export class EventoProvider {
  
  public listaEventos;
  public indiceEvento: number;

  constructor(
    public db: AngularFireDatabase, 
    public afAuth: AngularFireAuth, 
    public firebaseApp: FirebaseApp,
    
  ) {
    console.log('eventoprovidercriado');
    this.indiceEvento = -1;
    this.getEventos();
  }

  // cria um evento
  create(evento: Evento): Promise<number> {
    
    let idEvento = Date.now();
    evento.idEvento = (idEvento).toString();

    let dataAux = evento.data.split('-');

    evento.data = dataAux[2] + '/' + dataAux[1] + '/' + dataAux[0];

    return this.db.object(`/eventos/${idEvento}`).set(evento)
    .then(()=>{
      this.getEventos();
      return idEvento;
      }
    ).catch(()=>{return -1});
  }

  // retorna todos os eventos
  getEventos(): any{
    this.listaEventos = [];
    this.db.list<Evento>(`/eventos`).valueChanges().forEach(el => {
        if(this.listaEventos.length===0){
          this.listaEventos = el;
        }else{
          this.listaEventos.push(el);
        }
      });    
  }

  getEventoId(id: number): any{
    return this.listaEventos[id];
  }

  public proximoEvento(): any{
    if(this.indiceEvento >= this.listaEventos.length-1){
      this.indiceEvento = 0;
    }else{
      this.indiceEvento++;
    }
    return this.listaEventos[this.indiceEvento];
  }

  public anteriorEvento(): any{
    if(this.indiceEvento <= 0){
      this.indiceEvento = this.listaEventos.length - 1;
    }else{
      this.indiceEvento--
    }
    return this.listaEventos[this.indiceEvento];
  }

  public meusEventos(id: string){
    let meusEventos = [];
    console.log(this.listaEventos);
    this.listaEventos.forEach(el => {
      if(el.participantes[id]){
        meusEventos.push(el);
      }
    });
    console.log('-------');
    console.log(meusEventos);
    return meusEventos;
  }


  uploadFoto(file: File, userId: string): firebase.storage.UploadTask {
    return this.firebaseApp
      .storage()
      .ref()
      .child(`/eventos/${userId}`)
      .put(file);
  }


}
