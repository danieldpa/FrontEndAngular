import { FuncionarioService } from './../../services/funcionario.service';
import { Funcionario } from './../../models/Funcionario';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  constructor(private funcionarioService: FuncionarioService){

  }

createFuncionario(funcionario: Funcionario) {
  this.funcionarioService.CreateFuncionario(funcionario).subscribe();
}

}
