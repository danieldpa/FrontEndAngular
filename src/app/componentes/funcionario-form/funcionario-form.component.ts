import { Funcionario } from './../../models/Funcionario';
import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit{

  @Output() onSubmit = new EventEmitter<Funcionario>();

  funcionarioForm!: FormGroup;

  constructor(){}

  ngOnInit(): void {
    this.funcionarioForm = new FormGroup({
      id: new FormControl(0),
      nome: new FormControl(''),
      sobrenome: new FormControl(''),
      departamento: new FormControl(''),
      turno: new FormControl(''),
      ativo: new FormControl(true),
      dataDeCriacao: new FormControl(new Date()),
      dataDeAlteracao: new FormControl(new Date())
    });
  }

  submit() {
    this.onSubmit.emit(this.funcionarioForm.value);
    }

}
