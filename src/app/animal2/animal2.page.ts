import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal2',
  templateUrl: './animal2.page.html',
  styleUrls: ['./animal2.page.scss'],
})
export class Animal2Page {
  select1Value: string;
  select2Value: string;
  select3Value: string;
  select4Value: string;

  constructor(
    private alertController: AlertController,
    private router: Router
  ) {
    this.select1Value = '';
    this.select2Value = '';
    this.select3Value = '';
    this.select4Value = '';
  }

  async presentAlert() {
    // Definir las respuestas correctas e incorrectas
    const correctAnswer1 = 'Sky1';
    const correctAnswer2 = 'Bronw2';
    const correctAnswer3 = 'Aqua3';
    const correctAnswer4 = 'Pink4';
    console.log('Valor seleccionado 1:', this.select1Value);
    console.log('Valor seleccionado 2:', this.select2Value);
    console.log('Valor seleccionado 3:', this.select3Value);
    console.log('Valor seleccionado 4:', this.select4Value);

    // Verificar respuestas
    let correctCount = 0;
    let incorrectCount = 0;

    if (this.select1Value === correctAnswer1) {
      correctCount++;
    } else {
      incorrectCount++;
    }

    if (this.select2Value === correctAnswer2) {
      correctCount++;
    } else {
      incorrectCount++;
    }

    if (this.select3Value === correctAnswer3) {
      correctCount++;
    } else {
      incorrectCount++;
    }

    if (this.select4Value === correctAnswer4) {
      correctCount++;
    } else {
      incorrectCount++;
    }

    // Crear el cuadro de diálogo de alerta
    const alert = await this.alertController.create({
      header: '¡Tus Resultados 🎉',
      message: `❎ ${correctCount}☑️ ${incorrectCount}`,
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Volver al menu ;)',
          handler: () => {
            this.router.navigateByUrl('/menu');
          }
        }
      ]
    });
    // Mostrar el cuadro de diálogo de alerta
    await alert.present();
  }
}