import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';


@Component({
  selector: 'app-re',
  templateUrl: './re.page.html',
  styleUrls: ['./re.page.scss'],
})
export class RePage implements OnInit {

  formularioRegistro: FormGroup;
  
  constructor(public formBuilder: FormBuilder) {
    this.formularioRegistro = this.formBuilder.group({
      'Nombre': new FormControl("",Validators.required),
      'Contraseña': new FormControl("",Validators.required),
      'confirmacionContraseña' : new FormControl("",Validators.required),
    });
  }
  
  ngOnInit() {
  }

  guardar() {
    if (this.formularioRegistro.valid) {//para poder ingresar
      console.log('Formulario válido:', this.formularioRegistro.value);
    } else {
      console.log('Formulario no válido');
    }
  }

}
