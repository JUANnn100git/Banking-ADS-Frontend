import { NgModule } from '@angular/core';


// Rutas
import { PAGES_ROUTES } from './pages.routes';

// Módulos
import { SharedModule } from '../shared/shared.module';

// Componente Principal
import { PagesComponent } from './pages.component';

// Componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    UsuariosComponent
  ],
  exports: [
    DashboardComponent,
    UsuariosComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES
  ],
  providers: [],
  bootstrap: []
})
export class PagesModule { }
