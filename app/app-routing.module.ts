import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizadoGuard } from './guards/autorizado.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'informacion',
    loadChildren: () => import('./pages/informacion/informacion.module').then( m => m.InformacionPageModule)
  },
  {
    path: 'iniciar',
    loadChildren: () => import('./pages/iniciar/iniciar.module').then( m => m.IniciarPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'recpcontra',
    loadChildren: () => import('./pages/recpcontra/recpcontra.module').then( m => m.RecpcontraPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'apinoti',
    loadChildren: () => import('./pages/apinoti/apinoti.module').then( m => m.ApinotiPageModule),
    canActivate:[AutorizadoGuard]
  },
  {
    path: 'feriados',
    loadChildren: () => import('./pages/feriados/feriados.module').then( m => m.FeriadosPageModule),
    canActivate:[AutorizadoGuard]
  },
  {
    path: 'listar',
    loadChildren: () => import('./pages/listar/listar.module').then( m => m.ListarPageModule),
    canActivate:[AutorizadoGuard]
  },
  {
    path: 'agregar',
    loadChildren: () => import('./pages/agregar/agregar.module').then( m => m.AgregarPageModule),
    canActivate:[AutorizadoGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate:[AutorizadoGuard]
  },
  {
    path: 'select',
    loadChildren: () => import('./pages/select/select.module').then( m => m.SelectPageModule)
  },
  {
    path: 'registro-alumno',
    loadChildren: () => import('./pages/registro-alumno/registro-alumno.module').then( m => m.RegistroAlumnoPageModule)
  },
  {
    path: 'qrgenerate',
    loadChildren: () => import('./pages/qrgenerate/qrgenerate.module').then( m => m.QrgeneratePageModule)
  },
  {
    path: 'qrlist',
    loadChildren: () => import('./pages/qrlist/qrlist.module').then( m => m.QrlistPageModule)
  },
  {
    path: 'qrrecord/:id',
    loadChildren: () => import('./pages/qrrecord/qrrecord.module').then( m => m.QrrecordPageModule)
  },
  {
    path: 'select-log',
    loadChildren: () => import('./pages/select-log/select-log.module').then( m => m.SelectLogPageModule)
  },
  {
    path: 'iniciar-alum',
    loadChildren: () => import('./pages/iniciar-alum/iniciar-alum.module').then( m => m.IniciarAlumPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
