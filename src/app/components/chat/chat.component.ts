import { Component, OnInit } from '@angular/core';
import { UsrAuthService } from 'src/app/services/usr-auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  newMsj: string = "" ;
  userLogeado : any;
  chats: any = [
    {
      emisor: "id",
      texto: "Hola"
    },
    {
      emisor: "id",
      texto: "Hola 2"
    },
    {
      emisor: "id",
      texto: "Holas"
    },
    {
      emisor: "ids",
      texto: "Hola 2"
    },
    {
      emisor: "id",
      texto: "Holasa 2"
    },
    {
      emisor: "id",
      texto: "Hola 2"
    },
  ];
  constructor(private usrService: UsrAuthService) {}

  ngOnInit(): void {
    this.usrService.getUserLoggedIn().subscribe((user) => {
      this.userLogeado = user
    });
  }
  enviarMensaje(): void {
    let mensaje = {
      emisor : this.userLogeado.uid,
      texto : this.newMsj

    }
    console.log(this.userLogeado);
    this.chats.push(mensaje);
    this.newMsj = "";
  }

}
