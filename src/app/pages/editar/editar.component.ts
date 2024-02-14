import { Component } from '@angular/core';
import { Funcionario } from 'src/app/models/Funcionario';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  btnAcao: string = "Editar";
  txtTitulo: string = "Editar Funcionário";
  funcionario!: Funcionario;

}
