import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { MenuController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-iniciar-alum',
  templateUrl: './iniciar-alum.page.html',
  styleUrls: ['./iniciar-alum.page.scss'],
})
export class IniciarAlumPage implements OnInit {

  iniciarAlumForm: FormGroup;
  userdata:any;
  showAlert:boolean = false;

  usuario2={
    id:"",
    rut:"",
    nombre:"",
    apellido:"",
    correo:"",
    contrasena:"",
    carrera:"",
    sede:"",
    jornada:""
  }

  constructor(private authservice: AuthService,
    private router: Router,
    private menuController: MenuController,
    private toastcontroller: ToastController,
    private fbuilder: FormBuilder) {
      this.iniciarAlumForm = this.fbuilder.group({
        'correo' : new FormControl("",[Validators.required, Validators.minLength(4), Validators.email]),
        'contrasena' : new FormControl("",[Validators.required, Validators.minLength(3)])
      })
     }

  ngOnInit() {
  }

  login2(){
    this.showAlert = false;
    if (this.iniciarAlumForm.valid){
      this.authservice.getUserByAlumno(this.iniciarAlumForm.value.correo).subscribe(resp=>{
        this.userdata = resp;
        console.log(this.userdata);
        if (this.userdata.length>0){ //Si se encuentra el objeto, lentgh devuelve valor:1
          this.usuario2={
            id : this.userdata[0].id,
            rut : this.userdata[0].rut,
            nombre : this.userdata[0].nombre,
            apellido : this.userdata[0].apellido,
            correo : this.userdata[0].correo,
            contrasena : this.userdata[0].contrasena,
            carrera : this.userdata[0].carrera,
            sede : this.userdata[0].sede,
            jornada : this.userdata[0].jornada
          }
          if (this.usuario2.contrasena === this.iniciarAlumForm.value.contrasena){
            //iniciamos sesion
            sessionStorage.setItem('id',this.usuario2.id);
            sessionStorage.setItem('nombre',this.usuario2.nombre);
            sessionStorage.setItem('correo',this.usuario2.correo);
            sessionStorage.setItem('sede',this.usuario2.sede);
            sessionStorage.setItem('carrera', this.usuario2.carrera);
            sessionStorage.setItem('jornada',this.usuario2.jornada);
            sessionStorage.setItem('iniciado', 'false');
            this.showToast('Sesión Iniciada para ' + this.usuario2.nombre);
            this.router.navigateByUrl("/inicio").then(() => {
              window.location.reload();});
          }
        }if (this.usuario2.contrasena != this.iniciarAlumForm.value.contrasena){
          this.showAlert = true;
        }
      });
    }
  }

  async showToast(msg:any){
    const toast= await this.toastcontroller.create({
      message: msg,
      duration: 3000
    })
    toast.present();
  }

  MostrarMenu(){
    this.menuController.open('first');
  }
}
