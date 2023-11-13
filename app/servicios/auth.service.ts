import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IAlumnos, IAlumno, Users, IDocentes,IDocente, IQRs, IQR } from '../pages/interfaces/interfaces';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuario={
    userRole:""
  }

  constructor(private httpclient: HttpClient,
              private _router: Router) { this.userRole(); }

  //Obtener usuario atraves de username
  getUserByName(name:any):Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/docentes/?correo=${name}`);
  }
  getUserByAlumno(name:any):Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/alumnos/?correo=${name}`);
  }

  BuscarEmailAlumno(correo:any):Observable<IAlumnos>{
    return this.httpclient.get<IAlumnos>(`${environment.apiUrl}/alumnos/?correo=${correo}`);
  }
  BuscarEmailDocente(correo:any):Observable<IDocentes>{
    return this.httpclient.get<IDocentes>(`${environment.apiUrl}/docentes/?correo=${correo}`);
  }

  ActualizarAlumno(alumno:any):Observable<IAlumnos>{
    return this.httpclient.put<IAlumnos>(`${environment.apiUrl}/alumnos/${alumno.id}`, alumno);
  }
  ActualizarDocente(docente:any):Observable<IDocentes>{
    return this.httpclient.put<IDocentes>(`${environment.apiUrl}/docentes/${docente.id}`, docente);
  }


  IsLoggedIn(){
    return sessionStorage.getItem('correo')!=null;
  }

  logoutUser(){
    sessionStorage.clear();
    this._router.navigateByUrl("/inicio").then(() => {
      window.location.reload();});
  }

  userRole(){
    return sessionStorage.getItem("iniciado");
  }

  //QR Code
  CrearMensaje(newmensaje:IQR):Observable<IQR>{
    return this.httpclient.post<IQRs>(`${environment.apiUrl}/mensajes`, newmensaje);
  }

  //obtener QRs del JSON
  getAllQR(correo:any):Observable<IQRs>{
    return this.httpclient.get<IQRs>(`${environment.apiUrl}/mensajes/?nombreProfesor=${correo}`);
  }
  getQRWithId(id:number):Observable<IQRs>{
    return this.httpclient.get<IQRs>(`${environment.apiUrl}/mensajes/?id=${id}`);
  }

}
