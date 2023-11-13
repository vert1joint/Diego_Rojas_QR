import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { ApiregisterService } from 'src/app/servicios/apiregister.service';

@Component({
  selector: 'app-recpcontra',
  templateUrl: './recpcontra.page.html',
  styleUrls: ['./recpcontra.page.scss'],
})
export class RecpcontraPage implements OnInit {
  recpForm: FormGroup;

  user = {
    correo:""
  }

  correoExistenteValidator(control: AbstractControl): Promise<ValidationErrors | null> {
    const correo = control.value;
  
    return this.apicrud.verificarCorreoExistente(correo).toPromise().then(resp => {
      if (resp.length === 0) {
        return { correoNoExistente: true }; // El correo no existe, por lo tanto, la validación es exitosa
      }
      return null; // El correo existe, por lo tanto, la validación falla
    });
  }

  constructor(private alertController: AlertController,
              private apicrud: ApiregisterService,
    private fbuilder: FormBuilder) { 
      this.recpForm = this.fbuilder.group({
        'correo': new FormControl('', {
          validators: [Validators.required, Validators.email],
          asyncValidators: [this.correoExistenteValidator.bind(this)],
          updateOn: 'blur'
        })
      })
    }

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
