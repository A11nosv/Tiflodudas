import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assistant',
  templateUrl: './assistant.page.html',
  styleUrls: ['./assistant.page.scss'],
})
export class AssistantPage implements OnInit {

  selectedIA: string = '';
  selectedOption: any = null;

  iaOptions = [
    { 
      label: 'Anotadores', 
      value: 'anotadores', 
      url: 'https://notebooklm.google.com/notebook/6a843cd6-b6f3-4dae-8ba4-04e56c41140b',
      icon: 'journal-outline',
      description: 'Accede al cuaderno especializado en anotadores y dispositivos de toma de notas para personas con discapacidad visual.'
    },
    { 
      label: 'Impresora braille', 
      value: 'impresoras', 
      url: 'https://notebooklm.google.com/notebook/321dce28-3cfb-4d86-bc17-a4952bf4719e',
      icon: 'print-outline',
      description: 'Consulta información sobre impresoras Braille y sistemas de relieve.'
    },
    { 
      label: 'Lectores de pantalla', 
      value: 'lectores', 
      url: 'https://notebooklm.google.com/notebook/435726d9-1a6d-4b4c-9a54-7f8e4c530816',
      icon: 'megaphone-outline',
      description: 'Toda la información sobre JAWS, NVDA, VoiceOver y otros lectores de pantalla.'
    },
    { 
      label: 'L braille', 
      value: 'braille', 
      url: 'https://notebooklm.google.com/notebook/945db17e-f099-4c0b-bfd6-764f5350493f',
      icon: 'ellipsis-horizontal-outline',
      description: 'Explora los diferentes modelos y configuraciones de líneas y terminales Braille.'
    },
    { 
      label: 'Magnificador de pantalla', 
      value: 'magnificadores', 
      url: 'https://notebooklm.google.com/notebook/132824af-9c82-4b93-aa41-ece8862f633f',
      icon: 'search-outline',
      description: 'Información sobre software y hardware para la ampliación de imagen y mejora de contraste.'
    },
    { 
      label: 'Teléfonos adaptados', 
      value: 'telefonos', 
      url: 'https://notebooklm.google.com/notebook/5adfac7c-5bd6-41c5-9cce-93b79d1ac8cf',
      icon: 'phone-portrait-outline',
      description: 'Dispositivos móviles y configuraciones de accesibilidad para telefonía.'
    },
    { 
      label: 'Software didáctico', 
      value: 'didactico', 
      url: 'https://notebooklm.google.com/notebook/placeholder-didactico',
      icon: 'school-outline',
      description: 'Programas y aplicaciones diseñadas para el aprendizaje y la formación adaptada.'
    },
    { 
      label: 'Asistentes Virtuales', 
      value: 'asistentes', 
      url: 'https://notebooklm.google.com/notebook/placeholder-asistentes',
      icon: 'mic-outline',
      description: 'Información sobre asistentes de voz y dispositivos inteligentes como Alexa, Siri y Google Assistant.'
    },
    { 
      label: 'Mecanografía', 
      value: 'mecanografia', 
      url: 'https://notebooklm.google.com/notebook/placeholder-mecanografia',
      icon: 'keyboard-outline',
      description: 'Recursos y guías para el aprendizaje y perfeccionamiento de la mecanografía adaptada.'
    },
    { 
      label: 'OCR', 
      value: 'ocr', 
      url: 'https://notebooklm.google.com/notebook/placeholder-ocr',
      icon: 'scan-outline',
      description: 'Información sobre sistemas de reconocimiento óptico de caracteres para convertir texto impreso en digital.'
    },
    { 
      label: 'Reproductores Daisy', 
      value: 'daisy', 
      url: 'https://notebooklm.google.com/notebook/placeholder-daisy',
      icon: 'play-circle-outline',
      description: 'Libros hablados digitales y reproductores compatibles con el estándar DAISY.'
    },
    { 
      label: 'Lupas Televisión', 
      value: 'lupas-tv', 
      url: 'https://notebooklm.google.com/notebook/placeholder-lupas-tv',
      icon: 'tv-outline',
      description: 'Sistemas de ampliación de gran formato para la lectura de documentos y visualización de objetos.'
    },
    { 
      label: 'Software ONCE', 
      value: 'software-once', 
      url: 'https://notebooklm.google.com/notebook/placeholder-software-once',
      icon: 'apps-outline',
      description: 'Programas y herramientas específicas desarrolladas por la ONCE para facilitar la accesibilidad y el trabajo diario.'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  onIAChange() {
    this.selectedOption = this.iaOptions.find(opt => opt.value === this.selectedIA) || null;
  }

  openNotebook() {
    if (this.selectedOption) {
      window.open(this.selectedOption.url, '_blank');
    }
  }

}
