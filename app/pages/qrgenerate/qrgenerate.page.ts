import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { IQR } from '../interfaces/interfaces';
import { AlertController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-qrgenerate',
  templateUrl: './qrgenerate.page.html',
  styleUrls: ['./qrgenerate.page.scss'],
})
export class QrgeneratePage{
  fechaActual: string;
  public mensaje: string;

  public asignatura1: any;
  public asignatura2: any;

  time:boolean = true;
  data={
    texto:''
  }

  nombre: any;
  asignatura: any;
  fecha: any;

  usuario: IQR={
    contenido:'',
    nombreProfesor:'',
    asignatura:'',
    fechaCreacion:'',
  }
  constructor(private authservice: AuthService,
              private alertcontroller: AlertController,
              private loadCtrl: LoadingController) { this.mensaje=''; this.ionViewWillEnter(); this.fechaActual = ''; }

  ionViewWillEnter(){ 
    this.actualizarFecha();
    this.nombre = sessionStorage.getItem("nombre");
    this.asignatura1 = sessionStorage.getItem("asignatura1");
    this.asignatura2 = sessionStorage.getItem("asignatura2");
  }

  generarQr(){
    this.mensaje=this.data.texto;
    this.usuario.nombreProfesor=this.nombre;
    this.usuario.asignatura=this.asignatura;
    this.usuario.contenido=this.mensaje;
    this.fecha = this.fechaActual;
    this.usuario.fechaCreacion = this.fecha;
    this.authservice.CrearMensaje(this.usuario).subscribe();
    this.mostrarMensaje();
    this.data.texto='';
    this.time = true;

    setTimeout(() => {
      this.mensaje = '';
      this.time = false;
    }, 300000);
  }

  async mostrarMensaje(){
    const alerta = await this.alertcontroller.create({
      header:'QR Generado!',
      message:'QR Almacenado exitosamente',
      buttons:['Ok']
    })
    alerta.present();
  }

  loadingFecha = false; // Variable para controlar el estado de carga de la fecha
  async actualizarFecha(event?: InfiniteScrollCustomEvent) {
    if (!this.fechaActual && !this.loadingFecha) {
      this.loadingFecha = true;

      const load = await this.loadCtrl.create({ 
        message: "Cargando Fecha Actual",
        spinner: "crescent"
      });
      await load.present();

      const interval = setInterval(() => {
        this.fechaActual = new Date().toLocaleString();

        if (this.fechaActual && this.loadingFecha) {
          event?.target.complete();
          load.dismiss();
          this.loadingFecha = false;
        }
      }, 1000);

      if (this.fechaActual && event) {
        event.target.complete();
        clearInterval(interval);
      }
    }
  }
  
  
  opcionSeleccionada: string | null = null; // Variable que almacena la opción seleccionada
  opcionElegida = false; // Bandera para habilitar/deshabilitar el botón "generarQR"
  capturarValor() {
    this.asignatura = this.opcionSeleccionada; // Almacena el valor seleccionado en la variable
    this.opcionElegida = this.asignatura !== null; // Habilita/deshabilita el botón si se selecciona una opción
  }




}
