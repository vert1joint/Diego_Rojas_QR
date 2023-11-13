import { Component } from '@angular/core';
import { AuthService } from './servicios/auth.service';
import { ToastController } from '@ionic/angular';

interface LoggedOut {
  icon: string;
  name: string;
  redirecTo: string;
}

interface LoggedInDoc {
  icon: string;
  name: string;
  redirecTo: string;
  action?(): void;
}

interface LoggedInAlum {
  icon: string;
  name: string;
  redirecTo: string;
  action?(): void;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public logged: any;
  public role: any;

  constructor(private authservice: AuthService,
              private toastcontroller: ToastController) { this.log(); }

  loggedinDoc: LoggedInDoc[] = [
    {
      name: 'Inicio',
      redirecTo: '/inicio',
      icon: 'home-outline'
    },
    {
      name: 'Feriados',
      redirecTo: '/feriados',
      icon: 'today-outline'
    },
    {
      name: 'Listar',
      redirecTo: '/listar',
      icon: 'document-outline'
    },
    {
      name: 'Perfil',
      redirecTo: '/perfil',
      icon: 'person-outline'
    }, 
    {
      name: 'Crear Invitación',
      redirecTo: '/qrgenerate',
      icon: 'qr-code-outline'
    }, 
    {
      name: 'Información',
      redirecTo: '/informacion',
      icon: 'alert-circle-outline'
    }, 
    {
      name: 'Cerrar Sesión',
      redirecTo: '/inicio',
      icon: 'exit-outline',
      action: ()=> this.logout()
    }, 
  ];

  loggedinAlum: LoggedInAlum[] = [
    {
      name: 'Inicio',
      redirecTo: '/inicio',
      icon: 'home-outline'
    },
    {
      name: 'Feriados',
      redirecTo: '/feriados',
      icon: 'today-outline'
    },
    {
      name: 'Listar',
      redirecTo: '/listar',
      icon: 'document-outline'
    },
    {
      name: 'Perfil',
      redirecTo: '/perfil',
      icon: 'person-outline'
    },
    {
      name: 'Información',
      redirecTo: '/informacion',
      icon: 'alert-circle-outline'
    }, 
    {
      name: 'Cerrar Sesión',
      redirecTo: '/inicio',
      icon: 'exit-outline',
      action: ()=> this.logout()
    }, 
  ];

  loggedout: LoggedOut[] = [
    {
      name: 'Inicio',
      redirecTo: '/inicio',
      icon: 'home-outline'
    },
    {
      name: 'Información',
      redirecTo: '/informacion',
      icon: 'alert-circle-outline'
    }
  ];

  performAction(loggedinDoc: LoggedInDoc) {
    if (loggedinDoc.action) {
      loggedinDoc.action();
    }
  }

  logout() {
    this.authservice.logoutUser(); // Llama al método logout del servicio
    this.showToast('Se ha cerrado sesión');
  }

  log(){
    this.logged=this.authservice.IsLoggedIn();
    this.role=this.authservice.userRole();
  }

  async showToast(msg:any){
    const toast= await this.toastcontroller.create({
      message: msg,
      duration: 1000
    })
    toast.present();
  }

}
