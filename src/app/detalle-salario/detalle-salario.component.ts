import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Salario } from '../salario';
import { SalarioService } from '../salario.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-detalle-salario',
  standalone: true,
  imports: [NgIf],
  templateUrl: './detalle-salario.component.html',
  styleUrl: './detalle-salario.component.css'
})
export class DetalleSalarioComponent implements OnInit {

  id?:number;
  nombre?:string;
  apellido?:string;
  email?:string;
  telefono?:string;
  salario?:number;

  private salarioService: SalarioService = new SalarioService;

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit(): void {
      this.id = parseInt(this.route.snapshot.paramMap.get('id')!);
      const salario = this.salarioService.getSalarios().find(salario => salario.id === this.id);
      this.nombre = salario?.nombre;
      this.apellido = salario?.apellido;
      this.email = salario?.email;
      this.telefono = salario?.telefono;
      this.salario = salario?.salario;
  }
}
