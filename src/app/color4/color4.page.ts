import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { set } from 'firebase/database';  
import { Database, object, ref } from '@angular/fire/database';

@Component({
  selector: 'app-color4',
  templateUrl: './color4.page.html',
  styleUrls: ['./color4.page.scss'],
})
export class Color4Page {
  estadoimagen1: number | undefined;
  estadoimagen2: number | undefined;
  estadoimagen3: number | undefined;
  estadoimagen4: number | undefined;

  constructor(
    private database: Database,
    public alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    const routeimagen1 = ref(this.database, "respuestaiii/img1");
    object(routeimagen1).subscribe(attributes => {
      this.estadoimagen1 = attributes.snapshot.val();
    });

    const routeimagen2 = ref(this.database, "respuestaiii/img2");
    object(routeimagen2).subscribe(attributes => {
      this.estadoimagen2 = attributes.snapshot.val();
    });

    const routeimagen3 = ref(this.database, "respuestaiii/img3");
    object(routeimagen3).subscribe(attributes => {
      this.estadoimagen3 = attributes.snapshot.val();
    });

    const routeimagen4 = ref(this.database, "respuestaiii/img4");
    object(routeimagen4).subscribe(attributes => {
      this.estadoimagen4 = attributes.snapshot.val();
    });
  }

  cambiarimagen1(nuevoEstado: boolean) {
    const routeimagen1 = ref(this.database, "respuestaiii/img1");
    set(routeimagen1, nuevoEstado ? 1 : 0); 
    this.estadoimagen1 = nuevoEstado ? 1 : 0;
  }

  cambiarimagen2(nuevoEstado: boolean) {
    const routeimagen2 = ref(this.database, "respuestaiii/img2");
    set(routeimagen2, nuevoEstado? 1 : 0);
    this.estadoimagen2 = nuevoEstado? 1 : 0;
  }

  cambiarimagen3(nuevoEstado: boolean) {
    const routeimagen3 = ref(this.database, "respuestaiii/img3");
    set(routeimagen3, nuevoEstado ? 1 : 0);
    this.estadoimagen3 = nuevoEstado? 1 : 0;
  }

  cambiarimagen4(nuevoEstado: boolean) {
    const routeimagen4 = ref(this.database, "respuestaiii/img4");
    set(routeimagen4, nuevoEstado? 1 : 0);
    this.estadoimagen4 = nuevoEstado? 1 : 0;
  }

  async presentAlert(imageUrl: string) {
    const alert = await this.alertController.create({
      header: 'Felecidades 🎉',
      message: `Hey bien hecho 😎`,
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Ir a la siguiente actividad ^_^',
          handler: () => {
            this.router.navigateByUrl('/color5');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentSimpleAlert() {
    const alert = await this.alertController.create({
      header: '😱😮😥',
      message: 'Te has equivocado, que tal si lo pruebas otra vez ?',
      buttons: ['Repetir 😊']
    });

    await alert.present();
  }
  
  async confirmarRedireccion() {
    const alert = await this.alertController.create({
      header: 'Hey estas seguro ?',
      message: 'Perderas todo tu progreso 😥',
      buttons: [
        {
          text: 'Quedarme 😊',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Me voy 😮',
          handler: () => {
            // Redirigir a otra página al seleccionar "Sí"
            this.router.navigate(['/menu']);
          },
        },
      ],
    });

    await alert.present();
  }
}
