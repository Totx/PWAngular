import { Routes } from '@angular/router';
import { FormularioEjemploComponent } from './components/formulario-ejemplo/formulario-ejemplo.component';
import { HolaMundoComponent } from './components/hola-mundo/hola-mundo.component';

export const routes: Routes = [
    {path: "", component: HolaMundoComponent},
    {path: "formulario", component: FormularioEjemploComponent}
];
