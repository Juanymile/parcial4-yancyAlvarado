import { Routes } from '@angular/router';
import { SalarioComponent } from './salario/salario.component';
import { DetalleSalarioComponent } from './detalle-salario/detalle-salario.component';

export const routes: Routes = [
    { path: 'salarios', component: SalarioComponent },
    { path: 'salarios/:id', component: DetalleSalarioComponent },
];
