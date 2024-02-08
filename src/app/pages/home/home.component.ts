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
      const dados = data.dados;

      dados.map((item) =>{
        item.dataDeCriacao = new Date(item.dataDeCriacao!).toLocaleDateString(`pt-BR`);
        item.dataDeAlteracao = new Date(item.dataDeAlteracao!).toLocaleDateString(`pt-BR`);
      })

      this.Funcionarios = data.dados;
      this.FuncionariosGeral = data.dados;

    });
  }

  search(event: Event) {
    
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.Funcionarios = this.FuncionariosGeral.filter(func => {
      return func.nome.toLowerCase().includes(value);
    })

  }

}
