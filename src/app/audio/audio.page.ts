import { Component, OnInit, ViewChild } from '@angular/core';
import { Database, object, ref, set } from '@angular/fire/database';
import { AlertController } from '@ionic/angular';
import { onValue } from 'firebase/database';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.page.html',
  styleUrls: ['./audio.page.scss'],
})
export class AudioPage implements OnInit {
  @ViewChild('audioElement') audioElement: any;
  constructor(private database: Database, private alertController: AlertController) { }

  ngOnInit() {
    const estadoARef = ref(this.database, '/Respuestas Audio/EstadoA');

    onValue(estadoARef, (snapshot) => {
      const estadoA = snapshot.val();
      console.log('EstadoA actual:', estadoA);
    });
  }
  stopAll() {
    const audio = this.audioElement.nativeElement as HTMLAudioElement;
    audio.pause();
  }

  playAudio1() {
    const audio = this.audioElement.nativeElement as HTMLAudioElement;
    audio.src = 'assets/audio/Audi4.1.mp3';
    audio.load();
    audio.play();
    console.log({audio});
    
  }
  
  playAudio2() {
    const audio = this.audioElement.nativeElement as HTMLAudioElement;
    audio.src = 'assets/audio/Audio2.1.mp3';
    audio.load();
    audio.play();
    console.log({audio});
    
  }
  
  playAudio3() {
    const audio = this.audioElement.nativeElement as HTMLAudioElement;
    audio.src = 'assets/audio/Audio3.1.mp3';
    audio.load();
    audio.play();
    console.log({audio});
    
  }
  
  playAudio4() {
    const audio = this.audioElement.nativeElement as HTMLAudioElement;
    audio.src = 'assets/audio/Audio3.1-1.mp3';
    audio.load();
    audio.play();
    console.log({audio});
    
  }

  sendResponse() {
    const estadoAudio = this.leerCheckbox();

    const estadoA = estadoAudio ? 1 : 0;

    const estadoARef = ref(this.database, '/RespuestaA/EstadoA');
    set(estadoARef, estadoA);
    if (estadoAudio) {
      this.presentAlert('¡Sus respuestas son correctas!');
    } else {
      this.presentAlert('¡Sus respuestas son incorrectas!');
    }
  }

  leerCheckbox(): boolean {
    const checkboxes = document.querySelectorAll('.custom-checkbox-true');
    let checkedCount = 0;
    let customCheckedCount = 0;

    checkboxes.forEach((checkbox: any) => {
      if (checkbox.checked) {
        checkedCount++;
      }
      customCheckedCount++;
    });

    if (checkedCount === customCheckedCount && checkedCount > 0) {
      return true;
    } else {
      return false;
    }
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: '¡Alerta!',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}