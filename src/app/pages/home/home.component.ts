import { Funcionario } from './../../models/Funcionario';
import { FuncionarioService } from './../../services/funcionario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Funcionarios: Funcionario[] = [];
  FuncionariosGeral: Funcionario[] = []; // serva para busca

  constructor(private funcionarioService: FuncionarioService){}

  ngOnInit(): void {
    this.funcionarioService.GetFuncionarios().subscribe(data => {
      console.log(data);
    });
  }

}
