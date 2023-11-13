import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { MenuController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.page.html',
  styleUrls: ['./iniciar.page.scss'],
})
export class IniciarPage implements OnInit {

  iniciarForm: FormGroup;
  userdata:any;
  showAlert:boolean = false;

  usuario={
    id:"",
    rut:"",
    nombre:"",
    apellido:"",
    correo:"",
    contrasena:"",
    asignatura1:"",
    asignatura2:"",
    sede:"",
    jornada:""
  }

  constructor(private authservice: AuthService,
              private router: Router,
              private menuController: MenuController,
              private toastcontroller: ToastController,
              private fbuilder: FormBuilder) {
                this.iniciarForm = this.fbuilder.group({
                  'correo' : new FormControl("",[Validators.required, Validators.minLength(4), Validators.email]),
                  'contrasena' : new FormControl("",[Validators.required, Validators.minLength(3)])
                })
               }

  ngOnInit() {
  }

  login(){
    this.showAlert = false;
    if (this.iniciarForm.valid){
      this.authservice.getUserByName(this.iniciarForm.value.correo).subscribe(resp=>{
        this.userdata = resp;
        console.log(this.userdata);
        if (this.userdata.length>0){ //Si se encuentra el objeto, lentgh devuelve valor:1
          this.usuario={
            id : this.userdata[0].id,
            rut : this.userdata[0].rut,
            nombre : this.userdata[0].nombre,
            apellido : this.userdata[0].apellido,
            correo : this.userdata[0].correo,
            contrasena : this.userdata[0].contrasena,
            asignatura1 : this.userdata[0].asignatura1,
            asignatura2 : this.userdata[0].asignatura2,
            sede : this.userdata[0].sede,
            jornada : this.userdata[0].jornada
          }
          if (this.usuario.contrasena === this.iniciarForm.value.contrasena){
            //iniciamos sesion
            sessionStorage.setItem('id',this.usuario.id);
            sessionStorage.setItem('nombre',this.usuario.nombre);
            sessionStorage.setItem('correo',this.usuario.correo);
            sessionStorage.setItem('sede',this.usuario.sede);
            sessionStorage.setItem('asignatura1',this.usuario.asignatura1);
            sessionStorage.setItem('asignatura2', this.usuario.asignatura2);
            sessionStorage.setItem('jornada',this.usuario.jornada);
            sessionStorage.setItem('iniciado', 'true');
            this.showToast('Sesión Iniciada para ' + this.usuario.nombre);
            this.router.navigateByUrl("/inicio").then(() => {
              window.location.reload();});
          }
        }if (this.usuario.contrasena != this.iniciarForm.value.contrasena){
          this.showAlert = true;
        }
      });
    }
  }//login



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


