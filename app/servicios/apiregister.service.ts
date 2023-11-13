import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IDocente,IDocentes } from '../pages/interfaces/interfaces';
import { IAlumno,IAlumnos } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiregisterService {

  constructor(private httpclient: HttpClient) { }

  //Peticion get
  listarAlumnos():Observable<IDocentes>{
    return this.httpclient.get<IDocentes>(`${environment.apiUrl}/docentes`);
  }

  //Peticion post
  crearProfesor(newDocente:IDocente):Observable<IDocente>{
    return this.httpclient.post<IDocentes>(`${environment.apiUrl}/docentes`,newDocente);
  }

  // Realiza una solicitud HTTP para verificar si el correo existe en la base de datos
  verificarCorreoExistente(correo: string): Observable<any> {
    return this.httpclient.get<any>(`${environment.apiUrl}/docentes/?correo=${correo}`);
  }



  crearAlumno(newPupilo:IAlumno):Observable<IAlumno>{
    return this.httpclient.post<IAlumnos>(`${environment.apiUrl}/alumnos`,newPupilo);
  }
}
