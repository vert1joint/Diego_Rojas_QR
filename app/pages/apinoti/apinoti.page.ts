import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApiNoticiasService } from 'src/app/servicios/api-noticias.service';
import { Article } from '../interfaces/interfaces';

@Component({
  selector: 'app-apinoti',
  templateUrl: './apinoti.page.html',
  styleUrls: ['./apinoti.page.scss'],
})
export class ApinotiPage implements OnInit {

  articulos:Article[]=[];

  constructor(private menuController: MenuController,
              private apiNotis: ApiNoticiasService) { }

  ngOnInit() {
    this.apiNotis.getToptHeadLines().subscribe(resp =>{
      console.log(resp);
      this.articulos.push(...resp.articles);
    })
  }

  MostrarMenu(){
    this.menuController.open('first');
  }


}
