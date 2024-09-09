import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-le',
  templateUrl: './le.page.html',
  styleUrls: ['./le.page.scss'],
})
export class LePage implements OnInit {
  
  emailForm: FormGroup;
  email : string ="";
  password : string = ""








constructor(public mensaje:ToastController,public alerta:AlertController, private router:Router, private fb:FormBuilder) { 
  this.emailForm = this.fb.group({
    email: ['', [Validators.required,Validators.email]],
  });
}


//Mensajito Error compañero:
  async MensajeError() {
    const alert = await this.alerta.create({
      header: '¡ALTO AHÍ!',
//    subHeader: 'Contraseña o usuario erroneo',
      message: 'Ningun campo de texto debe estar vació',
      buttons: ['GRACIAS']
    });

    await alert.present();
  }
//Mensaje Correcto:
  async MensajeCorrecto() {
    const toast = await this.mensaje.create({
      message: 'Inicio de session exitoso ',
      duration: 2000
    });
    toast.present();
  }

  onSumbit(){
    if (this.emailForm.valid) {
      console.log('Email:',this.emailForm.value.email);
      
    } else {
      console.log('Email No Valido')
      
    }
  }


  ingresar(){
    if (this.email ==="" || this.password==="" ){
      this.MensajeError()
    }
    else{
      this.MensajeCorrecto()
      this.router.navigate(["/home"])

    }
  }






  ngOnInit() {
  }

}





