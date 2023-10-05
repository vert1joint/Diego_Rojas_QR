import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApicrudService } from 'src/app/servicios/apicrud.service';
import { LoadingController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage {

  animalitos = []

  constructor(private menuController: MenuController,
              private apiCrud: ApicrudService, 
              private loadCtrl: LoadingController) { }


  ionViewWillEnter(){   //Actualiza la carga de datos al redireccionar
    this.LoadAnimalitos();
  }

  MostrarMenu(){
    this.menuController.open('first');
  }

  async LoadAnimalitos(event?:InfiniteScrollCustomEvent){
    const load = await this.loadCtrl.create({ 
      message: "Cargando animalitos",
      spinner:"crescent"
    });
    await load.present();

    this.apiCrud.listarAnimalitos().subscribe({ 
      next:resp=>{
        console.log(resp);
        load.dismiss();
        let listString = JSON.stringify(resp); //Convertimos a String nuestro resp
        this.animalitos = JSON.parse(listString); //Convertiremos a JSON el string para almacenar
        event?.target.complete();
      },
      error: err=>{
        console.log(err.error.message);
        load.dismiss();
      }
    })

  }

}
