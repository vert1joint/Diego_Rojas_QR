import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes: Componente[] = [
    {
      name: 'Inicio',
      redirecTo: '/inicio',
      icon: 'home-outline'
    },
    {
      name: 'Noticias',
      redirecTo: '/apinoti',
      icon: 'newspaper-outline'
    },
    {
      name: 'Feriados',
      redirecTo: '/feriados',
      icon: 'today-outline'
    },
    {
      name: 'Listar',
      redirecTo: '/listar',
      icon: 'document-outline'
    },
    {
      name: 'Información',
      redirecTo: '/informacion',
      icon: 'alert-circle-outline'
    }, 
  ]
}
