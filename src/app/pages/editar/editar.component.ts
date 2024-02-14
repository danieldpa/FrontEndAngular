import { FuncionarioService } from './../../services/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionario';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  btnAcao: string = "Editar";
  txtTitulo: string = "Editar Funcionário";
  funcionario!: Funcionario;

  constructor(private funcionarioService : FuncionarioService, private route : ActivatedRoute, private router : Router) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.funcionarioService.GetFuncionario(id).subscribe((data) => {
      this.funcionario = data.dados;
    })
  }

  editarFuncionario(funcionario: Funcionario) {
    this.funcionarioService.EditFuncionario(funcionario).subscribe(data => {
      this.router.navigate(['/']);
    });
  }
}
