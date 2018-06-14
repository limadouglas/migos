import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireObject } from "angularfire2/database";
import { Evento } from '../../models/evento.model';
import { FirebaseApp } from "angularfire2";
import * as firebase from 'firebase/app';
import { timeout } from 'q';

@Injectable()
export class EventoProvider {
  
  public listaEventos;

  constructor(
    public db: AngularFireDatabase, 
    public afAuth: AngularFireAuth, 
    public firebaseApp: FirebaseApp,
    
  ) {
    this.getEventos();
  }

  // cria um evento
  create(evento: Evento): Promise<number> {
    
    let idEvento = Date.now();
    evento.idEvento = (idEvento).toString();
    return this.db.object(`/eventos/${idEvento}`).set(evento)
    .then(()=>{return idEvento;})
      .catch(()=>{return -1});
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

  getEv(): any{
    return this.listaEventos;
  }


  uploadFoto(file: File, userId: string): firebase.storage.UploadTask {
    return this.firebaseApp
      .storage()
      .ref()
      .child(`/eventos/${userId}`)
      .put(file);
  }


}
