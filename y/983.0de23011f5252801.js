"use strict";(self.webpackChunkappUTN=self.webpackChunkappUTN||[]).push([[983],{9983:(x,m,a)=>{a.r(m),a.d(m,{MemoryTimeModule:()=>_});var c=a(6814),s=a(95),l=a(9295),e=a(5879),p=a(1344);function u(n,r){if(1&n&&(e.TgZ(0,"p",11),e._uU(1),e.qZA()),2&n){const o=r.$implicit,t=e.oxw(2);e.Q6J("ngClass",t.userLogeado.uid?"enviado":"recibido"),e.xp6(1),e.hij(" ",o.texto," ")}}const g=function(){return{standalone:!0}};function h(n,r){if(1&n){const o=e.EpF();e.TgZ(0,"div",1)(1,"div",2),e._uU(2,"Chatea!"),e.qZA(),e.TgZ(3,"div",3)(4,"div",4),e.YNc(5,u,2,2,"p",5),e.qZA()(),e.TgZ(6,"form",6),e.NdJ("ngSubmit",function(){e.CHM(o);const i=e.oxw();return e.KtG(i.enviarMensaje())}),e._uU(7," --\x3e "),e.TgZ(8,"input",7),e.NdJ("ngModelChange",function(i){e.CHM(o);const d=e.oxw();return e.KtG(d.newMsj=i)}),e.qZA(),e.TgZ(9,"div",8),e.NdJ("click",function(){e.CHM(o);const i=e.oxw();return e.KtG(i.enviarMensaje())}),e.TgZ(10,"span",9),e._UZ(11,"img",10),e.qZA()()()()}if(2&n){const o=e.oxw();e.xp6(5),e.Q6J("ngForOf",o.chats),e.xp6(3),e.Q6J("ngModel",o.newMsj)("ngModelOptions",e.DdM(3,g))}}let M=(()=>{var n;class r{constructor(t){this.usrService=t,this.newMsj="",this.chats=[{emisor:"id",texto:"Hola"},{emisor:"id",texto:"Hola 2"},{emisor:"id",texto:"Holas"},{emisor:"ids",texto:"Hola 2"},{emisor:"id",texto:"Holasa 2"},{emisor:"id",texto:"Hola 2"}]}ngOnInit(){this.usrService.getUserLoggedIn().subscribe(t=>{this.userLogeado=t})}enviarMensaje(){this.chats.push({emisor:this.userLogeado.uid,texto:this.newMsj}),this.newMsj=""}}return(n=r).\u0275fac=function(t){return new(t||n)(e.Y36(p.I))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-chat"]],decls:1,vars:1,consts:[["class","card text-center cardContainer",4,"ngIf"],[1,"card","text-center","cardContainer"],[1,"card-header"],[1,"card-body"],[1,"container-Msg","h-100"],["class","send",3,"ngClass",4,"ngFor","ngForOf"],[1,"card-footer","text-muted","input-group",3,"ngSubmit"],["type","text","placeholder","Mensaje",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["id","basic-addon2",1,"input-group-append",3,"click"],["id","basic-addon2",1,"input-group-text"],["src","../../../assets/send.png","width","52px","alt","send message",1,"imgEnv","small"],[1,"send",3,"ngClass"]],template:function(t,i){1&t&&e.YNc(0,h,12,4,"div",0),2&t&&e.Q6J("ngIf",i.userLogeado)},dependencies:[c.mk,c.sg,c.O5,s._Y,s.Fj,s.JJ,s.JL,s.On,s.F],styles:[".cardContainer[_ngcontent-%COMP%]{width:300px;height:500px;position:fixed;right:.5rem;bottom:.5rem;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#fff}.card-body[_ngcontent-%COMP%]{padding:.5rem}.card-header[_ngcontent-%COMP%]{background-color:green;color:#000;font-weight:700}.container-Msg[_ngcontent-%COMP%]{max-height:300px;overflow-y:auto;padding:.3rem}.imgEnv[_ngcontent-%COMP%]:active{transform:scale(0,9)}.imgEnv.small[_ngcontent-%COMP%]{width:30px;height:30px;max-width:100%;max-height:100%}.containerMsg[_ngcontent-%COMP%]{overflow:scroll;padding:.3rm}.send[_ngcontent-%COMP%]{display:block;background-color:green;color:#000;min-width:50%;border-radius:30px;padding:5px 10px;text-align:left}.recept[_ngcontent-%COMP%]{display:block;background-color:red;color:#000;min-width:50%;border-radius:30px;padding:5px 10px;text-align:left}"]}),r})();const f=[{path:"",component:(()=>{var n;class r{constructor(){this.intentos=0,this.mensaje="",this.numeroIngresado=0,this.numeroSecreto=Math.floor(100*Math.random())+1}verificarNumero(t){this.intentos++,this.mensaje=t===this.numeroSecreto?`\xa1Felicidades! Has adivinado el n\xfamero en ${this.intentos} intentos.`:t<this.numeroSecreto?"El n\xfamero secreto es mayor. Intenta nuevamente.":"El n\xfamero secreto es menor. Intenta nuevamente."}}return(n=r).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-memory-time"]],decls:9,vars:2,consts:[["type","number",3,"ngModel","ngModelChange"],[3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"div"),e._UZ(1,"app-chat"),e.TgZ(2,"h1"),e._uU(3,"Adivina el N\xfamero"),e.qZA(),e.TgZ(4,"p"),e._uU(5),e.qZA(),e.TgZ(6,"input",0),e.NdJ("ngModelChange",function(v){return i.numeroIngresado=v}),e.qZA(),e.TgZ(7,"button",1),e.NdJ("click",function(){return i.verificarNumero(i.numeroIngresado)}),e._uU(8,"Verificar!!"),e.qZA()()),2&t&&(e.xp6(5),e.Oqu(i.mensaje),e.xp6(1),e.Q6J("ngModel",i.numeroIngresado))},dependencies:[s.Fj,s.wV,s.JJ,s.On,M]}),r})()}];let C=(()=>{var n;class r{}return(n=r).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[l.Bz.forChild(f)],l.Bz]}),r})(),_=(()=>{var n;class r{}return(n=r).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,s.u5,C]}),r})()}}]);