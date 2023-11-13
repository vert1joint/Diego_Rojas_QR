import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaToHeadLines } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiNoticiasService {

  constructor(private httpclient: HttpClient) { }


  getToptHeadLines(){
    return this.httpclient.get<RespuestaToHeadLines>('https://newsapi.org/v2/everything?q=apple&from=2023-09-10&to=2023-09-10&sortBy=popularity&apiKey=fc7d9914898440dbbd18848dcadd6851');
  }
}
