import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  isReadOnly: boolean = true;
  public role: any;

  usuario={
    id:"",
    rut:"",
    nombre:"",
    apellido:"",
    correo:"",
    contrasena:"",
    asignatura1:"",
    asignatura2:"",
    carrera:"",
    sede:"",
    jornada:"",
    
  }


  constructor(private menucontroller: MenuController,
              private authservice: AuthService,
              private router: Router,
              private toastcontroller: ToastController) { this.ionViewWillEnter(); }

  ngOnInit() {
  }


  MostrarMenu(){
    this.menucontroller.open('first');
  }
  
  ionViewWillEnter(){
    let correo = sessionStorage.getItem("correo");

    if (correo){
      this.usuario.correo = correo;
    }

    this.getAlumnoByEmail(correo);
    this.getDocenteByEmail(correo);

    this.role=this.authservice.userRole();
  }



  getAlumnoByEmail(alumnoID:any){
    this.authservice.BuscarEmailAlumno(alumnoID).subscribe(
      (resp:any)=>{                 //resp llega en formato de arreglo de un objeto 
        this.usuario={
          id: resp[0].id,
          rut: resp[0].rut,
          nombre : resp[0].nombre,
          apellido: resp[0].apellido,
          correo : resp[0].correo,
          contrasena: resp[0].contrasena,
          asignatura1 : resp[0].asignatura1,
          asignatura2 : resp[0].asignatura2,
          carrera : resp[0].carrera,
          sede : resp[0].sede,
          jornada : resp[0].jornada
        }
      }
    )
  }
  getDocenteByEmail(docenteID:any){
    this.authservice.BuscarEmailDocente(docenteID).subscribe(
      (resp:any)=>{                 //resp llega en formato de arreglo de un objeto 
        this.usuario={
          id: resp[0].id,
          rut: resp[0].rut,
          nombre : resp[0].nombre,
          apellido: resp[0].apellido,
          correo : resp[0].correo,
          contrasena: resp[0].contrasena,
          asignatura1 : resp[0].asignatura1,
          asignatura2 : resp[0].asignatura2,
          carrera : resp[0].carrera,
          sede : resp[0].sede,
          jornada : resp[0].jornada
        }
      }
    )
  }


  logout() {
    this.authservice.logoutUser(); // Llama al método logout del servicio
    this.router.navigate(['/inicio']);
    this.showToast('Se ha cerrado sesión');
  }

  async showToast(msg:any){
    const toast= await this.toastcontroller.create({
      message: msg,
      duration: 1000
    })
    toast.present();
  }

  updateAlumno(){
    this.authservice.ActualizarAlumno(this.usuario).subscribe();
    this.router.navigateByUrl("/inicio").then(() => {
      window.location.reload();})
    sessionStorage.setItem('nombre',this.usuario.nombre);  
  }

  updateDocente(){
    this.authservice.ActualizarDocente(this.usuario).subscribe();
    this.router.navigateByUrl("/inicio").then(() => {
      window.location.reload();})
    sessionStorage.setItem('nombre',this.usuario.nombre);  
  }

  activarEdicion() {
    this.isReadOnly = false; // Cambia el estado de readonly a false para permitir la edición
  }

}
