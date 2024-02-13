import { FuncionarioService } from './../../services/funcionario.service';
import { Funcionario } from './../../models/Funcionario';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  btnAcao: string = "Cadastrar";
  txtTitulo: string = "Cadastrar Funcionario";

  constructor(private funcionarioService: FuncionarioService, private router: Router){

  }

createFuncionario(funcionario: Funcionario) {
  this.funcionarioService.CreateFuncionario(funcionario).subscribe(data => {
    this.router.navigate(['/'])
  });
}

}
