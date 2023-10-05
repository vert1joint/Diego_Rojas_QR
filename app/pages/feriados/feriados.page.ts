import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApitallerService } from 'src/app/servicios/apitaller.service';
import { Data } from '../interfaces/interfaces';

@Component({
  selector: 'app-feriados',
  templateUrl: './feriados.page.html',
  styleUrls: ['./feriados.page.scss'],
})
export class FeriadosPage implements OnInit {

  articulos:Data[]=[];

  constructor(private menuController: MenuController,
    private apiTaller: ApitallerService) { 
      this.articulos.sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
    }

  ngOnInit() {
    this.apiTaller.getToptHeadLines().subscribe(resp =>{
      console.log(resp);
      this.articulos.push(...resp.data);
    })
  }

  MostrarMenu(){
    this.menuController.open('first');
  }
  

}
