import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-qrrecord',
  templateUrl: './qrrecord.page.html',
  styleUrls: ['./qrrecord.page.scss'],
})
export class QrrecordPage implements OnInit {
  mensajes ={
    id:0,
    contenido:"",
    nombreProfesor:"",
    correoProfesor:"",
    asignatura:"",
    fechaCreacion:"",
  }

  constructor(private router: Router,
              private authservice: AuthService) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.getAnimalitoById(this.getIdFromUrl());
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
  }

  getAnimalitoById(id:number){
    this.authservice.getQRWithId(id).subscribe(
      (resp:any)=>{                 //resp llega en formato de arreglo de un objeto 
        this.mensajes={
          id: resp[0].id,
          contenido: resp[0].contenido,
          nombreProfesor: resp[0].nombreProfesor,
          correoProfesor: resp[0].correoProfesor,
          asignatura: resp[0].asignatura,
          fechaCreacion: resp[0].fechaCreacion
        }
      }
    )
  }

}
