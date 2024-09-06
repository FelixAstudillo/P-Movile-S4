import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { home, navigate, star } from 'ionicons/icons';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder 
} from '@angular/forms';



@Component({
  selector: 'app-le',
  templateUrl: './le.page.html',
  styleUrls: ['./le.page.scss'],
})
export class LePage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public formBuilder: FormBuilder) { 

    this.formularioLogin = this.formBuilder.group({
      'Nombre': new FormControl("",Validators.required),
      'Contraseña': new FormControl("",Validators.required),
    })
  }

  ngOnInit() {}

  ingresar() {
    if (this.formularioLogin.valid) {//para poder ingresar
      console.log('Formulario válido:', this.formularioLogin.value);
    } else {
      console.log('Formulario no válido');
    }
  }
  

}
