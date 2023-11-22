import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { IQR } from '../interfaces/interfaces';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { LoadingController,MenuController } from '@ionic/angular';

@Component({
  selector: 'app-qrgenerate',
  templateUrl: './qrgenerate.page.html',
  styleUrls: ['./qrgenerate.page.scss'],
})
export class QrgeneratePage{
  qrForm: FormGroup;
  fechaActual: string;
  public mensaje: string;
  userdata: any;

  public asignatura1: any;
  public asignatura2: any;

  time:boolean = true;
  data={
    texto:'',
    asignature:''
  }

  nombre: any;
  correo: any;
  fecha: any;

  usuario: IQR={
    contenido:'',
    nombreProfesor:'',
    correoProfesor:'',
    asignatura:'',
    fechaCreacion:'',
  }
  constructor(private authservice: AuthService,
              private menucontroller: MenuController,
              private alertcontroller: AlertController,
              private loadCtrl: LoadingController,
              private fbuilder: FormBuilder) { this.mensaje=''; this.ionViewWillEnter(); this.fechaActual = ''; 
                this.qrForm = this.fbuilder.group({
                  'asignature': new FormControl("",[Validators.required]),
                  'texto': new FormControl("",[Validators.required, Validators.minLength(5)])
              })
            }

  ionViewWillEnter(){ 
    this.actualizarFecha();
    this.nombre = sessionStorage.getItem("nombre");
    this.correo = sessionStorage.getItem("correo");
    this.asignatura1 = sessionStorage.getItem("asignatura1");
    this.asignatura2 = sessionStorage.getItem("asignatura2");
  }

  generarQr(){
      this.mensaje=this.qrForm.controls['texto'].value;
      this.usuario.nombreProfesor=this.nombre;
      this.usuario.correoProfesor=this.correo;
      this.usuario.asignatura=this.qrForm.controls['asignature'].value;
      this.usuario.contenido=this.mensaje;
      this.fecha = this.fechaActual;
      this.usuario.fechaCreacion = this.fecha;
      this.authservice.CrearMensaje(this.usuario).subscribe();
      this.mostrarMensaje();
      this.data.texto='';
      this.time = true;
      this.qrForm.reset();
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
  
  MostrarMenu(){
    this.menucontroller.open('first');
  }

  

}
