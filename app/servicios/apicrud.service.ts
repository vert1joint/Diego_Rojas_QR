import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAnimalito,IAnimalitos } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApicrudService {

  constructor(private httpclient: HttpClient) { }

  //Peticion get
  listarAnimalitos():Observable<IAnimalitos>{
    return this.httpclient.get<IAnimalitos>(`${environment.apiUrl}/animalitos`);
  }

  //Peticion post
  crearAnimalito(newAnimalito:IAnimalito):Observable<IAnimalito>{
    return this.httpclient.post<IAnimalitos>(`${environment.apiUrl}/animalitos`,newAnimalito);
  }

}
