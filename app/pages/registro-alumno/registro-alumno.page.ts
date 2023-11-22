import { Component, OnInit } from '@angular/core';
import { ApiregisterService } from 'src/app/servicios/apiregister.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-registro-alumno',
  templateUrl: './registro-alumno.page.html',
  styleUrls: ['./registro-alumno.page.scss'],
})
export class RegistroAlumnoPage implements OnInit {
  registermistForm: FormGroup;

  userdata: any; 

  newAlumno={
    rut:"",
    nombre:"",
    apellido:"",
    correo:"",
    contrasena:"",
    carrera:"",
    sede:"",
    jornada:""
  }


  async correoExistenteValidator(control: AbstractControl): Promise<ValidationErrors | null> {
    const correo = control.value;
  
    try {
      const resp1 = await this.apicrud.verificarCorreoExistente(correo).toPromise();
      const resp2 = await this.apicrud.verificarCorreoExistenteAlumno(correo).toPromise();
  
      if (resp1.length > 0 || resp2.length > 0) {
        return { correoExistente: true };
      }
  
      return null;
    } catch (error) {
      console.error(error);
      return { correoExistente: true };
    }
  }

  constructor(private alertController: AlertController,
    private apicrud: ApiregisterService,
    private router:  Router,
    private fbuilder: FormBuilder) { 
      this.registermistForm = this.fbuilder.group({
        'rut': new FormControl("",[Validators.required, Validators.minLength(9),Validators.pattern(/^(\d{1,3}(?:\.\d{1,3}){2}-\d|(\d{1,3}){2}-\d{1,3}(?:\.\d{1,3})|(\d{1,3}){2}-\d{1,3}(?:\.\d{1,3})?)$/)]),
        'nombre': new FormControl("",[Validators.required, Validators.minLength(4)]),
        'apellido': new FormControl("",[Validators.required, Validators.minLength(4)]),
        'correo': new FormControl('', {
          validators: [Validators.required, Validators.email],
          asyncValidators: [this.correoExistenteValidator.bind(this)],
          updateOn: 'blur'
        }),
        'contrasena':new FormControl("", [Validators.required, Validators.minLength(8)]),
        'carrera': new FormControl("",[Validators.required]),
        'sede': new FormControl("",[Validators.required]),
        'jornada': new FormControl("",[Validators.required]),
      })
    } 

  ngOnInit() {
  }

  registroAlumno() {
    if (this.registermistForm.valid) {
      this.apicrud.crearAlumno(this.registermistForm.value).subscribe(resp => {
        this.userdata = resp;
        if (this.userdata.length > 0) {
          this.newAlumno = {
            rut: this.userdata[0].rut,
            nombre: this.userdata[0].nombre,
            apellido: this.userdata[0].apellido,
            correo: this.userdata[0].correo,
            contrasena: this.userdata[0].contrasena,
            carrera: this.userdata[0].asignatura2,
            sede: this.userdata[0].sede,
            jornada: this.userdata[0].jornada
          };

        }
      });
    }
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
    this.router.navigateByUrl("/iniciar-alum")
  }

}
