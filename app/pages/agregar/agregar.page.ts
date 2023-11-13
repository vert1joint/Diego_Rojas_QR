import { Component, OnInit } from '@angular/core';
import { ApicrudService } from 'src/app/servicios/apicrud.service'
import { Router } from '@angular/router';
import { IAnimalito } from '../interfaces/interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  newAnimalito:IAnimalito={
    nombre:"",
    tipoMascota:"",
    raza:""
  }

  constructor(private apicrud: ApicrudService,
              private router:  Router) { }

  ngOnInit() {
  }

  crearMascota(){
    this.apicrud.crearAnimalito(this.newAnimalito).subscribe();
    this.router.navigateByUrl("/listar")
  }

}
