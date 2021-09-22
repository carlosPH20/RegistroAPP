import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) {

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })

   }

  ngOnInit() {
  }
  async ingresar(){
    var f = this.formularioLogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.nombre == f.nombre && usuario.password == f.password){
      console.log('INGRESADO');
      localStorage.setItem('ingresado','true');
      this.navCtrl.navigateRoot('home');
    }else{const alert = await this.alertController.create({
      header: 'Datos incorrectos',
      message: 'Debes ingresar datos que coincidan',
      buttons: ['Confirmar']

    });

    await alert.present();
    return;
      
      
    }
  }
  async contra(){

    {const alert = await this.alertController.create({
      header: 'Recuperar contraseña',
      message: 'Su contraseña sera Restablecida mediante un correo durante los proximos dias.',
      buttons: ['Confirmar']

    });

    await alert.present();
    return;
      
      
      
      
    }
  }
}
