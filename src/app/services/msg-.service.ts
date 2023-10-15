import { Injectable } from '@angular/core';
// import { Firestore, addDoc, collection, getDoc, getDocs, onSnapshot, updateDoc } from '@angular/fire/firestore';

import {msg} from '../models/msg';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  // private path:string = 'msg';  
 
  // constructor(private firestore:Firestore){}
  // msgRef = collection(this.firestore,this.path);
  //  getMsg(){

  //   const unsub = onSnapshot(this.msgRef,(snapshot)=>{//escucha posibles cambios
  //     snapshot.docChanges().forEach((e)=>{
  //       console.log(e.doc.data());
  //     })
  
  //    });
  // }

  // sndMsg(msg:msg){
  //   return addDoc(this.msgRef,msg);
  // }
 }
