import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
//import { Http } from '@angular/http';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireObject } from "angularfire2/database";
import { Evento } from '../../models/evento.model';
import { FirebaseApp } from "angularfire2";
import * as firebase from 'firebase/app';

@Injectable()
export class EventoProvider {

  constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth, public firebaseApp: FirebaseApp) {
  }

  // cria um evento
  create(evento: Evento): Promise<number> {
    console.log(JSON.stringify(evento));
    let idEvento = Date.now();
    return this.db.object(`/eventos/${idEvento}`).set(evento)
    .then(()=>{return idEvento;})
      .catch(()=>{return -1});
  }

  // retorna todos os eventos
  getEventos(): AngularFireObject<Evento> {
    return this.db.object<Evento>(`/eventos`);
  }

  uploadFoto(file: File, userId: string): firebase.storage.UploadTask {
    return this.firebaseApp
      .storage()
      .ref()
      .child(`/usuarios/${userId}`)
      .put(file);
  }


}
