import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-re',
  templateUrl: './re.page.html',
  styleUrls: ['./re.page.scss'],
})
export class RePage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder, public alerta: AlertController, private router: Router) { 
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'email': new FormControl("", [Validators.required, Validators.email]),
      'password': new FormControl("", Validators.required),
      'confirmacion': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {}

  async ingresar() {
    if (this.formularioRegistro.invalid) {
      const alert = await this.alerta.create({
        header: 'Datos Incompletos',
        message: 'Tienes que llenar todos los datos correctamente.',
        buttons: ['Aceptar']
      });

      await alert.present();
      return; 
    }

 
    if (this.formularioRegistro.value.password !== this.formularioRegistro.value.confirmacion) {
      const alert = await this.alerta.create({
        header: 'Error',
        message: 'La contraseña y la confirmación no coinciden.',
        buttons: ['Aceptar']
      });

      await alert.present();
      return; 
    }


    var f = this.formularioRegistro.value;


    var usuario = {
      nombre: f.nombre,
      email: f.email,
      password: f.password
    }

    
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }
}
