import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recpcontra',
  templateUrl: './recpcontra.page.html',
  styleUrls: ['./recpcontra.page.scss'],
})
export class RecpcontraPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async MostrarMensaje() {
    const alert = await this.alertController.create({
      header: 'Te hemos enviado un correo!',
      message: 'Dentro del correo encontrarás un enlace para recuperar tu contraseña',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
