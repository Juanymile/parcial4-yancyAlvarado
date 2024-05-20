import { Component, OnInit } from '@angular/core';
import { SalarioService } from '../salario.service';
import { Salario } from '../salario';
import { NgForOf, NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-salario',
  templateUrl: './salario.component.html',
  imports: [NgFor, NgForOf],
  styleUrls: ['./salario.component.css'],
  
})
export class SalarioComponent implements OnInit {

  salarios: Salario[] = [];

  constructor(private salarioService: SalarioService) { }

  ngOnInit() : void {
    this.salarios = this.salarioService.getSalarios()    
  }
}