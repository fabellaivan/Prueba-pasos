import { Component, OnInit } from '@angular/core';
import { MsgService } from 'src/app/services/msg-.service';
import { UsrAuthService } from 'src/app/services/usr-auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  newMsj: string = "";
  viewChat = false;
  userLogeado: any;
  chats: any = [
    {
      emisor: "4jRnjUY3ucT9IW1i5hZs0jNKB7q2",
      texto: "Hola"
    },
    {
      emisor: "id",
      texto: "Hola 2"
    }
  ];
  constructor( private usrService: UsrAuthService,private msgService: MsgService) { }//Donde injecto al servicio msgService da el  R3InjectorError(HomeModule)

  ngOnInit(): void {
    //  this.msgService.getMsg();
    this.usrService.getUserLoggedIn().subscribe((user) => {
      this.userLogeado = user
    });
  }
  enviarMensaje(): void {
    let mensaje = {
      emisor: this.userLogeado.uid,
      texto: this.newMsj

    }
    console.log(this.userLogeado);
    this.chats.push(mensaje);

    setTimeout(() => {
      this.scrollTheLastElementByClName();
    }, 10);
    this.newMsj = "";

  }
  scrollTheLastElementByClName() {

    let e = document.getElementsByClassName('send');
    if (e.length > 0) {

      let ultimo: any = e[e.length - 1];
      let topPos = ultimo.offsetTop;

      let containerMsg = document.getElementById('containerMsg');
      console.log(containerMsg);
      if (containerMsg) {
        containerMsg.scrollTop = topPos;
        console.log("llega");
      }
    }
  }

}
