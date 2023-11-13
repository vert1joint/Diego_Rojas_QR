import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  usuario={
    nombre:"",
  }
  iniciado: boolean = false;
  public bandera: any;
  
  constructor(private menuController: MenuController,
              private authservice: AuthService,
              private router: Router,
              private toastcontroller: ToastController,
              private location: Location) { this.obtainStorage(); }

  ngOnInit(   ) {
  }

  MostrarMenu(){
    this.menuController.open('first');
  }

  obtainStorage(){
    let nombre = sessionStorage.getItem("nombre");
    
    if (nombre) {
      this.usuario.nombre = nombre;
    }

    this.bandera=this.authservice.IsLoggedIn();
  }

  logout() {
    this.authservice.logoutUser(); // Llama al método logout del servicio
    this.router.navigateByUrl("/inicio");
    this.showToast('Se ha cerrado sesión');
  }

  async showToast(msg:any){
    const toast= await this.toastcontroller.create({
      message: msg,
      duration: 1000
    })
    toast.present();
  }

}
