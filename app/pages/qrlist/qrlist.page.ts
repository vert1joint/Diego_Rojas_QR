import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { IQRs } from '../interfaces/interfaces';

@Component({
  selector: 'app-qrlist',
  templateUrl: './qrlist.page.html',
  styleUrls: ['./qrlist.page.scss'],
})
export class QrlistPage{
  
  mensajes:IQRs[]=[];

  constructor(private loadCtrl: LoadingController,
              private authservice: AuthService) { }

  usuario={
    nombre:''
  }

  ionViewWillEnter(){   //Actualiza la carga de datos al redireccionar
    this.LoadQRs();
    let nombre = sessionStorage.getItem("correo");

    if (nombre){
      this.usuario.nombre = nombre;
    }
  }
  

  async LoadQRs(event?:InfiniteScrollCustomEvent){
    const load = await this.loadCtrl.create({ 
      message: "Cargando Códigos QR",
      spinner:"crescent"
    });
    await load.present();

    this.authservice.getAllQR(this.usuario.nombre).subscribe({ 
      next:resp=>{
        console.log(resp);
        load.dismiss();
        let listString = JSON.stringify(resp); //Convertimos a String nuestro resp
        this.mensajes = JSON.parse(listString); //Convertiremos a JSON el string para almacenar
        event?.target.complete();
        console.log(this.mensajes)
      },
      error: err=>{
        console.log(err.error.message);
        load.dismiss();
      }
    })
  }

  

}
