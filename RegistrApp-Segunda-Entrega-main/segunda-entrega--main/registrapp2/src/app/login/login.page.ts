import { Component,ViewChild,ElementRef} from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Router, NavigationExtras } from '@angular/router';
import { AutentificarService } from '../Servicio/autentificacion.service';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  @ViewChild(IonModal) modal!: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  nombre = '';
  constructor(private router: Router) {

  }
  public estado: String = "";
  public mensaje=""

  user = {
    usuario: "",
    password: ""
  }

  
  iniciarSesion() {
      this.router.navigate(['/iniciar-sesion']);
  }

  recuperarContrasena() {
      this.router.navigate(['/recuperar-contrasena']);
}

cancel() {
  this.modal.dismiss(null, 'cancel');
}

confirm() {
  this.modal.dismiss(this.user.usuario, 'confirm');
}
/*confirm() {
  this.auth.register(this.user.usuario, this.user.password).then((res) => {
    if(res) {
      this.estado = "El usuario ya existe";

    }else{
      this.mensaje="Usuario registrado con exito";
      this.modal.dismiss(this.user.usuario, 'confirm');
    }
  })
}*/

onWillDismiss(event: Event) {
  const ev = event as CustomEvent<OverlayEventDetail<string>>;
  if (ev.detail.role === 'confirm') {
    this.mensaje = `Hello, ${ev.detail.data}!`;
  }
}
}