import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  


  constructor(private alertController: AlertController) { }

  usuario = {
    rut: '',
    nombre: '',
    apellido: '',
    email: '',
    sede: '',
    jornada: '',
    password: ''
  };


  ngOnInit() {
  }

  async MostrarMensaje() {
    const alert = await this.alertController.create({
      header: 'Gracias por registrarte',
      message: 'Te redireccionamos para que puedas iniciar sesión',
      buttons: ['OK'],
    });

    await alert.present();
  }

  Enviar() {
    console.log('Enviado!');
    this.MostrarMensaje();
    this.usuario.nombre = '';
    this.usuario.apellido = '';
    this.usuario.email = '';
    this.usuario.sede = '';
    this.usuario.jornada = '';
    this.usuario.password = '';
  }
}